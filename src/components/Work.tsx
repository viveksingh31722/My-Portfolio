import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });

    
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[...Array(3)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    {/* Conditional Rendering for Projects */}
                    {index === 0 ? (
                      <>
                        <h4>URBAN NEST: FULL-STACK PROPERTY MARKETPLACE</h4>
                        <p>Full Stack Website "(MERN)"</p>
                      </>
                    ) : index === 1 ? (
                      <>
                        <h4>SubSea Diagram and Cost Estimation Tool</h4>
                        <p>
                          Desktop software for designing SubSea pipelines by
                          connecting components on graph paper, and also helps in
                          cost estimation.
                        </p>
                      </>
                    ) : index === 2 ? (
                      <>
                        <h4>BLOOD LINK - A BLOOD DONATION ANDROID APP</h4>
                        <p>
                          A mobile app that connects blood donors and seekers
                          through a seamless and user-friendly platform.
                        </p>
                      </>
                    ) : (
                      <>
                        <h4>PROJECT {index + 1}</h4>
                        <p>Project Description Here</p>
                      </>
                    )}
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>
                  {index === 0
                    ? "Javascript, NodeJs, ExpressJs, MongoDb, Mongoose, RestFull Api, Jwt, Bcrypt, Git, GitHub"
                    : index === 1
                    ? "JavaScript, NodeJs, React, Docker, JointJs (A motion library in JavaScript)"
                    : index === 2
                    ? "Java, Firebase, Android Studio, Git, GitHub"
                    : "Tools for Project Here"}
                </p>
              </div>
              <WorkImage
                image={
                  index === 0
                    ? "/images/urbanNest.webp"
                    : index === 1
                    ? "/images/subseaProject.webp"
                    : index === 2
                    ? "/images/bloodlink.webp"
                    : "/images/placeholder.webp"
                }
                alt={
                  index === 0
                    ? "Urban Nest"
                    : index === 1
                    ? "SubSea Diagram Tool"
                    : index === 2
                    ? "Blood Link"
                    : `Project ${index + 1}`
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Work;
