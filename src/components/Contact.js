import "../components/Contact.css";
import LinkedIn from "../assets/Contact/LinkedInContLogo.png";
import GitHub from "../assets/Contact/gitHubContLogo.png";
import Naukri from "../assets/Contact/naukriContLogo.png";
import Gmail from "../assets/Contact/gmailContLogo.png";
import ContactBanner from "../assets/contactBanner.png";

export default function Contact() {
    const socialLinks = [{
        name: "LinkedIn",
        logo: LinkedIn,
        link: "https://www.linkedin.com/in/muralidharan-p-m-842450212/"
    }, {
        name: "GitHub",
        logo: GitHub,
        link: "https://github.com/MuralidharanPM"
    }, {
        name: "Naukri",
        logo: Naukri,
        link: "https://www.google.com/"
    }]

    return (
        <>
            <div className="contactSecHeadCls">
                <div className="contactSecTitleCls">
                    Contact<span className="contactTitleHeadIconCls"></span>
                </div>
                <div className="contactPagePCls">
                    <div className="contactParentCls">
                        <div className="textAreaPCls">
                            <div className="contactTextOneCls">Reach out to me!</div>
                            <div className="contactTextTwoCls">Discuss a project or just want to say hi? My Inbox is open for all.</div>
                            <div className="contactTextThreeCls">Open for opportunities : Yes</div>
                            <div className="contactSocialSecCls">Email : mugilmugilone@gmail.com
                            </div>
                        </div>
                        <div className="mailDropContCls">
                            {socialLinks.map((item, index) => (
                                <button><img className="socialHandleLogoCls" src={item.logo} alt="social logos in the contact page" onClick={() => window.open(item.link)}></img></button>
                            ))}
                        </div>
                    </div>
                    <div className="contactMailParentCls">
                        <img className="ContactLocCls" src={ContactBanner} alt="bannerContactPage"></img>
                    </div>
                </div>
            </div>
        </>
    );
}