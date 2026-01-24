import React, { useRef, useState, useEffect } from "react";
import { CiPaperplane } from "react-icons/ci"; // Send icon

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const chatEndRef = useRef(null);

  const handleUserMessage = () => {
    if (!userInput.trim()) return;

    const newMessage = {
      text: userInput,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, newMessage]);
    setUserInput("");
    setTimeout(() => {
      const botReply = {
        text: "This is a custom reply!",
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div className="col-span-3 border rounded-lg p-4 flex flex-col h-[500px] sm:h-[600px] md:h-[650px] border-gray-200 bg-white shadow-lg">
      {/* Header */}
      <div className="flex items-center mb-3 border-b pb-2">
        <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
        <h2 className="font-semibold text-lg">Online</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-1 no_scrollbar">
        {chatMessages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${msg.sender === "user"
                ? "bg-[#2D5016] text-white"
                : "bg-gray-100 text-gray-800"
                }`}
            >
              {msg.text}
            </div>
            <span className="text-xs text-gray-400 mt-1">
              {msg.time}
            </span>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input */}
      <div className="mt-2 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUserMessage()}
          className="flex-1 border px-3 py-2 rounded-full outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleUserMessage}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full flex items-center justify-center"
        >
          <CiPaperplane size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
