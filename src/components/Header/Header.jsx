import "./header.scss";
import headerImage from "../../assets/Header_bath.png";
import sound from "../../sounds/shower_sound.wav";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header_content">
          <div className="top">
            <div className="left">
              <h1>
                <span>My</span>guess<span>.</span>uz
              </h1>
              <h5>{t('defis')}</h5>
            </div>
            <div className="right">
              <div className="r_top">
                <h1>
                  4 {t('data')} + <br /> {t('data2')}
                </h1>
                <h1>
                  10 000 +  <br /> {t('type')}
                </h1>
              </div>
              <div className="r_bottom">
                <p>
                  Добро пожаловать на сайт Myguess.uz <br /> Высококачественная
                  сантехническая продукция прямого импорта – лучший выбор для
                  Вас!
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <img onClick={playSound} src={headerImage} alt="Header_image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
