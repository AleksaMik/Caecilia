import "./App.css";
import React, { useState } from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import About from "./components/about.js";
import Portfolio from "./components/portfolio.js";
import Contact from "./components/contact.js";
import Resume from "./components/resume.js";

function App() {
	const [currentTab, setCurrentTab] = useState("about");
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;