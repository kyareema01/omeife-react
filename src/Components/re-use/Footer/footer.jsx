import FooterHead from "./footerHead";
import FooterLeg from "./footerLeg";
import FooterBottom from "./footerBottom";
import '../../../index.css';
import Copyright from "./copyright";


export default function Footer() {
    return (
        <>
     <footer>
        <div className="footer-contents">
            <FooterHead />
            <FooterLeg />
        </div>
        <FooterBottom />
    </footer>
    <Copyright text={'© 2024 OmeifeTechnologiesLimited. All right reserved'} />
    </>
    )
}