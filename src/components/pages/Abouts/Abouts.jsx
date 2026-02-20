import './Abouts.css';


const Abouts = () => {
  return (
    <div className='abouts'> 
          <div className='abouts-items'>
             <h2> About Me </h2>
         <h3> Developer <span> & Designer </span>  </h3>
         <p>
            I am a passionate Web & App Developer and Creative Designer with strong experience in building responsive, user-friendly, and modern digital products. I love turning ideas into real-world applications and continuously improving my skills with the latest technologies.
            <div className='about-btn'>
              <button type='button'> let's Talk </button>
            </div>
            
         </p>
          </div>
        
         <div className='about-img'>
          <div className='abouts-img-box'>
            <span className='aboutbox'></span>
            <div className='abouts-img-items'>
             <img src="about-pics.png" alt="abouts-img" />
            </div>
          </div>
          
         </div>
       
    </div>
  )
}

export default Abouts