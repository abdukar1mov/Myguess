import Slider from "react-slick";
import "./slick.scss";
import slickArray from "./slickArray";

function CenterMode() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    height: "400px",
  };

  const itemCss = {
    margin: "10px",
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {/* <div {...itemCss} className="itemUser"> */}
          {slickArray.map((el) => (
            <div {...itemCss} className="itemUser" key={el.id}>
              <div className="user">
                <img src={el.img} alt="User_Image" />
                <h3>{el.userName}</h3>
              </div>
              <p>{el.desc}</p>
            </div>
          ))}
        {/* </div> */}
      </Slider>
    </div>
  );
}

export default CenterMode;
