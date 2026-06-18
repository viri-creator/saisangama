import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Phone, Mail, Bot } from 'lucide-react';

interface Message {
  id: number;
  role: 'bot' | 'user';
  text: string;
}

const faqs: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    answer: 'Hello! Welcome to SaiSangama Diagnostics & Health Care. How can I assist you today? You can ask me about our doctors, services, appointments, or visiting hours.',
  },
  {
    keywords: ['appointment', 'book', 'schedule', 'consult', 'visit'],
    answer: 'To book an appointment, you can:\n\n📞 Call us: +91 80 2626 2626\n📧 Email: healthcare@saisangamahealthcare.com\n🌐 Use our online booking at /book-appointment\n\nOur team will confirm your slot within 2 hours.',
  },
  {
    keywords: ['emergency', 'urgent', 'critical', 'icu', 'accident'],
    answer: '🚨 For emergencies, please call us immediately:\n\n📞 +91 80 2626 2626\n\nOur Emergency Department is open 24/7. Please do not delay — call now or visit us at 19, 29th A Cross Rd, 7th Block, Yediyur, Jayanagar, Bengaluru.',
  },
  {
    keywords: ['hour', 'open', 'timing', 'time', 'close', 'working'],
    answer: '🕐 We are open All Day, 24/7.\n\nWalk-ins are welcome anytime.',
  },
  {
    keywords: ['doctor', 'specialist', 'physician', 'surgeon', 'available'],
    answer: 'We have 22+ experienced specialists across departments including Cardiology, Neurology, Orthopaedics, Critical Care, ENT, and more.\n\nVisit our Doctors page to browse all specialists, or call +91 80 2626 2626 to find the right doctor for you.',
  },
  {
    keywords: ['cardiolog', 'heart', 'cardiac'],
    answer: '❤️ Our Cardiology team is led by Dr. Abhijit Vilas Kulkarni and Dr. Chiran Babu A (Cardiothoracic & Vascular Surgery).\n\nTo book a cardiac consultation, call +91 80 2626 2626.',
  },
  {
    keywords: ['neuro', 'brain', 'spine', 'neurosurg'],
    answer: '🧠 Our Neurology & Neurosurgery team includes:\n• Dr. Praveen K.S – Neurologist\n• Dr. Abhay Sikaria – Neurosurgeon\n• Dr. Sandeep V.K – Neurosurgeon\n• Dr. Sridutt Badari – General Surgery / Neurosurgeon\n• Dr. Vykunta Raju – Paediatric Neurology\n\nCall +91 80 2626 2626 to schedule.',
  },
  {
    keywords: ['ortho', 'bone', 'joint', 'fracture', 'knee', 'hip'],
    answer: '🦴 Our Orthopaedics team includes:\n• Dr. Deepthi K.N\n• Dr. Mohan Kumar G\n• Dr. Keshav Gowda\n• Dr. Vijay A. Kulkarni\n\nFor orthopaedic consultations, call +91 80 2626 2626.',
  },
  {
    keywords: ['ent', 'ear', 'nose', 'throat'],
    answer: '👂 Our ENT specialist is Dr. Vijay Bhaskar with 17 years of experience.\n\nTo book an ENT consultation, call +91 80 2626 2626.',
  },
  {
    keywords: ['paediatric', 'pediatric', 'child', 'children', 'baby', 'infant', 'kid'],
    answer: '👶 Our Paediatric Neurology specialist is Dr. Vykunta Raju with 22 years of experience.\n\nFor paediatric consultations, please call +91 80 2626 2626.',
  },
  {
    keywords: ['gastro', 'stomach', 'liver', 'digestive', 'hepato'],
    answer: '🫀 Our Gastroenterology team includes:\n• Dr. Veerendra Sandur – Gastroenterology / Hepatology\n• Dr. Kasthuri – Surgical Gastroenterology\n\nCall +91 80 2626 2626 to book.',
  },
  {
    keywords: ['urology', 'kidney', 'nephro', 'urine'],
    answer: '🔬 Our Urology & Nephrology specialist is Dr. Giridhar Venkatesh with 20 years of experience.\n\nCall +91 80 2626 2626 to book a consultation.',
  },
  {
    keywords: ['diabetes', 'endocrin', 'thyroid', 'hormone'],
    answer: '💉 Our Endocrinology & Diabetes specialist is Dr. Sudeep Putta Manohar.\n\nCall +91 80 2626 2626 to book an appointment.',
  },
  {
    keywords: ['address', 'location', 'where', 'direction', 'map', 'reach'],
    answer: '📍 We are located at:\n\n19, 29th A Cross Rd, 7th Block,\nYediyur, Jayanagar,\nBengaluru – 560070\n\nParking available on premises.',
  },
  {
    keywords: ['insurance', 'cashless', 'mediclaim', 'tpa'],
    answer: '🏥 We work with several health insurance providers for cashless treatment. Please bring your insurance card and a valid photo ID.\n\nFor insurance queries, call +91 80 2626 2626.',
  },
  {
    keywords: ['fee', 'cost', 'charge', 'price', 'rate', 'payment'],
    answer: '💳 Consultation fees vary by specialty. We accept:\n• Cash & UPI\n• Credit / Debit cards\n• Health insurance (empanelled providers)\n\nFor fee details, call +91 80 2626 2626.',
  },
  {
    keywords: ['service', 'department', 'specialt', 'facilit'],
    answer: '🏨 We offer 26+ medical specialties including Cardiology, Neurology, Orthopaedics, Critical Care, ENT, Gastroenterology, Urology, Paediatrics, and more.\n\nVisit our Services page for the full list.',
  },
  {
    keywords: ['phone', 'contact', 'number', 'call'],
    answer: '📞 Contact us:\n\n• Phone: +91 80 2626 2626\n• Email: healthcare@saisangamahealthcare.com\n\nWe are available Mon–Sat 8 AM–6 PM and Sun 8 AM–1 PM.',
  },
];

