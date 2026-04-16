'use client';

import { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  role: 'bot' | 'user';
  text: string;
}

type Step = 'greeting' | 'name' | 'phone' | 'service' | 'done';

const botMessages: Record<Step, string> = {
  greeting: "Hi there! 👋 I'm the AMNXT Digital assistant. I'd love to help connect you with our team. What's your name?",
  name: "Great to meet you, {name}! 😊 What's the best phone number to reach you?",
  phone: "Perfect! Last question — what service are you interested in? (e.g. Web Dev, Mobile App, AI Chatbot, Marketing...)",
  service: "Awesome! 🚀 Thanks, {name}! Our team will reach out to you at {phone} shortly. We usually respond within a few hours. Looking forward to working with you!",
  done: '',
};

export default function AIChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>('greeting');
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && !hasGreeted) {
      setHasGreeted(true);
      setTimeout(() => {
        addBotMessage(botMessages.greeting);
        setStep('name');
      }, 400);
    }
  }, [open, hasGreeted]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now(), role: 'bot', text }]);
    }, 900);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || step === 'done') return;

    const userMsg: Message = { id: Date.now(), role: 'user', text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    if (step === 'name') {
      setUserName(trimmed);
      setTimeout(() => {
        addBotMessage(botMessages.name.replace('{name}', trimmed));
        setStep('phone');
      }, 200);
    } else if (step === 'phone') {
      setUserPhone(trimmed);
      setTimeout(() => {
        addBotMessage(botMessages.phone);
        setStep('service');
      }, 200);
    } else if (step === 'service') {
      setTimeout(() => {
        const finalMsg = botMessages.service
          .replace('{name}', userName)
          .replace('{phone}', userPhone);
        addBotMessage(finalMsg);
        setStep('done');
      }, 200);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([]);
    setStep('greeting');
    setUserName('');
    setUserPhone('');
    setHasGreeted(false);
    setInput('');
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        id="ai-chat-toggle"
        onClick={() => setOpen(prev => !prev)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-brand-600 to-sky-500 text-white shadow-xl shadow-brand-500/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
        style={{ boxShadow: '0 0 0 0 rgba(14,165,233,0.5)', animation: open ? 'none' : 'chatPulse 2.4s ease-in-out infinite' }}
      >
        {open
          ? <X className="w-6 h-6" />
          : <MessageCircle className="w-6 h-6" />
        }
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-[9998] w-[340px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${
          open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
        style={{ maxHeight: '520px' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-sky-500 px-5 py-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">AMNXT Assistant</p>
            <p className="text-white/70 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Online — replies instantly
            </p>
          </div>
          <button
            onClick={handleReset}
            className="text-white/60 hover:text-white text-xs font-medium transition-colors"
            title="Start over"
          >
            Reset
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50" style={{ minHeight: '280px', maxHeight: '360px' }}>
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'bot' ? 'bg-brand-100' : 'bg-gray-200'}`}>
                {msg.role === 'bot'
                  ? <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  : <User className="w-3.5 h-3.5 text-gray-500" />
                }
              </div>
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'bot'
                    ? 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm shadow-sm'
                    : 'bg-brand-600 text-white rounded-br-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 bg-white border-t border-gray-100">
          {step === 'done' ? (
            <p className="text-center text-xs text-gray-400 font-medium py-2">
              ✅ We&apos;ll be in touch soon!
            </p>
          ) : (
            <div className="flex items-center gap-2">
              <input
                id="chat-input"
                type={step === 'phone' ? 'tel' : 'text'}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder={
                  step === 'name' ? 'Your name...' :
                  step === 'phone' ? 'Your phone number...' :
                  'Type your service...'
                }
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(14,165,233,0.5); }
          50% { box-shadow: 0 0 0 14px rgba(14,165,233,0); }
        }
      `}</style>
    </>
  );
}
