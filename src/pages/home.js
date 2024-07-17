import { useEffect } from "react";
import "../styles/Home.css";
import { FlipWordsDemo } from "../components/FlipWordsDemo";

const Home = () => {
  function FollowMouse(event) {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
      const { left, top, width, height } = eye.getBoundingClientRect();
      const eyeCenterX = left + width / 2;
      const eyeCenterY = top + height / 2;
      const radian = Math.atan2(
        event.pageX - eyeCenterX,
        event.pageY - eyeCenterY
      );
      const angle = radian * (180 / Math.PI) * -1;
      eye.style.transform = `rotate(${angle}deg)`;
    });
  }

  // Move the kitty's hand to attack the mouse where it is clicked
  function AttackMouse(event) {
    const kittyHand = document.getElementsByClassName("kittyhand")[0];
    kittyHand.style.transition = "0.3s";
    kittyHand.style.left = `${event.pageX - 50}px`;
    kittyHand.style.top = `${event.pageY - 50}px`;
    setTimeout(() => {
      kittyHand.style.transition = "0.5s";
      kittyHand.style.left = `50%`;
      kittyHand.style.top = `100%`;
    }, 300);
  }

  useEffect(() => {
    const catHead = document.getElementsByClassName("kitty")[0];
    const eyes = document.querySelectorAll(".eye");

    const handleMouseMove = (event) => FollowMouse(event);

    const handleMouseOver = () => {
      console.log("mouseover");
      document.removeEventListener("mousemove", handleMouseMove);
      eyes.forEach((eye) => {
        // Reset eye position to center
        eye.style.transform = `rotate(0deg)`;

        eye.src = "./kitty-landing-page/assets/eye_closed.png";
      });
    };

    const handleMouseOut = () => {
      console.log("mouseout");
      document.addEventListener("mousemove", handleMouseMove);
      eyes.forEach((eye) => {
        eye.src = "./kitty-landing-page/assets/black_kitty_eye3.png";
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    catHead.addEventListener("mouseover", handleMouseOver);
    catHead.addEventListener("mouseout", handleMouseOut);

    // Attack mouse when clicked
    document.addEventListener("click", AttackMouse);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      catHead.removeEventListener("mouseover", handleMouseOver);
      catHead.removeEventListener("mouseout", handleMouseOut);

      document.removeEventListener("click", AttackMouse);
    };
  }, []);

  return (
    <div className="Home-Screen">
      <div className="upperHalf">
        <div className="title absolute -top-[0] z-50 w-full">
          <FlipWordsDemo />
        </div>
        <img
          src="./kitty-landing-page/assets/black_kitt_cleanup.jpeg"
          className="kitty"
          alt="Kitty"
        />
        <div className="eyes">
          <img
            src="./kitty-landing-page/assets/black_kitty_eye3.png"
            className="eye l-eye"
            alt="left eye"
          />
          <img
            src="./kitty-landing-page/assets/black_kitty_eye3.png"
            className="eye r-eye"
            alt="right eye"
          />
        </div>
      </div>
      <div className="lowerHalf"></div>
        <img
          src="./kitty-landing-page/assets/catHand.png"
          alt="Kitty Hand"
          className="kittyhand"
        />
      {/* <div className="kittyHand">
      </div> */}
    </div>
  );
};

export default Home;
