import "./navbar.scss";
import logo from "../../assets/LogoBg.png";
import user from "../../assets/icons/supper_user.png";
import cart from "../../assets/icons/cart.png";
import lan from "../../assets/icons/language.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const inputStyle = {
  width: "100%",
  bgcolor: "#F7F7F7",
  borderRadius: "5px",
  outline: "none",
  marginTop: "10px",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [fixed, setFixed] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setFixed(true); //navbar 100 dan keyin fixed boladi
      } else {
        setFixed(false);
      }
    });
  });
  return (
    <div className={`navbar__nav ${fixed && "fixedNav"}`}>
      <div className="container_">
        <div className="navbar_">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo_myguess" />
            </Link>
          </div>
          <div className="content">
            <ul>
              <li>
                <Link to="/">{t('nav_nav')}</Link>
              </li>
              <li>
                <Link to="/AboutUs">{t('nav')}</Link>
              </li>
              <li>
                <Link to="/Category">{t('nav2')}</Link>
              </li>
              <li>
                <a href="#">{t('nav3')}</a>
              </li>
              <li>  
                <Link to="/ContactUs">{t('nav4')}</Link>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <div className="button">
              <img src={user} alt="User_icon" />
              <button onClick={handleOpen}>{t('nav5')}</button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    style={{ color: "#394352", fontWeight: "600" }}
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {t('nav5')}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {t('modalDesc1')}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <PhoneInput
                      inputStyle={inputStyle}
                      inputClass="phone_input"
                      country={"uz"}
                      placeholder="+998 93 509 83 38"
                    />
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button fullWidth variant="contained">
                      {t('modalDesc2')}
                    </Button>
                  </Typography>
                </Box>
              </Modal>
            </div>
            <div className="button">
              <img src={cart} alt="Cart_icon" />
              <button>{t('nav6')}</button>
            </div>
            <div className="button">
              <img src={lan} alt="Language_icon" />
              <select
                className="select"
                value={selectedOption}
                onChange={handleSelectOption}
              >
                <option  onClick={() => changeLanguage('en')} value="option1">Eng 🇺🇸</option>
                <option  onClick={() => changeLanguage('ru')} selected value="option2">
                  Rus 🇷🇺
                </option>
                <option  onClick={() => changeLanguage('uz')} value="option3">O'zb 🇺🇿</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
