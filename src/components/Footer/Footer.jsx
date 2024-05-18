import "./footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="category">
            <h5>{t('buy')}</h5>
            <h6>Vannalar</h6>
            <h6>Rakovinalar</h6>
            <h6>Oynalar</h6>
            <h6>Jomraklar</h6>
          </div>
          <div className="aboutCompany">
            <h5>Kompaniya haqida</h5>
            <h6>Manzil</h6>
            <h6>Video rolik</h6>
          </div>
          <div className="information">
            <h5>Ma'lumot</h5>
            <h6>Yetkazib berish</h6>
            <h6>Kontaktlar</h6>
          </div>
          <div className="contactUs">
            <h5>Bog'lanish</h5>
            <a href="tel:+998983102101">+998(98) 310-21-01</a>
            <a style={{ marginTop: "10px" }} href="tel:+998951462101">
              +998(95) 146-21-01
            </a>
            <div className="iconsMedia">
              <a
                target="_blank"
                href="https://www.instagram.com/myguess.uz?igsh=eDBqdjUzdzRsb3V5"
              >
                <InstagramIcon fontSize="large"/>
              </a>
              <a style={{marginLeft: "20px"}} href="t.me/myguess_tashkent">
                <TelegramIcon fontSize="large"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
