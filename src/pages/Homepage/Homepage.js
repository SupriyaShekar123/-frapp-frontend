import React, { useState } from "react";
import { Animated } from "react-animated-css";

import "../Homepage/Homepage.css";

export default function Homepage() {
  const [text, setText] = useState("block");
  const [mainText, setMainText] = useState("none");

  function first_slide(e) {
    e.preventDefault();

    setText("none");
    setMainText("block");
  }

  return (
    <div>
      <div
        onClick={first_slide}
        style={{ display: `${text}` }}
        className="first_slide"
      >
        <Animated
          animationIn="bounceInLeft"
          animationInDuration={3000}
          animationOutDuration={4000}
          isVisible={true}
        >
          <h3>Does your food go to waste often?</h3>
        </Animated>
        <Animated
          animationIn="bounceInRight"
          animationInDuration={4000}
          animationOutDuration={5000}
          animationInDelay={3000}
          isVisible={true}
        >
          <h3>Are you worried about food waste? </h3>
        </Animated>
        <Animated
          animationIn="bounceInLeft"
          animationInDuration={4000}
          animationOutDuration={4000}
          animationInDelay={7000}
          isVisible={true}
        >
          <h3>Looking for a way to tackle this problem?</h3>
        </Animated>
        <Animated
          animationIn="bounceInRight"
          animationInDuration={4000}
          animationOutDuration={4000}
          animationInDelay={9000}
          isVisible={true}
        >
          <h3>Then you are at the right place</h3>
        </Animated>
        <Animated
          animationIn="bounceInUp"
          animationInDuration={4000}
          animationOutDuration={4000}
          animationInDelay={12000}
          isVisible={true}
        >
          <h3>
            Check out our new app <span className="link">here</span>
          </h3>
        </Animated>
      </div>

      <div style={{ display: `${mainText}` }}>
        <h1>Frapp</h1>
        <h3>What does this app do?</h3>

        <h4>
          This app helps you to manage your food by keeping track of your food
          items in fridge and pantry.
        </h4>

        <h3> four easy steps to reduce your food waste.</h3>
        <div className="container_main">
          <div className="img_div">
            <img
              src="https://www.css3transition.com/wp-content/uploads/2017/08/switch-between-login-and-signup-form.gif"
              alt="signup/login"
              className="Home_img"
            ></img>

            <p>
              <b>1.SignUP</b>
            </p>
            <p>Register directly to this app</p>
          </div>
          <div className="img_div">
            <img
              src="https://i.pinimg.com/originals/44/bc/6b/44bc6b850c656382be67a1de3f91964d.gif"
              className="Home_img"
              alt=""
            />
            <p>
              <b>2.Add items</b>
            </p>
            <p>Add items available in fridge and panrty to app</p>
          </div>
          <div className="img_div">
            <img
              src="https://social-innovation.hitachi/-/media/project/hitachi/sib/en-eu/stories/technology/millennials-wasting-away/fridge5b45d.gif?la=en-150&upd=20200410020344Z&hash=C352702C1852F0B3D7AE3F53EDAD939B"
              className="Home_img"
              alt=""
            />
            <p>
              <b>3.Track</b>
            </p>
            <p>Keep track of all the items available in fridge and pantry.</p>
          </div>
          <div className="img_div">
            <img
              src="https://ordinarygreengirl.files.wordpress.com/2018/11/food-waste-gif.gif?w=372"
              className="Home_img"
              alt=""
            />
            <p>
              <b>4.Waste</b>
            </p>
            <p>Get the list of all the wasted items and shop wisely.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
