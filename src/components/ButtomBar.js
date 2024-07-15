import "./styles/ButtomBar.css"
import bot_icon from '../media/icons/bot_icon.png'

function ButtomBar(){
    return(
        <div className="buttom-bar">
            <div className="bot">
                <p>Ask Chacha</p>
                <img className="bot-icon" src={bot_icon} alt="bot icon"></img>
            </div>
        </div>
    );
}

export default ButtomBar;