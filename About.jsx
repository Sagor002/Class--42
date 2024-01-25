import { useState } from "react";

const About = ( ) => {
    const [color, setColor] = useState("black");

    const handleClick = () =>{
      setColor("dodgerblue");
    };

  return (
    <div>
      <p style={{ color }}>This is about component.</p>
      < Button placeholder="Change color" handler= {handleClick} />
    </div>
  );
};

export default About;