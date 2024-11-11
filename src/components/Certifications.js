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
        content: "Certified in Microsoft Azure AI Fundamentals (AI-900) and Microsoft Azure Fundamentals (AZ-900), demonstrating foundational knowledge in AI and cloud computing concepts, services, and solutions on the Azure platform.",
        techStack: [AzureTechLogo]
    }, {
        name: "Google UX Design",
        logo: GoogleLogo,
        title: "Google UX Design",
        content: "Certified in Google UX Design, proficient in user-centered design principles, wireframing, prototyping, and usability testing to create engaging and effective user experiences across digital platforms.",
        techStack: [FigmaLogo]
    }, {
        name: "Full Stack",
        logo: FullStackLogo,
        title: "Full Stack Development",
        content: "Full Stack Developer with expertise in React, Spring MVC, REST APIs, SQL, Git, and Java. Skilled in building dynamic front-end interfaces, developing back-end services, and managing databases for scalable web applications.",
        techStack: [ReactLogo, SpringLogo, RestApiLogo, SQLLogo, JavaLogo]
    }];

    const [activeCertifiTab, setActiveCertifiTab] = useState(certificatesSet[0].name);

    useEffect(() => {
        certifiBtnFuncReturn(certificatesSet[0].name);
    }, []);

    const certifiBtnFuncReturn = (certiButtonSet) => {
        setActiveCertifiTab(certiButtonSet);
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
                                    <div className= {activeCertifiTab == item.name ? "certifiTabBtnSecCls activeCertifiTab" : "certifiTabBtnSecCls"}>
                                        <div className="certifiBtnCls">
                                            <button className="certifiMainBtnCls" onClick={() => certifiBtnFuncReturn(item.name)}><span className="certifiMainBtnLogoCls"><img className="certifiMainBtnLogoImgCls" src={item.logo} alt="Skill Set Head Topic Logo"></img></span><span className="certifiItemsLogoCls">{item.name}</span></button>
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