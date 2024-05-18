import { useTranslation } from "react-i18next";
import "./contact.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact">
      <div className="container">
        <div className="contact_content">
          <h1>{t("contact")}</h1>
          <div className="bottom_content">
            <div className="frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d847.2412295972836!2d69.24466373424059!3d41.354901876665636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d708fa36fdd%3A0xa8f7d8eac3521c9e!2sMyguess%20Sanitary!5e0!3m2!1sru!2s!4v1715598990909!5m2!1sru!2s"
                width="480"
                height="320"
                style={{
                  border: "none",
                  borderRadius: "20px",
                  outline: "none",
                }}
                allowFullScreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="texts">
              <h3>Myguessuz</h3>
              <div className="location">
                <LocationOnIcon fontSize="large" />
                <a target="_blank" href="https://maps.app.goo.gl/z5dZGLRn8oZTBWQu6">
                  Уста Ширин кўчаси 125, Тоshkent, Toshkent
                </a>
              </div>
              <div className="social">
                <a target="_blank" href="tel:+998983102101">
                  <LocalPhoneIcon fontSize="large" />
                </a>
                <a target="_blank" href="https://t.me/myguess_tashkent">
                  <TelegramIcon fontSize="large" />
                </a>
                <a href="https://www.instagram.com/myguess.uz?igsh=eDBqdjUzdzRsb3V5">
                  <InstagramIcon fontSize="large" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;