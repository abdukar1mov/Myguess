import aycetin from "../../assets/aycetin.png";
import eca from "../../assets/ECA.png";
import formina from "../../assets/formina.png";
import "./logos.scss";

const Logos = () => {
  return (
    <div className="logos">
      <div className="container">
        <div className="logos_pic">
          <div className="logoBord">
            <img src={aycetin} alt="aycetin_logo" />
          </div>
          <div className="logoBord">
            <img src={eca} alt="eca_logo" />
          </div>
          <div className="logoBord">
            <img src={formina} alt="formina_logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
