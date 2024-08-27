import "../components/Skill.css";
import SkillTopLogo from "../assets/skillSetHeadLogo.png";
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

export default function Skill() {
    let skillSetHold = [{
        skillName: "Angular",
        skillRate: FiveStar,
        skillLogo: AngularLogo
    },
    {
        skillName: "React",
        skillRate: FiveStar,
        skillLogo: ReactLogo
    },
    {
        skillName: "Javascript",
        skillRate: FiveStar,
        skillLogo: JavaScript
    },
    {
        skillName: "Typescript",
        skillRate: FiveStar,
        skillLogo: Typescript
    },
    {
        skillName: "HTML",
        skillRate: FiveStar,
        skillLogo: HTML
    },
    {
        skillName: "CSS",
        skillRate: FiveStar,
        skillLogo: CSS
    },
    {
        skillName: "Bootstrap",
        skillRate: FiveStar,
        skillLogo: Bootstrap
    },
    {
        skillName: "SVN",
        skillRate: FiveStar,
        skillLogo: SVN
    },
    {
        skillName: "JSON",
        skillRate: FourStar,
        skillLogo: Json
    },
    {
        skillName: "Figma",
        skillRate: FourStar,
        skillLogo: Figma
    },
    {
        skillName: "Spring MVC",
        skillRate: FourStar,
        skillLogo: SpringMVC
    },
    {
        skillName: "REST Api",
        skillRate: FourStar,
        skillLogo: RestAPI
    },
    {
        skillName: "SQL",
        skillRate: ThreeStar,
        skillLogo: SQL
    },
    {
        skillName: "Java",
        skillRate: ThreeStar,
        skillLogo: Java
    },
    {
        skillName: "GitHub",
        skillRate: TwoStar,
        skillLogo: GitHub
    },
    {
        skillName: "RxJS",
        skillRate: TwoStar,
        skillLogo: RxJS
    }
    ];

    return (
        <> 
        <div className="SkillParentSecCls">
            <div className="skillTitleHeadCls">
                Skill Repertoire<span className="skillTitleLogoCls"><img className="skillTopicLocCls" src={SkillTopLogo} alt="Skill Set Head Topic Logo"></img></span>
            </div>
            <div className="skillSetHeadCls">{skillSetHold.map((item, index) => (
                <div className="skillSetCardHeadCls">
                    <div className="skillSetDets">
                        <div className="skillSetTitle">{item.skillName}</div>
                        <div className="skillSetRating"><img className="skillSetRatingLogoCls" src={item.skillRate} alt="Skill Set Head Topic Logo"></img></div>
                    </div>
                    <div className="skillSetLogo"><img className="skillSetLogoCls" src={item.skillLogo} alt="Skill Set Head Topic Logo New"></img></div>
                </div>
            ))}</div>
        </div>
        </>
    );
}