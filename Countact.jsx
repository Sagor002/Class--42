import { useState } from "react";

const Contact = ( ) => {
  const [text, setText] = useState("This is contact component.");
  const handleClick = ( ) => {
    setText("Hi this is contact component!");
};

return (
  <div>
      <p>{text}</p>
      <Button placeholder="change text" handler={handleClick} />
  </div>
  );
};

export default Contact;
