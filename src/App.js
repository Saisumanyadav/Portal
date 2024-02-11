// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// App.js
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleVoiceInput = () => {
    if (transcript) {
      // Send voice input to backend or AI service
      socket.emit('voiceInput', transcript);
      resetTranscript();
    }
  };

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start Listening</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      <div>{transcript}</div>
      <button onClick={handleVoiceInput}>Submit Voice Input</button>
    </div>
  );
}

export default App;

