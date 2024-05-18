import "./aboutCompany.scss";
import SlickSlider from "../SlickSlider/SlickSlider";
import { useTranslation } from "react-i18next";

function AboutCompany() {

  const { t } = useTranslation();

  return (
    <div className="aboutCompany">
      <div className="container">
        <div className="aboutCompany_content">
          <h1>{t('aboutUsPage')}</h1>
          <div className="texts">
            <div className="contentsForCompany">
              <div className="text">
                <h5>{t('activity')}</h5>
                <h6>
                  {t('activityText')}
                </h6>
              </div>
              <img
                className="picture"
                src="https://everwall.com/wp-content/uploads/2023/09/19FunWorkSocialEventIdeas-svg-00.svg"
                alt=""
              />
            </div>
            <div className="contentsForCompany">
              <img
                className="picture"
                src="https://ipsuss.cl/ipsuss/site/artic/20180307/imag/foto_0000000320180307102511.png"
                alt=""
              />
              <div className="text">
                <h5>{t('buySystem')}</h5>
                <h6>
                  {t('buySystemText')}
                </h6>
              </div>
            </div>
            <div className="contentsForCompany">
              <div className="text">
                <h5>{t('delivery')}</h5>
                <h6>
                  {t('deliveryText')}
                </h6>
              </div>
              <img
                className="picture"
                src="https://images.prismic.io/getcircuit/c24b0a5c-3f5c-47cd-aaff-598b36edcf58_Header+%2857%29.jpg?auto=compress,format"
                alt=""
              />
            </div>
          </div>
          <div className="rewievs">
            <h1>{t('clientThoughts')}</h1>
          </div>
        </div>
      </div>
      <div className="rewiewSlide">
        <SlickSlider/>
      </div>
    </div>
  );
}

export default AboutCompany;
