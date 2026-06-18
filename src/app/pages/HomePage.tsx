import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactModal, useContactModal } from '../components/ContactModal';
import { WhatsAppButton } from '../components/WhatsAppButton';
import svgPaths from '../../imports/RedesignHospitalWebsite/svg-wjt6hpgeka';
import imgHero from '../../imports/RedesignHospitalWebsite/8d0623db6d6e290f1c97f541c7c8ea9376f99f56.png';
import imgAbout from '../../imports/RedesignHospitalWebsite/0d6d6a912928681dbe7f76a5fa80fd55c2064ce7.png';
import imgCtaBg from '../../imports/RedesignHospitalWebsite/19b6acf7664ba094f4d6d1f64c8359132f8e1f14.png';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const slideLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
const slideRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };

export function HomePage() {
  const { isOpen, openModal, closeModal } = useContactModal();
  const [emergencyOpen, setEmergencyOpen] = useState(false);

  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
      {/* Emergency Banner */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#e7000b] to-[#c10007] w-full"
      >
        <div className="max-w-[1280px] mx-auto px-4 py-2 flex items-center justify-center gap-4">
          <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
            <g clipPath="url(#clip0_21_1244)" opacity="0.782901">
              <path d={svgPaths.p1a7ce800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </g>
            <defs><clipPath id="clip0_21_1244"><rect fill="white" height="20" width="20" /></clipPath></defs>
          </svg>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-white text-[16px] leading-[24px]">
            Emergency Hotline: <a href="tel:+918026262626" className="font-['Inter:Bold',sans-serif] font-bold hover:underline">+91 80 2626 2626</a> | Available 24/7
          </p>
        </div>
      </motion.div>

      <Header />

      {/* Hero Section */}
      <div className="w-full shrink-0" style={{
        backgroundImage: 'linear-gradient(149.002deg, rgb(249, 250, 251) 0%, rgb(219, 234, 254) 50%, rgb(207, 250, 254) 100%)',
        backgroundSize: '200% 200%',
        animation: 'heroGradient 6s ease infinite',
      }}>
      <style>{`
        @keyframes heroGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes lineGlow {
          0%, 100% { background-position: 0% 50%; box-shadow: 0 0 4px 1px rgba(6,182,212,0.4); }
          50% { background-position: 100% 50%; box-shadow: 0 0 8px 2px rgba(6,182,212,0.7); }
        }
      `}</style>
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            variants={slideLeft} initial="hidden" animate="visible"
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-start w-full md:w-[533px] shrink-0"
          >
            <div className="w-full">
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] text-[#101828]">Your Health, Our{' '}
                <span className="bg-clip-text bg-gradient-to-r from-[#00b8db] to-[#155dfc] text-transparent">Priority</span>
              </p>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 128, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 h-[4px] rounded-full"
                style={{ backgroundImage: 'linear-gradient(90deg, #00b8db, #155dfc, #00b8db)', backgroundSize: '200% 100%', animation: 'lineGlow 2s ease-in-out infinite', animationDelay: '1.2s' }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 font-['Inter:Regular',sans-serif] text-[#4a5565] text-[18px] leading-[29.25px] w-full md:w-[533px]"
            >
              Providing compassionate, world-class medical care with state-of-the-art facilities and experienced healthcare professionals dedicated to your wellbeing.
            </motion.p>
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              {[
                {
                  delay: 0.6,
                  bg: 'linear-gradient(141.178deg, rgb(0, 184, 219) 0%, rgb(0, 146, 184) 100%)',
                  content: (
                    <>
                      <div className="bg-white/20 rounded-[14px] size-12 flex items-center justify-center">
                        <svg className="size-6" fill="none" viewBox="0 0 24 24">
                          <path d="M10 10H6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p67fd620} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p18afcd00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M8 8V12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M9 18H15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p13934880} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p1ff3c700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px]">Emergency Care</p>
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#ecfeff] text-[14px] leading-[20px]">24/7 emergency services</p>
                      <div className="flex items-center gap-1 pt-2">
                        <a href="tel:+918026262626" className="font-['Inter:Medium',sans-serif] font-medium text-white text-[16px] leading-[24px] hover:underline">+91 80 2626 2626</a>
                        <svg className="size-5" fill="none" viewBox="0 0 20 20"><path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg>
                      </div>
                    </>
                  ),
                },
                {
                  delay: 0.75,
                  bg: 'linear-gradient(141.232deg, rgb(20, 71, 230) 0%, rgb(25, 60, 184) 100%)',
                  content: (
                    <>
                      <div className="bg-white/20 rounded-[14px] size-12 flex items-center justify-center">
                        <svg className="size-6" fill="none" viewBox="0 0 24 24">
                          <path d="M8 2V6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M16 2V6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p32f12c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d="M3 10H21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[20px] leading-[28px]">Online Appointment</p>
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#dbeafe] text-[14px] leading-[20px]">Book your visit in minutes</p>
                      <Link to="/book-appointment" className="flex items-center gap-1 pt-2 text-white font-['Inter:Medium',sans-serif] font-medium text-[16px] leading-[24px] hover:underline">
                        Schedule Now
                        <svg className="size-5" fill="none" viewBox="0 0 20 20"><path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg>
                      </Link>
                    </>
                  ),
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-2xl text-white flex flex-col gap-3 w-full sm:w-[258px] drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1)] cursor-pointer"
                  style={{ backgroundImage: card.bg }}
                >
                  {card.content}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={slideRight} initial="hidden" animate="visible"
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative w-full md:w-[533px] shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] h-[400px] w-full"
              style={{ animation: 'floatImage 4s ease-in-out infinite' }}
            >
              <img alt="Hospital" className="w-full h-full object-cover" src={imgHero} />
            </motion.div>
            <div className="absolute bg-[#00b8db] blur-[40px] opacity-78 rounded-full size-24 top-[-16px] left-[453px]" />
            <div className="absolute bg-[#00d3f3] blur-[24px] opacity-10 rounded-full size-20 top-[197px] left-[-48px]" />
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white w-full py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16 relative">
          <motion.div
            variants={slideLeft} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative w-full md:w-[533px] shrink-0 h-[300px] md:h-[400px]"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <img alt="About SaiSangama" className="w-full h-full object-cover" src={imgAbout} />
            </div>
          </motion.div>
          <motion.div
            variants={slideRight} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start w-full md:w-[533px]"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0092b8] text-[14px] leading-[20px] tracking-[0.7px] uppercase">About Us</p>
            <div className="mt-3">
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[#101828] text-[36px] leading-[40px]">Welcome to SaiSangama</p>
              <div className="mt-3 w-24 h-1 rounded-full bg-gradient-to-r from-[#00b8db] to-[#155dfc]" />
            </div>
            <p className="mt-6 font-['Inter:Regular',sans-serif] text-[#4a5565] text-[16px] leading-[26px] w-full md:w-[533px]">
              For over 50 years, we have been committed to providing exceptional healthcare services to our community. Our team of dedicated healthcare professionals combines cutting-edge medical technology with compassionate care to ensure the best outcomes for our patients.
            </p>
            <p className="mt-6 font-['Inter:Regular',sans-serif] text-[#4a5565] text-[16px] leading-[26px] w-full md:w-[533px]">
              From routine checkups to complex surgical procedures, we offer comprehensive medical services across multiple specialties, all under one roof. Your health and wellbeing are at the heart of everything we do.
            </p>
            <Link to="/about">
            <motion.div
              whileHover={{ scale: 1.05, x: 4 }} whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex items-center gap-2 bg-[#1447e6] text-white px-8 py-3 rounded-[10px] font-['Inter:Medium',sans-serif] font-medium text-[16px] leading-[24px] hover:bg-[#1239cc] transition-colors cursor-pointer"
            >
              Learn More
              <svg className="size-5" fill="none" viewBox="0 0 20 20"><path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg>
            </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full py-12 md:py-20 bg-gradient-to-b from-[#f9fafb] to-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0092b8] text-[14px] tracking-[0.7px] uppercase">Why Choose Us</p>
            <p className="mt-4 font-['Inter:Bold',sans-serif] font-bold text-[#101828] text-[36px] leading-[40px] text-center">Learn What is Best For U</p>
            <div className="mt-4 w-full max-w-[1114px] h-1 rounded-full bg-gradient-to-r from-[#00b8db] to-[#155dfc]" />
          </motion.div>
          <div className="mt-16 flex flex-col md:flex-row justify-center gap-8">
            {[
              { title: 'Healthcare with Human touch', icon: (<svg className="size-12" fill="none" viewBox="0 0 48 48"><path d={svgPaths.p2b3c4500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d={svgPaths.p31eb3600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d="M32 22L36 26L44 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></svg>) },
              { title: 'Expert Consultancy and Diagnostics', icon: (<svg className="size-12" fill="none" viewBox="0 0 48 48"><path d={svgPaths.p28f1080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d={svgPaths.p1c511500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d="M24 22H32" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d="M24 32H32" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d="M16 22H16.02" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d="M16 32H16.02" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></svg>) },
              { title: 'Immediate Care facility', icon: (<svg className="size-12" fill="none" viewBox="0 0 48 48"><path d={svgPaths.p1f337080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /><path d="M24 12V24L32 28" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></svg>) },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                className="bg-white rounded-2xl p-8 w-full md:w-[320px] flex flex-col items-center drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1)] border border-[#f3f4f6] cursor-pointer"
              >
                <div className="size-24 rounded-full flex items-center justify-center drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1)]" style={{ backgroundImage: 'linear-gradient(135deg, rgb(0, 146, 184) 0%, rgb(20, 71, 230) 100%)' }}>
                  {item.icon}
                </div>
                <p className="mt-6 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#101828] text-[20px] leading-[28px] text-center w-[255px]">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Comprehensive Medical Care */}
      <div className="bg-white w-full py-12 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0092b8] text-[14px] tracking-[0.7px] uppercase">Our Services</p>
            <p className="mt-4 font-['Inter:Bold',sans-serif] font-bold text-[#101828] text-[36px] leading-[40px] text-center">Comprehensive Medical Care</p>
            <div className="mt-4 w-full max-w-[1114px] h-1 rounded-full bg-gradient-to-r from-[#00b8db] to-[#155dfc]" />
          </motion.div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Emergency Care', desc: '24/7 emergency services with rapid response teams and state-of-the-art trauma care facilities.', color: 'bg-[#cefafe]', icon: <><path d="M11.6667 11.6667H7" stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.p12cc5000} stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.p2550cf00} stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d="M9.33333 9.33333V14" stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d="M10.5 21H17.5" stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.pa689e00} stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.p26ea4300} stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /></> },
              { title: 'Primary Care', desc: 'Comprehensive primary care services including preventive care, checkups, and chronic disease management.', color: 'bg-[#dbeafe]', icon: <><path d={svgPaths.p184ba090} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.p5d36b00} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.p3dc88f80} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /></> },
              { title: 'Cardiology', desc: 'Advanced cardiac care with leading cardiologists and cutting-edge diagnostic technology.', color: 'bg-[#cefafe]', icon: <><path d={svgPaths.p3012a800} stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /></> },
              { title: 'General Medicine', desc: 'Expert diagnosis and treatment for a wide range of medical conditions and illnesses.', color: 'bg-[#dbeafe]', icon: <><path d="M12.8333 2.33333V4.66667" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d="M5.83333 2.33333V4.66667" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.p2f8c2cf0} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.p297aa280} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.p9404480} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /></> },
              { title: 'Laboratory', desc: 'Comprehensive diagnostic testing with rapid results and advanced laboratory equipment.', color: 'bg-[#cefafe]', icon: <><path d={svgPaths.p35802300} stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d={svgPaths.p2c7af00} stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d="M14 12.8333H18.6667" stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d="M14 18.6667H18.6667" stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d="M9.33333 12.8333H9.345" stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /><path d="M9.33333 18.6667H9.345" stroke="#0092B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /></> },
              { title: 'Pediatrics', desc: 'Specialized care for infants, children, and adolescents with experienced pediatricians.', color: 'bg-[#dbeafe]', icon: <><path d={svgPaths.p1dcc0100} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" /></> },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}
                className="flex flex-col items-start p-8 rounded-2xl border-2 border-[#f3f4f6] cursor-pointer"
                style={{ backgroundImage: 'linear-gradient(142.765deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)' }}
              >
                <div className={`${card.color} rounded-[14px] size-14 flex items-center justify-center`}>
                  <svg className="size-7" fill="none" viewBox="0 0 28 28">{card.icon}</svg>
                </div>
                <p className="mt-6 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#101828] text-[20px] leading-[28px]">{card.title}</p>
                <p className="mt-3 font-['Inter:Regular',sans-serif] text-[#4a5565] text-[16px] leading-[26px]">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        variants={fadeIn} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[352px] shrink-0 overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(163.363deg, rgb(0, 146, 184) 0%, rgb(20, 71, 230) 100%)' }}
      >
        <img alt="" className="absolute top-0 left-0 opacity-30 pointer-events-none" style={{ height: '17.05%', width: '5.09%', maxWidth: 'none' }} src={imgCtaBg} />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="font-['Inter:Bold',sans-serif] font-bold text-white text-[36px] leading-[40px] text-center"
          >
            Ready to Take Care of Your Health?
          </motion.p>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 font-['Inter:Regular',sans-serif] text-[#ecfeff] text-[20px] leading-[28px] text-center max-w-[832px]"
          >
            Schedule an appointment with our expert healthcare team today
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/book-appointment"
                className="flex items-center gap-2 bg-white text-[#1447e6] px-8 py-4 rounded-[10px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] hover:bg-gray-50 transition-colors h-[60px]"
              >
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d="M6.66667 1.66667V5" stroke="#1447E6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M13.3333 1.66667V5" stroke="#1447E6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p1da67b80} stroke="#1447E6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M2.5 8.33333H17.5" stroke="#1447E6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
                Book Appointment
              </Link>
            </motion.div>
            <motion.button
              onClick={() => setEmergencyOpen(true)}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-[10px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] leading-[24px] hover:bg-white/10 transition-colors h-[60px]"
            >
              <svg className="size-5" fill="none" viewBox="0 0 20 20">
                <g clipPath="url(#cta-clip)">
                  <path d={svgPaths.p1a7ce800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </g>
                <defs><clipPath id="cta-clip"><rect fill="white" height="20" width="20" /></clipPath></defs>
              </svg>
              Emergency Call
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
<WhatsAppButton />

      {/* Emergency Number Modal */}
      <AnimatePresence>
        {emergencyOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setEmergencyOpen(false)} />
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 20 20">
                    <g clipPath="url(#em-clip)">
                      <path d={svgPaths.p1a7ce800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    </g>
                    <defs><clipPath id="em-clip"><rect fill="white" height="20" width="20" /></clipPath></defs>
                  </svg>
                </div>
                <h2 className="font-['Poppins:Bold',sans-serif] text-[28px] mb-1">Emergency Contact</h2>
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-white/80">SaiSangama Diagnostics & Health Care</p>
              </div>
              <div className="p-8 text-center space-y-4">
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-500">Available 24/7 — call us immediately</p>
                <a
                  href="tel:+918026262626"
                  className="block bg-red-500 hover:bg-red-600 text-white text-[28px] font-['Poppins:Bold',sans-serif] py-4 rounded-xl transition-colors"
                >
                  +91 80 2626 2626
                </a>
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-gray-400">Tap the number to call directly</p>
                <button
                  onClick={() => setEmergencyOpen(false)}
                  className="w-full border border-gray-200 text-gray-500 py-3 rounded-xl font-['Poppins:SemiBold',sans-serif] text-[15px] hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
