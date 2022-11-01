import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import screenCalendar from "../../assets/images/screenCalendar.png";
import screenQuiz from "../../assets/images/screenQuiz.png";
import screenWeather from"../../assets/images/screenWeather.png"


function Portfolio () {  

    return (
        <section className="portfolio">
          
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
  <div class="col">
    <div class="card">
      <img
        src={screenCalendar}
        alt="Calendar"
        class="card-img-top"
      />
      <div class="card-body">

        <a href="https://github.com/AleksaMik/Simple-Calendar" target="_blank" rel="noreferrer">
          <button>GitHub</button>
        </a>
        <a href="https://user-images.githubusercontent.com/105229148/179064279-29b925cf-3d46-4268-a763-8fa7804ee19b.png" target="_blank" rel="noreferrer">
          <button>Website</button>
        </a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img
        src={screenQuiz}
        alt="Calendar"
        class="card-img-top"
      />
      <div class="card-body">

        <a href="https://github.com/AleksaMik/Javascript-Quiz" target="_blank" rel="noreferrer">
          <button>GitHub</button>
        </a>
        <a href="https://user-images.githubusercontent.com/105229148/177793115-482f67fe-1560-401b-add2-5d09ed8d6604.png" target="_blank" rel="noreferrer">
          <button>Website</button>
        </a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img
        src={screenWeather}
        alt="Calendar"
        class="card-img-top"
      />
      <div class="card-body">

        <a href="https://github.com/AleksaMik/Weather-Dashboard" target="_blank" rel="noreferrer">
          <button>GitHub</button>
        </a>
        <a href="https://user-images.githubusercontent.com/105229148/179540250-aecfa24d-e022-4c1b-b835-a42e77c69be0.png" target="_blank" rel="noreferrer">
          <button>Website</button>
        </a>
      </div>
    </div>
  </div>
  </div>
 
        </section>
    
    );
  }

export default Portfolio;