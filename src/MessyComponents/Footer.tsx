import BrandLogo from '../assets/images/main logo/business_logo.png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-16">
            <aside>
                <img src={BrandLogo} style={{
                    width: '80px'
                }} alt="" />
                <p>Sysco Industries Ltd.<br />Providing reliable food distribution service since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Career</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}

export default Footer