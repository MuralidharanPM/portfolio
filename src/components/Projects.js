import "../components/Projects.css";
import ProjectsTitleLogo from "../assets/ProjectsTitleLogo.png";
import React, { useState, useEffect } from "react";

import AutoDeals from "../assets/Projects/autoDealsLogo.PNG";
import Portfolio from "../assets/Projects/PortfolioLogo.PNG";
import DoLearn from "../assets/Projects/doLearnLogo.PNG";
import LearningAlliance from "../assets/Projects/learningAllianceLogo.PNG";
import RockPaperScissor from "../assets/Projects/rockPaperScissorLogo.PNG";
import WeatherApp from "../assets/Projects/weatherAppLogo.PNG";
import ReactLogo from "../assets/SkillLogos/ReactLogo.png";
import JavaScript from "../assets/SkillLogos/JavaScriptLogo.png";
import Typescript from "../assets/SkillLogos/TypeScriptLogo.png";
import GitHub from "../assets/SkillLogos/GitLogo.png";
import Figma from "../assets/SkillLogos/FigmaLogo.png";
import HTML from "../assets/SkillLogos/HTMLLogo.png";
import CSS from "../assets/SkillLogos/CSSLogo.png";
import Bootstrap from "../assets/SkillLogos/BootstrapLogo.png";
import Json from "../assets/SkillLogos/JsonLogo.png";
import RestAPI from "../assets/SkillLogos/RestApiLogo.png";
import Spline from "../assets/SkillLogos/splineLogo.png";
import PhotoShop from "../assets/SkillLogos/PhotoShopLogo.png";

