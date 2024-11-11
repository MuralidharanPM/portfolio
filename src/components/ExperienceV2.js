import "../components/ExperienceV2.css";
import CogiLogo from "../assets/Experience/ctsLogo.png";
import ExperienceTitleLogoV2 from "../assets/experienceIconV2.png";
import ExperienceTitleBannerLogo from "../assets/expiBannerImage.jpg";
import AngularLogo from "../assets/SkillLogos/AngularLogo.png";
import JavaScript from "../assets/SkillLogos/JavaScriptLogo.png";
import Typescript from "../assets/SkillLogos/TypeScriptLogo.png";
import HTML from "../assets/SkillLogos/HTMLLogo.png";
import CSS from "../assets/SkillLogos/CSSLogo.png";
import Bootstrap from "../assets/SkillLogos/BootstrapLogo.png";
import SVN from "../assets/SkillLogos/svnLogo.png";

export default function ExperienceV2() {
    const startDate = new Date('2022-02-21');
    const currentDate = new Date();
    const yearsDiff = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    const yearsOfExperience = yearsDiff.toFixed(1);
    let expSpan = yearsOfExperience + " years";
    let experienceLog = [{
        company: "Cognizant",
        companyLogo: CogiLogo,
        role: "Software Engineer",
        roleDes: "Collaborated with clients to meet tailored project requirements, ensuring timely, defect-free deliveries aligned with functional and stylistic standards.",
        roleExp: "2 Months",
        rolePeriod: "October 2024 - Present",
        techStack: [AngularLogo, JavaScript, Typescript, HTML, CSS, Bootstrap, SVN]
    }, {
        company: "Cognizant",
        companyLogo: CogiLogo,
        role: "Junior Software Engineer",
        roleDes: "Executed client-specific projects with a focus on precision and timeliness, ensuring adherence to style and functional requirements for seamless delivery.",
        roleExp: "1 Year 3 Months",
        rolePeriod: "July 2023 - September 2024",
        techStack: [AngularLogo, JavaScript, Typescript, HTML, CSS, Bootstrap, SVN]
    }, {
        company: "Cognizant",
        companyLogo: CogiLogo,
        role: "Software Engineer Trainee",
        roleDes: "Developed a strong grasp of project architecture, efficiently managed codebases, and resolved bugs to enhance application reliability.",
        roleExp: "1 Year",
        rolePeriod: "July 2022 - June 2023",
        techStack: [AngularLogo, JavaScript, Typescript, HTML, CSS, Bootstrap, SVN]
    }, {
        company: "Cognizant",
        companyLogo: CogiLogo,
        role: "Trainee - Intern",
        roleDes: "Gained comprehensive exposure to IT development through hands-on projects and assessments, building foundational skills across diverse technologies.",
        roleExp: "5 Months",
        rolePeriod: "February 2022 - June 2022",
        techStack: [AngularLogo, JavaScript, Typescript, HTML, CSS, Bootstrap, SVN]
    }];

    return (
        <>
            <div className="expSetParentCls">
                <div className="experienceSecTitleCls">
                    Experience<span><img className="experienceTitleHeadIconCls" src={ExperienceTitleLogoV2} alt="Skill Set Head Topic Logo"></img></span>
                </div>
                <div className="experienceSumContentCls">
                    <div className="experienceSumTextCls">
                        <div className="expSumPointHeadPCls">
                            <div className="expSumPointHeadCls">
                            <div>I have <span className="expSumTimeCls">{expSpan}</span> of extensive experience in development, specializing in <span className="expSumTechCls">front-end technologies.</span></div>
                            </div>
                            <div className="expSumPointHeadCls">I've developed a strong understanding of project architecture, client-specific requirements, and defect management.</div>
                            <div className="expSumPointHeadCls">I'm passionate about learning new technologies and dedicated to driving innovation in my work.</div>
                        </div>
                        <div className="expSumImageHeadPCls">
                            <img className="experienceTitleBannerImgCls" src={ExperienceTitleBannerLogo} alt="Skill Set Head Topic Logo"></img>
                        </div>
                    </div>
                </div>
                <div className="expSetItemCls">
                    {experienceLog.map((item, index) => {
                        return (
                            <div className={(index % 2 === 0) ? 'indiExpSecLeftCls' : 'indiExpSecRightCls'}>
                                <div className="indiExpPCls">
                                    <div className="indiExpTimeLogPCls">
                                        <div className="indiExpTimePeriodCls">{item.rolePeriod}</div>
                                        <div className="indiExpTimeLengthCls">{item.roleExp}</div>
                                    </div>
                                    <div className="indiExpDesPCls">
                                        <div className="indiExpRoleContOneCls">
                                            <div className="indiExpRoleCompLogoCls">
                                                <img className="indiExpCompLogoCls" src={item.companyLogo} alt="Individual Experience Company Logo" />
                                            </div>
                                            <span className="indiExpoCompNameCls">{item.company}</span>
                                        </div>
                                        <div className="indiExpRoleContTwoCls">
                                            <div className="indiExpRoleDescriptionCls">
                                                <div className="indiExpRolePosCls">{item.role}</div>
                                                <div className="indiExpRolePosMobPCls">
                                                    <div className="indiExpRolePosMobChCls">
                                                        <div className="indiExpRolePosMobCls">
                                                            <img className="indiExpCompLogoMobCls" src={item.companyLogo} alt="Individual Experience Company Logo" />
                                                        </div>
                                                        <span className="indiExpoCompNameCls">{item.company}</span>
                                                    </div>
                                                    <div className="indiExpTimePeriodMobCls">
                                                        <div className="indiExpRolePosMobCls">{item.role}</div>
                                                        <div className="indiExpTimePeriodMobPCls">
                                                            <div className="indiExpTimePeriodLineMobCls">{item.rolePeriod}</div>
                                                            <div className="indiExpTimePeriodCountMobCls">{item.roleExp}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="indiExpRoleDesCls">{item.roleDes}</div>
                                                <div className="indiExpTechStackCls">
                                                    <span className="expIndiCardTechStackTitleCls">Tech Stack : </span>
                                                    <div className="indiExpCompTechStackLogoCollectionCls">
                                                        {item.techStack.map((step) => {
                                                            return (
                                                                <img className="indiExpCompTechStackLogoCls" src={step} alt="Individual Experience Company Tech Stack" />
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