const WELCOME: Message = {
  id: 0,
  role: 'bot',
  text: 'Hi! 👋 I\'m the SaiSangama Health Assistant. I can help you with:\n\n• Doctor availability\n• Booking appointments\n• Our services & specialties\n• Visiting hours & location\n\nHow can I help you today?',
};

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  for (const faq of faqs) {
    if (faq.keywords.some(kw => lower.includes(kw))) {
      return faq.answer;
    }
  }
  return 'I\'m not sure about that, but our team can help!\n\n📞 Call: +91 80 2626 2626\n📧 Email: healthcare@saisangamahealthcare.com\n\nWe\'re available Mon–Sat 8 AM–6 PM.';
}

const quickReplies = ['Book Appointment', 'Doctor Availability', 'Emergency', 'Opening Hours', 'Our Location'];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showContact, setShowContact] = useState<'phone' | 'email' | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: getBotReply(text) }]);
    }, 900);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#00b8db] to-[#155dfc] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Unread dot */}
        {!open && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[360px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: '520px' }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00b8db] to-[#155dfc] px-5 py-4 flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-white">SaiSangama Assistant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="font-['Roboto:Regular',sans-serif] text-[12px] text-white/80">Online</span>
                </div>
              </div>
              <div className="flex gap-2 relative">
                <button
                  onClick={() => setShowContact(prev => prev === 'phone' ? null : 'phone')}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors"
                  title="Call us"
                >
                  <Phone className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => setShowContact(prev => prev === 'email' ? null : 'email')}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors"
                  title="Email us"
                >
                  <Mail className="w-4 h-4 text-white" />
                </button>

                <AnimatePresence>
                  {showContact && (
                    <motion.div
                      className="absolute top-10 right-0 bg-white rounded-xl shadow-lg p-3 z-10 min-w-[220px]"
                      initial={{ opacity: 0, y: -6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                    >
                      {showContact === 'phone' ? (
                        <div>
                          <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-gray-400 uppercase tracking-wide mb-2">Call Us</p>
                          <a href="tel:+918026262626" className="flex items-center gap-2 text-[#00a6ff] hover:underline font-['Roboto:Regular',sans-serif] text-[14px] mb-1">
                            <Phone className="w-4 h-4" /> +91 80 2626 2626
                          </a>
                          <a href="tel:+916366619620" className="flex items-center gap-2 text-[#00a6ff] hover:underline font-['Roboto:Regular',sans-serif] text-[14px]">
                            <Phone className="w-4 h-4" /> +91 63666 19620
                          </a>
                        </div>
                      ) : (
                        <div>
                          <p className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-gray-400 uppercase tracking-wide mb-2">Email Us</p>
                          <a href="mailto:healthcare@saisangamahealthcare.com" className="flex items-center gap-2 text-[#00a6ff] hover:underline font-['Roboto:Regular',sans-serif] text-[13px] break-all">
                            <Mail className="w-4 h-4 shrink-0" /> healthcare@saisangamahealthcare.com
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ maxHeight: '320px' }}>
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="bg-gradient-to-br from-[#00b8db] to-[#155dfc] rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-2 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-[#00b8db] to-[#155dfc] text-white rounded-tr-sm'
                      : 'bg-white text-gray-800 shadow-sm rounded-tl-sm border border-gray-100'
                  }`}>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] leading-[20px] whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-gradient-to-br from-[#00b8db] to-[#155dfc] rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-2 mt-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    {[0, 1, 2].map(i => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 bg-[#00a6ff] rounded-full block"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-3 py-2 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              {quickReplies.map(qr => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  className="shrink-0 bg-white border border-[#00a6ff]/30 text-[#00a6ff] px-3 py-1 rounded-full font-['Poppins:SemiBold',sans-serif] text-[11px] hover:bg-[#00a6ff] hover:text-white transition-colors whitespace-nowrap"
                >
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 py-3 bg-white border-t border-gray-100 flex gap-2 items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 font-['Roboto:Regular',sans-serif] text-[14px] text-gray-700 focus:outline-none focus:border-[#00a6ff] focus:ring-2 focus:ring-[#00a6ff]/20"
              />
              <motion.button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="bg-gradient-to-br from-[#00b8db] to-[#155dfc] text-white rounded-full w-10 h-10 flex items-center justify-center disabled:opacity-40 shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
