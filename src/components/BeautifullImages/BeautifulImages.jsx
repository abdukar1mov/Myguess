import img1 from "../../assets/first.png"
import img2 from "../../assets/second.png"
import img3 from "../../assets/third.png"
import "./beautifulImages.scss"

const BeautifulImages = () => {
  return (
    <div className="images">
        <div className="container">
            <div className="display_images">
                <div className="big">
                    <img src={img1} alt="Image_1" />
                </div>
                <div className="centered">
                    <div className="top">
                        <img src={img2} alt="Image_2" />
                    </div>
                    <div className="bottom">
                        <img src={img3} alt="Image_3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BeautifulImages;
