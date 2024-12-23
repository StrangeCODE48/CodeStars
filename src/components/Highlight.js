import React from "react";
import google from "../assets/google.png";
import Googelr from "./Googlers";

const Highlight = ({googlers}) => {
  return (
    <section id="Highlight">
      <div className="highlight-google">
        <img src={google} alt="" className="google" />
        <div className="highlight-section">
          <h1>Our core in <span class="blue">G</span><span class="red">o</span><span class="yellow">o</span><span class="blue">g</span><span class="green">l</span><span class="red">e</span> as Interen</h1>
          <div className="highlights">
            {googlers.map((googler , index) => {
              return(<Googelr googler={googler} dealy={index*0.2}/>)
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
