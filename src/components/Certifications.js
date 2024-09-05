import "../components/Certifications.css";
import certifisTitleLogo from "../assets/CertificationsLogo/certificationsTitleLogo.png";
import AzureLogo from "../assets/CertificationsLogo/azureLogo.png";
import React, { useState, useEffect } from "react";
import FullStackLogo from "../assets/CertificationsLogo/FullStackLogo.png";
import GoogleLogo from "../assets/CertificationsLogo/googleLogo.png";

import AzureTechLogo from "../assets/CertificationsLogo/azureLogoType2.png";
import FigmaLogo from "../assets/SkillLogos/FigmaLogo.png";
import ReactLogo from "../assets/SkillLogos/ReactLogo.png";
import RestApiLogo from "../assets/SkillLogos/RestApiLogo.png";
import SpringLogo from "../assets/SkillLogos/SpringLogo.png";
import SQLLogo from "../assets/SkillLogos/sqlLogo.png";
import JavaLogo from "../assets/SkillLogos/JavaLogo.png";

export default function Certifications() {
    const [certificateDetails, setCertificateDetails] = useState('');

    const certificatesSet = [{
        name: "Microsoft Azure",
        logo: AzureLogo,
        title: "Microsoft Azure",
        content: "sample sample",
        techStack: [AzureTechLogo]
    }, {
        name: "Google UX Design",
        logo: GoogleLogo,
        title: "Google UX Design",
        content: "sample sample sample",
        techStack: [FigmaLogo]
    }, {
        name: "Full Stack Development",
        logo: FullStackLogo,
        title: "Full Stack Development",
        content: "sample sample sample sample sample",
        techStack: [ReactLogo, SpringLogo, RestApiLogo, SQLLogo, JavaLogo]
    }];

    useEffect(() => {
        certifiBtnFuncReturn(certificatesSet[0].name);
    }, []);

    const certifiBtnFuncReturn = (certiButtonSet) => {
        let tempateToSearch = certificatesSet.filter((item, index) => (item.name === certiButtonSet));
        {
            tempateToSearch.map((item, index) => (
                setCertificateDetails(
                    <div className="certifiSecMainBlockCLs">
                        <div className="certifiMainData">
                            <div className="certifiMainDataTxtCls">
                                <div className="certifiTitleCls">{item.title}</div>
                                <div className="certifiTitleContCls">{item.content}</div>
                            </div>
                            <div className="certifiMainTechStackCls">
                                <div className="certifiTxtCls">Tech Stack :</div>
                                <div className="certifiTechStackHolderCls">
                                    {(item.techStack).map((pogo) => (
                                        <div className="certifiTechStackLogoListCls"><img className="certifiTechStackLogoIconCls" src={pogo} alt="Skill Set Head Topic Logo"></img></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            ))
        }
    }

    return (
        <>
            <div className="certifiSecContainerCls">
                <div className="certifiSecContainerPCls">
                    <div className="certifiSecTitleCls">
                        Certifications<span><img className="certifiTitleHeadIconCls" src={certifisTitleLogo} alt="Skill Set Head Topic Logo"></img></span>
                    </div>
                    <div className="certifiSecContentCls">
                        <div className="certifiSecContentPCls">
                            <div className="certificatesListCls">
                                {certificatesSet.map((item, index) => (
                                    <div className="certifiTabBtnSecCls">
                                        <div className="certifiBtnCls">
                                            <button className="certifiMainBtnCls" onClick={() => certifiBtnFuncReturn(item.name)}><span className="certifiMainBtnLogoCls"><img className="certifiMainBtnLogoImgCls" src={item.logo} alt="Skill Set Head Topic Logo"></img></span>{item.name}</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="certificateContPCls">
                                <div className="certifiSecContentAreaCls">{certificateDetails}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}