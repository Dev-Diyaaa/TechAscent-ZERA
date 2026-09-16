import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimes, FaRobot } from "react-icons/fa";
import axios from "axios";
import zeraImage from "../assets/zera.png";
import emailjs from "@emailjs/browser";

const questions = [
  {
    field: "name",
    message: "Hey. I'm ZERA, Guardian of the Unheard. What's your name?",
    placeholder: "Enter your name",
  },
  {
    field: "age",
    message: "Nice to meet you. How old are you?",
    placeholder: "Enter your age",
  },
  {
    field: "location",
    message: "Which city or location are you reaching out from?",
    placeholder: "Enter your location",
  },
  {
    field: "email",
    message:
      "Please enter your email address so we can contact you regarding your request.",
    placeholder: "Enter your email address",
  },
  {
    field: "grievance",
    message: "Thank you. Now tell me... how can I help you?",
    placeholder: "Describe your problem or request...",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const currentQuestion = questions[step];
  const totalQuestions = questions.length;
  const currentQuestionNumber = step + 1;
  const progressPercentage = submitted
    ? 100
    : Math.round((currentQuestionNumber / totalQuestions) * 100);

  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });

    if (!submitted) {
      inputRef.current?.focus();
    }
  }, [isOpen, messages, step, submitted]);

  // Opens the chatbot and displays the first message
  const openChatbot = () => {
    setIsOpen(true);

    if (messages.length === 0) {
      setMessages([
        {
          sender: "zera",
          text: questions[0].message,
        },
      ]);
    }
  };

  // Allows other components to open the chatbot
  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);

      setMessages((previous) => {
        if (previous.length === 0) {
          return [
            {
              sender: "zera",
              text: questions[0].message,
            },
          ];
        }

        return previous;
      });
    };

    window.addEventListener("open-zera-chatbot", handleOpenChatbot);

    return () => {
      window.removeEventListener(
        "open-zera-chatbot",
        handleOpenChatbot
      );
    };
  }, []);

  const closeChatbot = () => {
    setIsOpen(false);
  };

  const goBack = () => {
    if (step === 0 || submitted) return;

    const previousStep = step - 1;
    const previousField = questions[previousStep].field;

    setStep(previousStep);
    setInput(userData[previousField] ?? "");

    requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };
  const getNaturalResponse = (field, value, nextQuestion) => {
  const responses = {
    name: `Nice to meet you, ${value}. I'm here to listen and understand. ${nextQuestion}`,

    age: `Thank you for sharing that. Your concern matters, and I'll make sure it's recorded properly. ${nextQuestion}`,

    location: `Got it. Thank you for letting me know where you're reaching out from. ${nextQuestion}`,

    email: `Thank you. I'll use your email only for following up regarding your request. ${nextQuestion}`,

    grievance: `Thank you for trusting me with your concern. I've noted what you've shared. I'll make sure your request is submitted for review.`,
  };

  return responses[field];
};
const showZeraReply = (text, delay = 700) => {
  setIsTyping(true);

  setTimeout(() => {
    setMessages((previous) => [
      ...previous,
      {
        sender: "zera",
        text,
      },
    ]);

    setIsTyping(false);
  }, delay);
};
  const sendMessage = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || submitted || isSubmitting || isTyping) return;

    // Email validation
    if (currentQuestion.field === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(trimmedInput)) {
        setMessages((previous) => [
          ...previous,
          {
            sender: "zera",
            text: "Please enter a valid email address so I can reach you.",
          },
        ]);

        return;
      }
    }

    // Age validation
    if (currentQuestion.field === "age") {
      const age = Number(trimmedInput);

      if (!Number.isInteger(age) || age < 1 || age > 120) {
        setMessages((previous) => [
          ...previous,
          {
            sender: "zera",
            text: "Please enter a valid age.",
          },
        ]);

        return;
      }
    }

    const updatedData = {
      ...userData,
      [currentQuestion.field]: trimmedInput,
    };

    setUserData(updatedData);

    // Display visitor's answer
    setMessages((previous) => [
      ...previous,
      {
        sender: "visitor",
        text: trimmedInput,
      },
    ]);

    if (step < questions.length - 1) {
      setInput("");
    }

   // Ask next question naturally
