import '../../styles/layout/footer.css';
import logo from "../../assets/imgs/logo-white.png";

function Footer() {
  return (
    <footer>
      <img className="footer-img" src={logo} alt="Logo Kasa"/>
      <span className="footer-text">© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
