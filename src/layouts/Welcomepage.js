import TopBar from "../components/TopBar";
import ButtomBar from "../components/ButtomBar";
import IntroBar from "../components/IntroBar";
import MenuBar from "../components/MenuBar";
import Video from "../components/Video";


function Welcomepage(){
    return(
        <div className="welcomepage">
            <TopBar/>
            <IntroBar/>
            <MenuBar/>
            <Video/>
            <ButtomBar/>
        </div>
    );
}

export default Welcomepage