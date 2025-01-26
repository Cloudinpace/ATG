
import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceSearch = ({ onSearch }) => {  // Pass onSearch prop for search functionality
  const [transcript, setTranscript] = useState('');

  const { listening, finalTranscript } = useSpeechRecognition();

  useEffect(() => {
    setTranscript(finalTranscript);
  }, [finalTranscript]);

  useEffect(() => {
    if (transcript) {
      onSearch(transcript); // Call the search function with the transcript
    }
  }, [transcript, onSearch]);

  return (
    <div>
      <button onClick={SpeechRecognition.startListening} disabled={listening}>
        Start Voice Search
      </button>
      <button onClick={SpeechRecognition.stopListening} disabled={!listening}>
        Stop
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceSearch;
