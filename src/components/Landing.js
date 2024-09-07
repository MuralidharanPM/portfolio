import LandingBanner from "../assets/landPicProp1.png";
import HifiHands from "../assets/hnadIcon.png";
import ContactMainBtnIcon from "../assets/contactIcon.png";
import DresMainBtnIcon from "../assets/downloadResumeIcon.png";
import nameLogo from "../assets/MobileHeader/NameLogo.png";
import React, { useState } from "react";
import "../components/Landing.css";

export default function Landing() {
    const [mobHeaderExpanded, setMobHeaderExpanded] = useState(false);
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
                                        <button className="MobileHeadCtrlBtnCls" id="landNavContactBtnMob">Contact</button>
                                    </div>
                                    <div className="MobileHeadCtrlBtnDivCls">
                                        <button className="MobileHeadCtrlBtnCls" id="landNavSillsBtnMob">Skills</button>
                                    </div>
                                    <div className="MobileHeadCtrlBtnDivCls">
                                        <button className="MobileHeadCtrlBtnCls" id="landNavExpBtnMob">Experience</button>
                                    </div>
                                    <div className="MobileHeadCtrlBtnDivCls">
                                        <button className="MobileHeadCtrlBtnCls" id="landNavCertifiBtnMob">Certification</button>
                                    </div>
                                    <div className="MobileHeadCtrlBtnDivCls">
                                        <button className="MobileHeadCtrlBtnCls" id="landNavProjectsBtnMob">Projects</button>
                                    </div>
                                </div>
                                ) : (<div></div>)
                        }
                    </div>
                </div>
                <div className="LandingNavSecCls">
                    <div className="LandingNavContCls">
                        <button className="landNavContBtnCls" name="landNavContactBtn" id="landNavContactBtn">Contact</button>
                        <button className="landNavContBtnCls" name="landNavSillsBtn" id="landNavSillsBtn">Skills</button>
                        <button className="landNavContBtnCls" name="landNavExpBtn" id="landNavExpBtn">Experience</button>
                        <button className="landNavContBtnCls" name="landNavCertifiBtn" id="landNavCertifiBtn">Certification</button>
                        <button className="landNavContBtnCls" name="landNavProjectsBtn" id="landNavProjectsBtn">Projects</button>
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
                            <button className="landingMainBtnHeadCls" name="landNavMainBtnContactMe" id="landNavMainBtnContactMe">Contact Me<span className="landBtnMainContCls landBtnMainContComCls"><img className="hifiHandsLandLocCls" src={ContactMainBtnIcon} alt="hifiHandLaningPage"></img></span></button>
                            <button className="landingMainBtnHeadCls" name="landNavMainBtnDRes" id="landNavMainBtnDRes">Download Resume<span className="landBtnMainDresCls landBtnMainContComCls"><img className="hifiHandsLandLocCls" src={DresMainBtnIcon} alt="hifiHandLaningPage"></img></span></button>
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
