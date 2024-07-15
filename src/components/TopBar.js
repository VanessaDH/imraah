import './styles/TopBar.css'

function TopBar(){
    return (
        <div className="top-bar">
            <div className="top-bar title">
                Imraah
            </div>

            <div className="top-bar btns">
                <b><p className="arrow">⌄</p></b>

                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    );
}


export default TopBar;