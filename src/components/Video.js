import './styles/Video.css'
import videowelc from '../media/videos/welcomevideo.mp4'

function Video(){
    return(
        <div className="video-container">
            <video src={videowelc} autoPlay loop  muted width="100%" height="485px">
               
            </video>
        </div>
    );
}


export default Video;