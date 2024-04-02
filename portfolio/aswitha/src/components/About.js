import React from 'react';
import img from './vikki.jpg'

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm Vigneshwaran. I'm a App developer .
      
    
      </p>
      <img src={img} alt='my photo' width={100} height={200} />
         </section>
  );
};

export default About;