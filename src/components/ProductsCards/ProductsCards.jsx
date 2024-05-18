import "./productsCards.scss";
import cardsData from "./productCards";
import NorthEastIcon from '@mui/icons-material/NorthEast';

function AboutUs() {
  return (
    <div className="productCards">
      <div className="container">
        <div className="productCards_content">
          <div className="top">
            <h1>Наши продукты</h1>
            <h5>
              Consider the current layout of your bathroom. Decide if you want
              to keep the same <br /> footprint or make changes like moving
              plumbing fixtures.{" "}
            </h5>
          </div>
          <div className="cards">
            {cardsData.map((el) => (
              <div className="card_" key={el.id}>
                <div className="card_top">
                  <h1>{el.type}</h1>
                  <button><NorthEastIcon/></button>
                </div>
                <div className="item1">
                  <div className="item2">
                    <div className="item3">
                      <img src={el.image} alt="Card_image" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="company_logos"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
