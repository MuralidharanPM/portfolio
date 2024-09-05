import "../components/Projects.css";
import ProjectsTitleLogo from "../assets/ProjectsTitleLogo.png";
import React, { useState, useEffect } from "react";

import AutoDeals from "../assets/Projects/autoDealsLogo.PNG";
import Portfolio from "../assets/Projects/PortfolioLogo.PNG";
import DoLearn from "../assets/Projects/doLearnLogo.PNG";
import LearningAlliance from "../assets/Projects/learningAllianceLogo.PNG";
import RockPaperScissor from "../assets/Projects/rockPaperScissorLogo.PNG";
import WeatherApp from "../assets/Projects/weatherAppLogo.PNG";


import AngularLogo from "../assets/SkillLogos/AngularLogo.png";
import ReactLogo from "../assets/SkillLogos/ReactLogo.png";
import JavaScript from "../assets/SkillLogos/JavaScriptLogo.png";
import Typescript from "../assets/SkillLogos/TypeScriptLogo.png";
import GitHub from "../assets/SkillLogos/GitLogo.png";
import Figma from "../assets/SkillLogos/FigmaLogo.png";
import HTML from "../assets/SkillLogos/HTMLLogo.png";
import CSS from "../assets/SkillLogos/CSSLogo.png";
import Bootstrap from "../assets/SkillLogos/BootstrapLogo.png";
import RxJS from "../assets/SkillLogos/RxjsLogo.png";
import SQL from "../assets/SkillLogos/sqlLogo.png";
import Java from "../assets/SkillLogos/JavaLogo.png";
import Json from "../assets/SkillLogos/JsonLogo.png";
import SpringMVC from "../assets/SkillLogos/SpringLogo.png";
import RestAPI from "../assets/SkillLogos/RestApiLogo.png";
import SVN from "../assets/SkillLogos/svnLogo.png";
import FiveStar from "../assets/SkillStars/5-Star-Type-2.png";
import FourStar from "../assets/SkillStars/4-Star-Type-2.png";
import ThreeStar from "../assets/SkillStars/3-Star-Type-2.png";
import TwoStar from "../assets/SkillStars/2-Star-Type-2.png";
import Spline from "../assets/SkillLogos/splineLogo.png";
import PhotoShop from "../assets/SkillLogos/PhotoShopLogo.png";

