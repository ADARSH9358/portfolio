"use client"
import React, {useContext} from "react";
import "./skill.css";
import SoftwareSkill from "./SoftwareSkill";
import {skillsSection,illustration} from "./ui/portfolio";
import {Fade} from "react-awesome-reveal";
import codingPerson from "./codingPerson.json";
import DisplayLottie from "./DisplayLottie.js";
import { BackgroundGradientAnimation } from "./ui/GradientBg";

// import StyleContext from "../../contexts/StyleContext";
// import ReactSVG from "./Svg";
export default function Skills() {
//   const {isDark} = useContext(StyleContext);
    const isDark=true;
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div style={{opacity:'0.5'}}>
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
         {/* <ReactSVG /> */}
         
      <div className="skills-main-div">
        <Fade direction="left" duration={1000} triggerOnce>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
                <>
                </>
            //   <img
            //     alt="Man Working"
            //     src={require("../../assets/images/developerActivity.svg")}
            //   ></img>
            )}
          </div>
        </Fade>
        {/* <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation> */}
        <Fade direction="right" duration={1000} triggerOnce>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                    style={{color:'white'}}
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
    </div>
    
  );
}
