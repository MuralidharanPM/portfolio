import "../components/Experience.css";
import ExperienceTitleLogo from "../assets/experienceIcon.png";
import ExperienceBanner from "../assets/expPicDrop1.png";
import CogiLogo from "../assets/Experience/CogniLogoRendered.png";
import React, { useState } from "react";
import AngularLogo from "../assets/SkillLogos/AngularLogo.png";
import JavaScript from "../assets/SkillLogos/JavaScriptLogo.png";
import Typescript from "../assets/SkillLogos/TypeScriptLogo.png";
import HTML from "../assets/SkillLogos/HTMLLogo.png";
import CSS from "../assets/SkillLogos/CSSLogo.png";
import Bootstrap from "../assets/SkillLogos/BootstrapLogo.png";
import RxJS from "../assets/SkillLogos/RxjsLogo.png";
import SQL from "../assets/SkillLogos/sqlLogo.png";
import Java from "../assets/SkillLogos/JavaLogo.png";
import Json from "../assets/SkillLogos/JsonLogo.png";
import RestAPI from "../assets/SkillLogos/RestApiLogo.png";
import SVN from "../assets/SkillLogos/svnLogo.png";

export default function Experience() {
    const startDate = new Date('2022-02-21');
    const currentDate = new Date();
    const yearsDiff = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    const yearsOfExperience = yearsDiff.toFixed(1);
    let expSpan = yearsOfExperience + " years";
    const [expOneState, setExpOneState] = useState(false);
    const [expTwoState, setExpTwoState] = useState(false);
    return (
        <>
            <div className="experienceParentClass">
                <div className="experienceSecTitleCls">
                    Experience<span><img className="experienceTitleHeadIconCls" src={ExperienceTitleLogo} alt="Skill Set Head Topic Logo"></img></span>
                </div>
                <div className="experienceSumContentCls">
                    <div className="experienceSumTextCls">
                        <div className="expSumPointHeadCls">
                            <div className="expSumPointHeadCls">With <span className="expSumTimeCls">{expSpan}</span> of extensive experience in development, specializing in <span className="expSumTechCls">front-end and full-stack technologies.</span></div>
                            <div className="expSumPointHeadCls">I've developed a strong understanding of project architecture, client-specific requirements, and defect management.</div>
                            <div className="expSumPointHeadCls">I'm passionate about learning new technologies and dedicated to driving innovation in my work.</div>
                        </div >
                    </div>
                </div>
                <div className="experienceContentCls">
                    <div className="experienceCardSetPCls">
                        <div className="expCardPCls">
                            <div className="expCardLogoSectionCls">
                                <img className="experienceTitleHeadIconCls" src={CogiLogo} alt="Skill Set Head Topic Logo"></img>
                            </div>
                            <div className="expCardCOntSectionCls">
                                <div className="expCardContOneCls">
                                    Software Engineer Trainee
                                </div>
                                <div className="expCardContTwoCls">
                                    June 2022 - June 2023
                                </div>
                            </div>
                            <div className="expiTechStackPCls">
                                <div className="expiTechTitleCls">Tech Stack :</div>
                                <div className="expiTechListCls">
                                    {[AngularLogo, JavaScript, Typescript, HTML, CSS, Bootstrap, SVN].map((image, index) => (
                                        <span className="expiTechStackCls"><img className="expiTechStackIconCls" src={image} alt="Skill Set Head Topic Logo"></img></span>
                                    ))}
                                </div>
                            </div>
                            <div className="expCardDynSecCls">
                                {expOneState ? (<div className="expCardDynContCls">
                                    I took on the responsibility of mastering the project architecture, comprehending the code base thoroughly, and effectively managing bugs and defects
                                </div>) : <div></div>}
                                <button className="expCardDynContBtnCls" onClick={() => setExpOneState(!expOneState)}>{expOneState ? <span>Know Less</span> : <span>Know More</span>}</button>
                            </div>
                        </div>
                        <div className="expCardPCls">
                            <div className="expCardLogoSectionCls">
                                <img className="experienceTitleHeadIconCls" src={CogiLogo} alt="Skill Set Head Topic Logo"></img>
                            </div>
                            <div className="expCardCOntSectionCls">
                                <div className="expCardContOneCls">
                                    Junior Software Engineer
                                </div>
                                <div className="expCardContTwoCls">
                                    June 2023 - Present
                                </div>
                            </div>
                            <div className="expiTechStackPCls">
                                <div className="expiTechTitleCls">Tech Stack :</div>
                                <div className="expiTechListCls">
                                    {[AngularLogo, JavaScript, Typescript, HTML, CSS, Bootstrap, SVN, RxJS, Java, SQL, RestAPI, Json].map((image, index) => (
                                        <span className="expiTechStackCls"><img className="expiTechStackIconCls" src={image} alt="Skill Set Head Topic Logo"></img></span>
                                    ))}
                                </div>
                            </div>
                            <div className="expCardDynSecCls">
                                {expTwoState ? (<div className="expCardDynContCls">
                                    I am responsible for understanding client-specific style and functional requirements for projects, ensuring timely delivery with zero defects.
                                </div>) : <div></div>}

                                <button className="expCardDynContBtnCls" onClick={() => setExpTwoState(!expTwoState)}>{expTwoState ? <span>Know Less</span> : <span>Know More</span>}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}