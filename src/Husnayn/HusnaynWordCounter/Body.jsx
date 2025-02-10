import { useState } from "react";
import './Body.css';

export default function Body() {
  const [text, setText] = useState("");

 
  const handleChange = (e) => {
    setText(e.target.value);
  };

  
  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  
  const toUpperCase = () => {
    setText(text.toUpperCase());
  };


  const toTitleCase = () => {
    setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
  };

  return (
    <div className="container">
      <h2>Word Counter & Text Formatter</h2>
      <textarea value={text} onChange={handleChange} placeholder="Type here..." />

      <div className="info">
        <p>Words: {text.trim() ? text.trim().split(/\s+/).length : 0}</p>
        <p>Characters: {text.length}</p>
      </div>

      <div className="buttons">
        <button onClick={toLowerCase}>Lowercase</button>
        <button onClick={toUpperCase}>Uppercase</button>
        <button onClick={toTitleCase}>Title Case</button>
      </div>
    </div> 
  );
}
