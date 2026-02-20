import { FaGithub,FaLinkedin ,FaFacebook ,FaYoutube } from "react-icons/fa";
import './Home.css'

function Home() {
  return (
    <div className="home"> 
      <div className="homeInfo">
        <h2> JwelRana </h2>
        <h3> I'm a Web Developer </h3>
        <p> I am a results-driven Web & App Developer and Creative Designer with a strong foundation in frontend development and user interface design. I have hands-on experience in developing responsive web applications and designing intuitive user experiences. </p>
        <div className="btnBox">
          <input type="button" value="Download CV" className="btn"/>
          <div className="social-icons">
            <i className="in">  <FaGithub className="social-icon"/> </i>
            <i className="in">   <FaLinkedin className="social-icon"/> </i>
            <i className="in">  <FaFacebook className="social-icon"/> </i>
            <i className="in">  <FaYoutube className="social-icon"/> </i>
           
          </div>
        </div>
      </div>
        <div className="homeImg">
           <div className="imgbox">
           <div className="imgItems">
             <img src="myPic.png" alt="mypic" />
           </div>
       </div>
        </div>
      
    </div>
  )
}

export default Home