// Chatbox.js
import React, { useState, useEffect } from 'react';
import './Chatbox.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  // Sample interview questions
  const interviewQuestions = [
    "Can you tell me about yourself?",
    "What are your strengths and weaknesses?",
    "Why do you want to work for this company?",
    "Describe a challenging situation you've faced and how you dealt with it.",
    "Where do you see yourself in five years?",
  ];

  useEffect(() => {
    // Start with the first question
    askNextQuestion();
  }, []);

  const askNextQuestion = () => {
    if (questionIndex < interviewQuestions.length) {
      const question = interviewQuestions[questionIndex];
      const aiMessage = `AI: ${question}`;
      setMessages((prev) => [...prev, { text: aiMessage, sender: 'ai' }]);
      startListening(); // Start listening for the user's answer
    }
  };

  const startListening = () => {
    setIsListening(true);
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("Voice recognition activated. Speak your answer.");
    };

    recognition.onresult = (event) => {
      const userResponse = event.results[0][0].transcript;
      handleUserResponse(userResponse);
      recognition.stop();
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in recognition: ", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      // Ask the next question
      setQuestionIndex((prev) => prev + 1);
      askNextQuestion();
    };

    recognition.start();
  };

  const handleUserResponse = (response) => {
    // Add user message
    setMessages((prev) => [...prev, { text: `User: ${response}`, sender: 'user' }]);
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="status">
        {isListening ? "Listening..." : "Ready for your response."}
      </div>
    </div>
  );
};

export default Chatbox;
