import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingText = ({ words }) => (
  <h2 className="typing-heading">
    <Typewriter
      words={words}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </h2>
);

export default TypingText;
