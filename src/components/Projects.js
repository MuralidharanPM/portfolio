import "../components/Projects.css";
import ProjectsTitleLogo from "../assets/ProjectsTitleLogo.png";
import AutoDeals from "../assets/Projects/autoDealsLogo.PNG";
import Figma from "../assets/SkillLogos/FigmaLogo.png";
import Spline from "../assets/SkillLogos/splineLogo.png";
import PhotoShop from "../assets/SkillLogos/PhotoShopLogo.png";

export default function Projects() {
    let uiUxProjList = [{
        projectName: "AutoDeals - Car Dealership website Design",
        projectBanner: AutoDeals,
        projectTechStac: [Figma,Spline,PhotoShop],
        projectLiveLink: ""
    },{
        projectName: "AutoDeals - Car Dealership website Design",
        projectBanner: AutoDeals,
        projectTechStac: [Figma,Spline,PhotoShop],
        projectLiveLink: ""
    }]
    return (
        <>
            <div className="projectSecContainerCls">
                <div className="projectSecTitleCls">
                    Projects<span><img className="projectTitleHeadIconCls" src={ProjectsTitleLogo} alt="Skill Set Head Topic Logo"></img></span>
                </div>
                <div className="projectSecContentCls">
                    <div className="projectSecBtnCls">
                        <button>UI/UX</button>
                        <button>Front-End</button>
                        <button>Full-Stack</button>
                    </div>
                    <div className="projectSecContentAreaCls">
                        <div className="projectSecContentCls">
                            {uiUxProjList.map((item, index) => (
                                <div className="projectSecMainBlockCLs">
                                    <div className="projectMainData">
                                        <div className="projectTitleCls">{item.projectName}</div>
                                        <div className="projectTechStackCls">{(item.projectTechStac).map((image, index) => (
                                            <span><img className="experienceTitleHeadIconCls" src={image} alt="Skill Set Head Topic Logo"></img></span>
                                        ))}</div>
                                        <div className="projectLiveLinkCls">{item.projectLiveLink}</div>
                                    </div>
                                    <div className="projectMainBanCls">
                                        <img className="experienceTitleHeadIconCls" src={item.projectBanner} alt="Skill Set Head Topic Logo"></img>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}