export default function Projects() {
    const [projectDetails, setProjectTabToDisplay] = useState('');

    const uiUxProjList = [{
        projectName: "AutoDeals - Car Dealership website Design",
        projectBanner: AutoDeals,
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.google.com/"
    }, {
        projectName: "Portfolio website Design",
        projectBanner: Portfolio,
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.google.com/"
    }]

    const frontEndProjList = [{
        projectName: "DoLearn E-Learning website",
        projectBanner: DoLearn,
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.google.com/"
    }, {
        projectName: "Rock Paper Scissor - Website",
        projectBanner: RockPaperScissor,
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.google.com/"
    }, {
        projectName: "Weather App - Get weather with zipcode",
        projectBanner: WeatherApp,
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.google.com/"
    }, {
        projectName: "Learning Alliance E-Learning website",
        projectBanner: LearningAlliance,
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.google.com/"
    }, {
        projectName: "Portfolio website for professionals",
        projectBanner: Portfolio,
        projectTechStac: [Figma, Spline, PhotoShop],
        projectLiveLink: "https://www.google.com/"
    }]

    const fullStackProjList = []

    useEffect(() => {
        projectBtnFuncReturn("FrontEnd");
    }, []);

    const projectBtnFuncReturn = (projButtonSet) => {
        if (projButtonSet === "UIUX") {
            setProjectTabToDisplay(
                <div className="projectSecContentCls">
                    {uiUxProjList.map((item, index) => (
                        <div className="projectSecMainParentCls">
                            <div className="projectSecMainBlockCls">
                                <div className="projectMainData">
                                    <div className="projectTitleCls">{item.projectName}</div>
                                    <div className="projectTechStackCls">
                                        <div className="techStackTitleCls">Tech Stack : </div>
                                        <div className="techStackIconsCls">
                                            {(item.projectTechStac).map((image, index) => (
                                                <span className="projiTechStackCls"><img className="ProjTechStackIconCls" src={image} alt="Skill Set Head Topic Logo"></img></span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="projectLiveLinkCls">
                                        <button className="projectLinkBtnCls" onClick={() => window.open(item.projectLiveLink)}>Explore Live</button>
                                    </div>
                                </div>
                                <div className="projectMainBanCls">
                                    <img className="projectThumbnailCls" src={item.projectBanner} alt="Skill Set Head Topic Logo"></img>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        } else if (projButtonSet === "FrontEnd") {
            setProjectTabToDisplay(
                <div className="projectSecContentCls">
                    {frontEndProjList.map((item, index) => (
                        <div className="projectSecMainParentCls">
                            <div className="projectSecMainBlockCls">
                                <div className="projectMainData">
                                    <div className="projectTitleCls">{item.projectName}</div>
                                    <div className="projectTechStackCls">
                                        <div className="techStackTitleCls">Tech Stack : </div>
                                        <div className="techStackIconsCls">
                                            {(item.projectTechStac).map((image, index) => (
                                                <span className="projiTechStackCls"><img className="ProjTechStackIconCls" src={image} alt="Skill Set Head Topic Logo"></img></span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="projectLiveLinkCls">
                                        <button className="projectLinkBtnCls" onClick={() => window.open(item.projectLiveLink)}>Explore Live</button>
                                    </div>
                                </div>
                                <div className="projectMainBanCls">
                                    <img className="projectThumbnailCls" src={item.projectBanner} alt="Skill Set Head Topic Logo"></img>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        } else if (projButtonSet === "FullStack") {
            setProjectTabToDisplay(
                <div className="projectSecContentCls">
                    {fullStackProjList.map((item, index) => (
                        <div className="projectSecMainParentCls">
                            <div className="projectSecMainBlockCls">
                                <div className="projectMainData">
                                    <div className="projectTitleCls">{item.projectName}</div>
                                    <div className="projectTechStackCls">
                                        <div className="techStackTitleCls">Tech Stack : </div>
                                        <div className="techStackIconsCls">
                                            {(item.projectTechStac).map((image, index) => (
                                                <span className="projiTechStackCls"><img className="ProjTechStackIconCls" src={image} alt="Skill Set Head Topic Logo"></img></span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="projectLiveLinkCls">
                                        <button className="projectLinkBtnCls" onClick={() => window.open(item.projectLiveLink)}>Explore Live</button>
                                    </div>
                                </div>
                                <div className="projectMainBanCls">
                                    <img className="projectThumbnailCls" src={item.projectBanner} alt="Skill Set Head Topic Logo"></img>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <>
            <div className="projectSecContainerCls">
                <div className="projectSecTitleCls">
                    Projects<span><img className="projectTitleHeadIconCls" src={ProjectsTitleLogo} alt="Skill Set Head Topic Logo"></img></span>
                </div>
                <div className="projectSecContentPCls">
                    <div className="projectTabBtnSecCls">
                        <div className="uiUxProjectBtnCls">
                            <button onClick={() => projectBtnFuncReturn("UIUX")}>UI UX</button>
                        </div>
                        <div className="froneEndProjectBtnCls">
                            <button onClick={() => projectBtnFuncReturn("FrontEnd")}>Front-end</button>
                        </div>
                        {/* <div className="fullStackProjectBtnCls">
                            <button onClick={() => projectBtnFuncReturn("FullStack")}>Full Stack</button>
                        </div> */}
                    </div>
                    <div className="projectSecContentAreaCls">{projectDetails}</div>
                </div>
            </div>
        </>
    );
}