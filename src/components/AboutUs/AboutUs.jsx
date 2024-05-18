import "./aboutUs.scss";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";

function AboutUs() {
  return (
    <div id="aboutUs" className="myGuess">
      <div className="container">
        <div className="myGuess_content">
          <div className="content">
            <h1>О Нас</h1>
            <h3>Видео расскажет вам подробнее</h3>
          </div>
          <div className="bottom_items">
            <Player autoPlay="true" poster="/assets/poster.png">
              <source src=""/>
              
              <ControlBar>
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <PlaybackRateMenuButton
                  rates={[5, 2, 1, 0.5, 0.1]}
                  order={7.1}
                />
                <VolumeMenuButton disabled />
              </ControlBar>
            </Player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
