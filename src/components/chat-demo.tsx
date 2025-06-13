import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { IconSend, IconCircleCheck } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ChatDemo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();
  const [currentTime, setCurrentTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm interested in your WhatsApp marketing services.",
      time: "10:12 AM",
      isUser: true,
    },
    {
      id: 2,
      text: "Hi there! 👋 Thanks for reaching out to TrioChat. I'm your AI assistant and I'd be happy to help you learn more about our WhatsApp marketing services.",
      time: "10:13 AM",
      isUser: false,
    },
    {
      id: 3,
      text: "Could you tell me a bit about your business so I can provide more relevant information?",
      time: "10:13 AM",
      isUser: false,
    },
  ]);

  useEffect(() => {
    setMounted(true);
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
  };

  const handleSendMessage = () => {
    if (typedMessage.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: typedMessage,
      time: currentTime,
      isUser: true,
    };

    setMessages([...messages, newUserMessage]);
    setTypedMessage("");

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: "Thanks for sharing that information! TrioChat can help you with WhatsApp marketing by providing our messaging and template features. We're also launching broadcast campaigns, AI chatbots, and analytics dashboard features soon!",
        time: currentTime,
        isUser: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const isDark = theme === "dark";

  if (!mounted) return null;

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-border shadow-xl bg-card"
    >
      {/* Chat header */}
      <div
        className={`flex items-center p-4 ${
          isDark ? "bg-gray-800/50" : "bg-muted/50"
        } border-b border-border`}
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
          <span className="text-green-600 dark:text-green-400 font-bold text-lg">
            W
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-medium">WhatsApp Business</h3>
          <p className="text-xs text-muted-foreground">Online</p>
        </div>
      </div>

      {/* Chat messages */}
      <div
        className={`p-4 h-[400px] overflow-y-auto ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-gray-800/70"
            : "bg-gradient-to-b from-card to-muted/20"
        } space-y-4`}
      >
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            custom={index}
            variants={messageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] flex items-end ${
                message.isUser ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`
                  p-3 rounded-lg 
                  ${
                    message.isUser
                      ? `rounded-br-none ${
                          isDark
                            ? "bg-blue-900/80 text-blue-100"
                            : "bg-blue-100 text-blue-900"
                        }`
                      : `rounded-bl-none ${isDark ? "bg-gray-700" : "bg-muted"}`
                  }
                `}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              <div
                className={`text-xs text-muted-foreground px-2 flex items-center ${
                  message.isUser ? "pr-0" : "pl-0"
                }`}
              >
                {message.time}
                {message.isUser && message.id === messages.length && (
                  <IconCircleCheck className="ml-1 h-3 w-3 text-primary" />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message input */}
      <div
        className={`p-4 border-t border-border flex items-center ${
          isDark ? "bg-gray-800" : "bg-card"
        }`}
      >
        <input
          type="text"
          value={typedMessage}
          onChange={(e) => setTypedMessage(e.target.value)}
          placeholder="Type a message..."
          className={`flex-1 ${
            isDark
              ? "bg-gray-700/70 border-gray-600"
              : "bg-muted/30 border-border"
          } border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50`}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <IconSend className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
