import "../components/Experience.css";
import ExperienceTitleLogo from "../assets/experienceIcon.png";
import ExperienceBanner from "../assets/expPicDrop1.png";
import CogiLogo from "../assets/Experience/CogniLogoRendered.png";
import React, { useState } from "react";

export default function Experience() {
    const startDate = new Date('2022-06-21');
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
                <div className="experienceContentCls">
                    <div className="experienceBannerCls">
                        <img className="experienceBannerCls" src={ExperienceBanner} alt="Skill Set Head Topic Logo"></img>
                    </div>
                    <div className="experienceTextCls">
                        <ul className="expULListHeadCls">
                            <li className="expLiListHeadCls FirstPointerExp">With <span className="expTimeCls">{expSpan}</span> of extensive experience in development, specializing in <span className="expTechCls">front-end and full-stack technologies.</span></li>
                            <li className="expLiListHeadCls">I've developed a strong understanding of project architecture, client-specific requirements, and defect management.</li>
                            <li className="expLiListHeadCls">I'm passionate about learning new technologies and dedicated to driving innovation in my work.</li>
                        </ul>
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
                            <div className="expCardDynSecCls">
                                {expOneState ? (<div className="expCardDynContCls">
                                    I took on the responsibility of mastering the project architecture, comprehending the code base thoroughly, and effectively managing bugs and defects
                                </div>) : <div></div>}
                                <button className="expCardDynContBtnCls" onClick={() => setExpOneState(!expOneState)}>Know More</button>
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
                            <div className="expCardDynSecCls">
                                {expTwoState ? (<div className="expCardDynContCls">
                                    I am responsible for understanding client-specific style and functional requirements for projects, ensuring timely delivery with zero defects.
                                </div>) : <div></div>}

                                <button className="expCardDynContBtnCls" onClick={() => setExpTwoState(!expTwoState)}>Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}