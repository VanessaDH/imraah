import './styles/MenuBar.css'
import menu_icon from '../media/icons/menu_icon.png';

function MenuBar(){
    return(
        <div className="menu-bar">
            <img src={menu_icon} alt="menu_icon"></img>
        </div>
    );
}

export default MenuBar;