if (step < questions.length - 1) {
  const nextStep = step + 1;
  const nextQuestion = questions[nextStep].message;

  const naturalReply = getNaturalResponse(
    currentQuestion.field,
    trimmedInput,
    nextQuestion
  );

  showZeraReply(naturalReply);

  setStep(nextStep);
}else {
      // Submit complete request
      setIsSubmitting(true);
      setSubmitError("");

     try {
  setMessages((previous) => [
    ...previous,
    {
      sender: "zera",
      text: "I'm securely submitting your request now...",
    },
  ]);

  console.log("User data:", updatedData);

  // Send data to backend
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/contact`,
    updatedData
  );

  console.log("Backend response:", response.data);

  // Send email through EmailJS
  const emailResponse = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: updatedData.name,
      age: updatedData.age,
      location: updatedData.location,
      email: updatedData.email,
      grievance: updatedData.grievance,
    },
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }
  );

  console.log("EmailJS response:", emailResponse);

  setIsSubmitting(false);

  setTimeout(() => {
    setMessages((previous) => [
      ...previous,
      {
        sender: "zera",
        text: `Thank you, ${updatedData.name}. Your request has been submitted successfully. Someone will review it soon.`,
      },
    ]);

    setSubmitted(true);
  }, 500);
} catch (error) {
  console.error("Submission error:", error);
  console.error("Error response:", error.response?.data);

  setIsSubmitting(false);
  setSubmitError(
    "I couldn't submit your request right now. Please try again later."
  );

  setInput(trimmedInput);

  setMessages((previous) => [
    ...previous,
    {
      sender: "zera",
      text: "I couldn't submit your request right now. Please try again later.",
    },
  ]);
}

       await axios.post(
  `${import.meta.env.VITE_API_URL}/api/contact`,
  updatedData
);

await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: updatedData.name,
    age: updatedData.age,
    location: updatedData.location,
    email: updatedData.email,
    grievance: updatedData.grievance,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

        setIsSubmitting(false);

        setTimeout(() => {
          setMessages((previous) => [
            ...previous,
            {
              sender: "zera",
              text: `Thank you, ${updatedData.name}. Your request has been submitted successfully. Someone will review it soon.`,
            },
          ]);

          setSubmitted(true);
        }, 500);
      } catch (error) {
        console.error("Submission error:", error);

        setIsSubmitting(false);
        setSubmitError("I couldn't submit your request right now. Please try again later.");
        setInput(trimmedInput);

        setMessages((previous) => [
          ...previous,
          {
            sender: "zera",
            text: "I couldn't submit your request right now. Please try again later.",
          },
        ]);
      }
    }
  };

  const resetChatbot = () => {
    setStep(0);
    setInput("");

    setMessages([
      {
        sender: "zera",
        text: questions[0].message,
      },
    ]);

    setUserData({});
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitError("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        id="chatbot"
        onClick={openChatbot}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-4 font-semibold text-white shadow-lg shadow-purple-900/40"
      >
        <FaRobot />
        <span className="hidden sm:inline">Talk to ZERA</span>
      </motion.button>

     
       {/* Chatbot Overlay */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      {/* Close Button Above Chatbot */}
      <button
        onClick={closeChatbot}
        aria-label="Close chatbot"
        className="absolute right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/40 bg-[#130b22] text-xl text-white shadow-lg shadow-purple-900/40 transition hover:bg-purple-600"
      >
        <FaTimes />
      </button>

      {/* Chatbot Window */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="flex h-[calc(100vh-2rem)] max-h-[680px] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-purple-500/30 bg-[#0c0716] shadow-2xl shadow-purple-950/50 sm:h-[calc(100vh-3rem)] sm:max-h-[680px] sm:rounded-3xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#130b22] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={zeraImage}
                alt="ZERA"
                className="h-12 w-12 rounded-full object-cover object-top ring-2 ring-purple-500/50"
              />

              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#130b22] bg-green-400" />
            </div>

            <div>
              <h2 className="font-bold tracking-widest text-white">
                ZERA
              </h2>

              <p className="text-xs tracking-wider text-purple-300">
                GUARDIAN OF THE UNHEARD
              </p>
            </div>
          </div>

          <button
            onClick={closeChatbot}
            className="rounded-full p-3 text-gray-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Close chatbot"
          >
            <FaTimes />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="border-b border-white/5 px-5 py-3">
          <div className="mb-2 flex items-center justify-between gap-2 text-[10px] tracking-[0.22em] text-gray-500">
            <span>QUESTION PROGRESS</span>

            <motion.span
              key={`question-counter-${currentQuestionNumber}`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[10px] tracking-[0.18em] text-purple-300"
            >
              QUESTION {currentQuestionNumber} OF {totalQuestions}
            </motion.span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full rounded-full bg-gradient-to-r from-purple-400 to-indigo-500"
              />
            </div>

            <span className="min-w-[42px] text-right text-[10px] font-medium text-purple-300">
              {progressPercentage}%
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {messages.map((message, index) => (
            <motion.div
              key={`${message.sender}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                message.sender === "visitor"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.sender === "visitor"
                    ? "rounded-br-sm bg-purple-600 text-white"
                    : "rounded-bl-sm border border-purple-500/20 bg-[#1a1029] text-gray-200"
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
          
          {messages.length === 0 && (
            <div className="flex h-full items-center justify-center text-center text-gray-500">
              <p>Establishing connection...</p>
            </div>
          )}
{isTyping && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex justify-start"
  >
    <div className="rounded-2xl rounded-bl-sm border border-purple-500/20 bg-[#1a1029] px-4 py-3 text-sm text-gray-400">
      <div className="flex items-center gap-1">
        <span>ZERA is typing</span>

        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-400" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-400 [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-400 [animation-delay:300ms]" />
        </span>
      </div>
    </div>
  </motion.div>
)}
          <div ref={messagesEndRef} />
        </div>

        {/* Input / Completion */}
        {!submitted ? (
          <div className="border-t border-white/10 bg-[#10091d] p-4">
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-left"
              >
                <p className="text-sm font-medium text-red-200">{submitError}</p>
              </motion.div>
            )}

            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] tracking-[0.22em] text-gray-500">
                QUESTION {currentQuestionNumber} OF {totalQuestions}
              </p>

              {step > 0 && (
                <motion.button
                  type="button"
                  onClick={goBack}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-purple-500/40 bg-purple-500/5 px-3 py-1.5 text-[10px] font-medium tracking-[0.16em] text-purple-200 transition hover:bg-purple-500/10"
                >
                  BACK
                </motion.button>
              )}
            </div>

            {isSubmitting ? (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/5 px-4 py-5"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-300 border-t-transparent" />

                  <div>
                    <p className="text-sm font-medium text-white">
                      Processing your request...
                    </p>

                    <p className="text-xs text-gray-400">
                      Sending your details securely to ZERA.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <>
                <div className="flex items-end gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2 focus-within:border-purple-500/50">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={currentQuestion?.placeholder}
                    rows={1}
                    className="max-h-28 min-h-11 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-gray-600"
                  />

                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || isTyping}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FaPaperPlane className="text-sm" />
                  </button>
                </div>

                <p className="mt-2 text-center text-[10px] tracking-wider text-gray-600">
                  PRESS ENTER TO SEND
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="border-t border-white/10 bg-[#10091d] p-6 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-green-400/40 bg-green-500/10 text-2xl text-green-300"
            >
              ✓
            </motion.div>

            <p className="mb-2 text-lg font-semibold text-white">
              Request submitted successfully.
            </p>

            <p className="mb-5 text-sm text-gray-300">
              ZERA has received your request and will follow up with you soon.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={resetChatbot}
                className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-95"
              >
                Submit Another Request
              </button>

              <button
                onClick={closeChatbot}
                className="rounded-full border border-purple-500/40 px-5 py-2.5 text-sm font-medium text-purple-200 transition hover:bg-purple-500/10"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
     
    </>
  );
}