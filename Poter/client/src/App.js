import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./Components/Index";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import Message from "./Components/Message";

export default function App() {
  const [messages, setMessages] = useState([]);

  const createMessage = (text) => {
    messages.push(<Message text={text} />);
  };

  return (
    <div className="App">
      <Routes>
        <Route index element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp message={createMessage} />} />
      </Routes>
      <div className="messages">{messages}</div>
    </div>
  );
}