export default function Projects() {

    const uiUxProjList = [{
        projectName: "AutoDeals - Car Dealership website Design",
        projectBanner: AutoDeals,
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.behance.net/gallery/201191549/AutoDeals-Car-Dealership"
    }, {
        projectName: "Portfolio website Design",
        projectBanner: Portfolio,
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.behance.net/gallery/210670013/Portfolio-website-wireframe-for-beginners-type-1"
    }];

    const frontEndProjList = [{
        projectName: "Rock Paper Scissor - Website",
        projectBanner: RockPaperScissor,
        projectTechStac: [ReactLogo, JavaScript, Typescript, GitHub, HTML, CSS, Bootstrap, Json],
        projectLiveLink: "https://muralidharanpm.github.io/rockPaperScissor/"
    }, {
        projectName: "Weather App - Get weather with zipcode",
        projectBanner: WeatherApp,
        projectTechStac: [ReactLogo, JavaScript, Typescript, GitHub, HTML, CSS, Bootstrap, Json, RestAPI],
        projectLiveLink: "https://muralidharanpm.github.io/weatherapp/"
    }, {
        projectName: "Learning Alliance E-Learning website",
        projectBanner: LearningAlliance,
        projectTechStac: [ReactLogo, JavaScript, Typescript, GitHub, HTML, CSS, Bootstrap, Json],
        projectLiveLink: "https://muralidharanpm.github.io/learningAlliance/"
    }, {
        projectName: "Portfolio website",
        projectBanner: Portfolio,
        projectTechStac: [ReactLogo, JavaScript, Typescript, GitHub, HTML, CSS, Bootstrap, Json, RestAPI],
        projectLiveLink: "https://muralidharanpm.github.io/portfolio/"
    }, {
        projectName: "DoLearn E-Learning website",
        projectBanner: DoLearn,
        projectTechStac: [ReactLogo, JavaScript, Typescript, GitHub, HTML, CSS, Bootstrap, Json],
        projectLiveLink: "https://muralidharanpm.github.io/dolearn/"
    }];

    const fullStackProjList = [];

    const handleClick = (link) => {
        window.open(link, "_blank");
    }

    const allProjects = [{
        projectType: "Frontend Project",
        projectName: "Weather App - Get weather with zipcode",
        projectBanner: WeatherApp,
        projectDes: "The OpenWeather API is used to fetch the current weather based on the pin code entered by the user, which is then displayed in the UI.",
        projectTechStac: [ReactLogo, JavaScript, Typescript, GitHub, HTML, CSS, Bootstrap, Json, RestAPI],
        projectLiveLink: "https://muralidharanpm.github.io/weatherapp/",
        cardBackColour: "rgb(226 186 102)",
        cardContBackColour: "#fff2d7",
        cardContTextColor: "#000",
        folderColor: "#14c04f",
        fontColor: "#fff"
    }, {
        projectType: "Frontend Project",
        projectName: "Learning Alliance E-Learning website",
        projectBanner: LearningAlliance,
        projectDes: "An e-learning website was developed for a startup e-learning registration platform and provides information about UI courses.",
        projectTechStac: [ReactLogo, JavaScript, Typescript, GitHub, HTML, CSS, Bootstrap, Json],
        projectLiveLink: "https://muralidharanpm.github.io/learningAlliance/",
        cardBackColour: "#7e7e7f",
        cardContBackColour: "rgb(245 247 250)",
        cardContTextColor: "#000",
        folderColor: "#14c04f",
        fontColor: "#fff"
    }, {
        projectType: "Frontend Project",
        projectName: "Rock Paper Scissor - Game Website",
        projectBanner: RockPaperScissor,
        projectDes: "A website for a Rock-Paper-Scissors game against the computer, featuring an engaging UI, 3D assets, and result announcements.",
        projectTechStac: [ReactLogo, JavaScript, Typescript, GitHub, HTML, CSS, Bootstrap, Json],
        projectLiveLink: "https://muralidharanpm.github.io/rockPaperScissor/",
        cardBackColour: "#5f4ca5",
        cardContBackColour: "rgb(33 12 69)",
        cardContTextColor: "#fff",
        folderColor: "#14c04f",
        fontColor: "#fff"
    }, {
        projectType: "Frontend Project",
        projectName: "DoLearn Startup E-Learning website",
        projectBanner: DoLearn,
        projectDes: "An e-learning website was developed for a startup's registration platform, focusing on UI and front-end development courses.",
        projectTechStac: [ReactLogo, JavaScript, Typescript, GitHub, HTML, CSS, Bootstrap, Json],
        projectLiveLink: "https://muralidharanpm.github.io/dolearn/",
        cardBackColour: "#6673d3",
        cardContBackColour: "rgb(238 240 254)",
        cardContTextColor: "#000",
        folderColor: "#14c04f",
        fontColor: "#fff"
    }, {
        projectType: "UI/UX Project",
        projectName: "AutoDeals - Car Dealership Design",
        projectBanner: AutoDeals,
        projectDes: "AutoDeals - A wireframe designed for a car dealership, developed for real-time business operations with a focus on client sophistication.",
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.behance.net/gallery/201191549/AutoDeals-Car-Dealership",
        cardBackColour: "rgb(195 191 191)",
        cardContBackColour: "rgb(240 240 240)",
        cardContTextColor: "#000",
        folderColor: "#f3f324",
        fontColor: "#000"
    }, {
        projectType: "UI/UX Project",
        projectName: "Portfolio - Beginner Website Design",
        projectBanner: Portfolio,
        projectDes: "A portfolio wireframe was developed for beginner IT professionals, focusing on showcasing their key skills and capabilities.",
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.behance.net/gallery/210670013/Portfolio-website-wireframe-for-beginners-type-1",
        cardBackColour: "#f0f0f0",
        cardContBackColour: "rgb(255 255 255)",
        cardContTextColor: "#000",
        folderColor: "#f3f324",
        fontColor: "#000"
    }]

    return (
        <>
            <div className="projectHeadCls">
                <div className="projectSecParCls">
                    <div className="projectSecCls">
                        <div className="projectTitleHeadCls">
                            Projects<span className="projectTitleLogoCls"><img className="projectTopicLocCls" src={ProjectsTitleLogo} alt="Project Set Head Topic Logo"></img></span>
                        </div>
                        <div className="projectCardAreaCls">
                            <div className="projectCardPCls">
                                {
                                    allProjects.map((item) => (
                                        <div className="proCardHeadCls">
                                            <div className="proCardPCls" key={item.id}>
                                                <div className="proCardCatyCls" style={{ backgroundColor: item.folderColor, color: item.fontColor }}>{item.projectType}</div>
                                                <div className="proCardCCls" style={{ backgroundColor: item.cardBackColour }}>
                                                    <div className="proCardThumbCls">
                                                        <img className="proCardThumbNailCls" src={item.projectBanner} alt="Project Card Image Thumbnail" />
                                                    </div>
                                                    <div className="proCardContCls">
                                                        <div className="proCardProjDetailsCls" style={{ color: item.cardContTextColor }}>
                                                            <div className="proCardTitleCls">
                                                                {item.projectName}</div>
                                                            <div className="proCardContCls">{item.projectDes}</div>
                                                        </div>
                                                        <div className="proCardLiveLinkCls">
                                                            <button className="proCardLiveLinkBtnCls" onClick={() => handleClick(item.projectLiveLink)}>Live Link</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}