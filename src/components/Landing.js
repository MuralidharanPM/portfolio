import LandingBanner from "../assets/landPicProp1.png";
import HifiHands from "../assets/hnadIcon.png";
import ContactMainBtnIcon from "../assets/contactIcon.png";
import DresMainBtnIcon from "../assets/downloadResumeIcon.png";
import nameLogo from "../assets/MobileHeader/NameLogo.png";
import React, { useState } from "react";
import Resume from "../assets/Files/Muralidharan_P.M_Resume_Download.pdf";
import "../components/Landing.css";

export default function Landing({ scrollToSkill, scrollToExperience, scrollToProjects, scrollToCertifications, scrollToContact }) {
    const [mobHeaderExpanded, setMobHeaderExpanded] = useState(false);
    const downloadPDF = () => {
        const fileUrl = Resume;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'Muralidharan_P.M_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };    
    return (
        <>
            <div className="LandingParentSecCls">

                <div className="LandingNavSecMobCls">
                    <div className="LandingNavContMobCls">
                        <div className="mobHeaderBurgPCls">
                            <div className="mobViewHeadTitle"><img src={nameLogo} className="mobHeaderNameLogoCls"></img></div>
                            {
                                mobHeaderExpanded ? (
                                    <button className="MobileHeadCtrlBtnBurgCls mobHeaderBurgIconActChCls" onClick={() => setMobHeaderExpanded(!mobHeaderExpanded)}></button>
                                ) : (
                                    <button className="MobileHeadCtrlBtnBurgCls mobHeaderBurgIconChCls" onClick={() => setMobHeaderExpanded(!mobHeaderExpanded)}></button>
                                )
                            }
                        </div>
                        {
                            mobHeaderExpanded ? (
                                <div className="laningMobViewContHeadCls">
                                    <div className="MobileHeadCtrlBtnDivCls">
                                        <button className="MobileHeadCtrlBtnCls" id="landNavSillsBtnMob" onClick={scrollToSkill}>Skills<span className="skillsNavIconCls mobNavTabComStyles"></span></button>
                                    </div>
                                    <div className="MobileHeadCtrlBtnDivCls">
                                        <button className="MobileHeadCtrlBtnCls" id="landNavExpBtnMob" onClick={scrollToExperience}>Experience<span className="experienceNavIconCls mobNavTabComStyles"></span></button>
                                    </div>
                                    <div className="MobileHeadCtrlBtnDivCls">
                                        <button className="MobileHeadCtrlBtnCls" id="landNavCertifiBtnMob" onClick={scrollToCertifications}>Certification<span className="certificateNavIconCls mobNavTabComStyles"></span></button>
                                    </div>
                                    {/* <div className="MobileHeadCtrlBtnDivCls">
                                        <button className="MobileHeadCtrlBtnCls" id="landNavProjectsBtnMob" onClick={scrollToProjects}>Projects<span className="projectsNavIconCls mobNavTabComStyles"></span></button>
                                    </div> */}
                                    <div className="MobileHeadCtrlBtnDivCls">
                                        <button className="MobileHeadCtrlBtnCls" id="landNavContactBtnMob" onClick={scrollToContact}>Contact<span className="contactNavIconCls mobNavTabComStyles"></span></button>
                                    </div>
                                </div>
                                ) : (<div></div>)
                        }
                    </div>
                </div>
                <div className="LandingNavSecCls">
                    <div className="LandingNavContCls">
                        <button className="landNavContBtnCls" name="landNavSillsBtn" id="landNavSillsBtn" onClick={scrollToSkill}>Skills</button>
                        <button className="landNavContBtnCls" name="landNavExpBtn" id="landNavExpBtn" onClick={scrollToExperience}>Experience</button>
                        <button className="landNavContBtnCls" name="landNavCertifiBtn" id="landNavCertifiBtn" onClick={scrollToCertifications}>Certification</button>
                        {/* <button className="landNavContBtnCls" name="landNavProjectsBtn" id="landNavProjectsBtn" onClick={scrollToProjects}>Projects</button> */}
                        <button className="landNavContBtnCls" name="landNavContactBtn" id="landNavContactBtn" onClick={scrollToContact}>Contact</button>
                    </div>
                </div>
                <div className="LandingContentSecCls">
                    <div className="landSecLeftPartCls">
                        <div className="landSecNaming">
                            <div className="landSecNamingMineCls"> Hi, I'm Muralidharan <span className="landHifiHandCls"> <img className="hifiHandsLandLocCls" src={HifiHands} alt="hifiHandLaningPage"></img></span>
                            </div>
                            <div className="landSecDescriptionMineCls">
                                A passionate developer 🚀 having experience of building Web application with JavaScript / ReactJS / Angular along with Spring Framework / Spring MVC
                            </div>
                        </div>
                        <div className="landMainFuncBtn">
                            <button className="landingMainBtnHeadCls" name="landNavMainBtnContactMe" id="landNavMainBtnContactMe" onClick={scrollToContact}>Contact Me<span className="landBtnMainContCls landBtnMainContComCls"><img className="hifiHandsLandLocCls" src={ContactMainBtnIcon} alt="hifiHandLaningPage"></img></span></button>
                            <button className="landingMainBtnHeadCls" name="landNavMainBtnDRes" id="landNavMainBtnDRes" onClick={downloadPDF}>Download Resume<span className="landBtnMainDresCls landBtnMainContComCls"><img className="hifiHandsLandLocCls" src={DresMainBtnIcon} alt="hifiHandLaningPage"></img></span></button>
                        </div>
                    </div>
                    <div className="landSecRightPartCls">
                        <img className="bannerLandLocCls" src={LandingBanner} alt="bannerLaningPage"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
