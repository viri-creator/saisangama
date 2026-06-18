import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { PageLayout } from '../components/PageLayout';
import { CheckCircle } from 'lucide-react';

/* ── Images ── */
const imgDoctor    = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
const imgSurgeon   = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
const imgClipboard = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
const imgMomBaby   = 'https://images.unsplash.com/photo-1632053652571-a6a45052bbbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';

/* ── Progress bar (animated on scroll) ── */
function ProgressBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#1e1e1e]">{label}</span>
        <span
          className="text-white text-[12px] font-['Poppins:SemiBold',sans-serif] px-2 py-0.5 rounded"
          style={{ backgroundColor: '#00a6ff' }}
        >
          {value}%
        </span>
      </div>
      <div className="h-[6px] bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg,#00b8db,#155dfc)' }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
        />
      </div>
    </div>
  );
}

/* ── Why Choose Us cards ── */
const whyCards = [
  {
    title: 'Healthcare with Human touch',
    desc: 'Our doctors and staff members combine exceptional medical expertise with a compassionate human touch, ensuring every patient experiences care, comfort and trust at SaiSangama.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="16" r="8" stroke="white" strokeWidth="2.5"/>
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Expert Consultancy and Diagnostics',
    desc: 'You will have access to some of the top doctors in Bangalore, including experts in Neurosurgery, Orthopaedics, Critical Care, Urology, and more.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="36" rx="4" stroke="white" strokeWidth="2.5"/>
        <path d="M16 20h16M16 28h16M16 36h8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 8v6M28 8v6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Immediate Care facility',
    desc: 'It is our endeavour to ensure that patients with non-critical elements are examined, treated, and discharged within 65 minutes.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="2.5"/>
        <path d="M24 14v10l6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Cutting – Edge Diagnostics',
    desc: 'We have cutting-edge diagnostic tools that complement our doctors\' expertise, helping patients by reducing treatment time and costs.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 36l10-14 8 8 8-16 6 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="6" y="6" width="36" height="36" rx="4" stroke="white" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    title: 'Medicare at Doorstep',
    desc: 'We provide immediate doorstep medical care facility for some of the selected chronic conditions, helping elderly patients receive quick and timely medical support.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6L6 20v24h36V20L24 6z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
        <rect x="18" y="30" width="12" height="14" rx="2" stroke="white" strokeWidth="2.5"/>
        <path d="M20 22h8M24 18v8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Immediate Care facility',
    desc: 'The services and processes at SaiSangama are optimised to achieve the best outcomes at a reasonable cost, making quality treatment affordable for all.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="2.5"/>
        <path d="M17 24l5 5 9-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export function AboutPage() {
  return (
    <PageLayout>

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f4f4f4] px-4 md:px-12 py-4 border-b border-gray-200">
        <div className="max-w-[1150px] mx-auto flex items-center gap-2">
          <span className="font-['Poppins:Bold',sans-serif] text-[18px] text-[#1e1e1e]">About</span>
          <span className="text-gray-300 mx-1">|</span>
          <Link to="/" className="font-['Roboto:Regular',sans-serif] text-[13px] text-gray-400 hover:text-[#00a6ff] transition-colors uppercase tracking-wide">Home</Link>
          <span className="text-gray-400 text-[12px]">←</span>
          <span className="font-['Roboto:Regular',sans-serif] text-[13px] text-gray-400 uppercase tracking-wide">About</span>
        </div>
      </div>

      {/* ── Section 1: WHO WE ARE ── */}
      <section className="bg-[#f4f4f4] py-12 md:py-20">
        <div className="max-w-[1150px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Stacked images */}
            <motion.div
              className="relative h-[460px]"
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
            >
              {/* Top-left image — tall with rounded-top */}
              <div
                className="absolute top-0 left-0 w-[220px] h-[300px] overflow-hidden shadow-lg"
                style={{ borderRadius: '110px 110px 16px 16px' }}
              >
                <img src={imgDoctor} alt="Doctor" className="w-full h-full object-cover object-top" />
              </div>
              {/* Bottom-right image — overlapping */}
              <div
                className="absolute bottom-0 right-[40px] w-[200px] h-[280px] overflow-hidden shadow-xl border-4 border-white"
                style={{ borderRadius: '100px 100px 16px 16px' }}
              >
                <img src={imgSurgeon} alt="Surgeon" className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
            >
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#333] uppercase tracking-[3px] mb-2">WHO WE ARE</p>
              <div className="w-8 h-[3px] bg-[#00a6ff] rounded-full mb-6" />
              <h2 className="font-['Poppins:Bold',sans-serif] text-[34px] text-[#1e1e1e] leading-tight mb-5">
                South Bengaluru's<br />hospital of choice
              </h2>
              <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#1e1e1e] leading-[26px] mb-4">
                SaiSangama combines human touch with world-class medical technology to provide a trusted patient-doctor relationship.
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-500 leading-[24px] mb-8">
                We at SaiSangama emphasis on adding compassion to the world-class medical care we provide, thus moving on to become an integral part of the city's medical landscape.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  'SaiSangama is envisioned to be patient – centric, resulting in utmost care and comfort to the well – being of the patient.',
                  'We at SaiSangama believe in medicare 24×7, and work to get healthcare to your doorstep.',
                  'At SaiSangama, with patient at the center of its activities, we aim to provide a quick, effecient and cost – effective medical care to large sections of our community.',
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.12 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#00a6ff] shrink-0 mt-0.5" />
                    <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-600 leading-[22px]">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Why is it worth it ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-[1150px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
            >
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#333] uppercase tracking-[3px] mb-2">Why is it worth it</p>
              <div className="w-8 h-[3px] bg-[#00a6ff] rounded-full mb-6" />
              <h2 className="font-['Poppins:Bold',sans-serif] text-[30px] text-[#1e1e1e] leading-tight mb-5">
                SaiSangama HomeCare Facilities Provide Quick Care and Relief
              </h2>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-500 leading-[24px] mb-8">
                No appointment needed, most patients are seen, treated and released in about 60 minutes. Certified and experienced MD physicians not nurses and on site diagnostic tests with lab.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  'Behavioral health',
                  'Minor cuts and wounds',
                  'Earache & Ear Infection',
                  'Urinary tract infections',
                  'Broken bones',
                  'Stomach Upset',
                  'Minor burns',
                  'Fever and more...',
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    <CheckCircle className="w-4 h-4 text-[#00a6ff] shrink-0" />
                    <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="h-[440px] rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
            >
              <img src={imgClipboard} alt="Medical care" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Choose Us ── */}
      <section className="bg-[#0d1b2a] py-12 md:py-20">
        <div className="max-w-[1150px] mx-auto px-4 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Poppins:Bold',sans-serif] text-[34px] text-white mb-5">Why Choose Us</h2>
            <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-400 max-w-2xl mx-auto leading-[24px]">
              We believe it is the people who make SaiSangama what it is and we are extremely proud of the achievements of our staff. We all work together to help our patients through recovery, providing the best possible care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-7 flex gap-5"
                style={{ backgroundColor: '#1a3a5c' }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div
                  className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0,166,255,0.2)' }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-white mb-2">{card.title}</h3>
                  <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-gray-400 leading-[22px]">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Family Birth Center ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-[1150px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Image */}
            <motion.div
              className="h-[460px] rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
            >
              <img src={imgMomBaby} alt="Family Birth Center" className="w-full h-full object-cover" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
            >
              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#333] uppercase tracking-[3px] mb-2">Family Birth Center</p>
              <div className="w-8 h-[3px] bg-[#00a6ff] rounded-full mb-6" />
              <h2 className="font-['Poppins:Bold',sans-serif] text-[30px] text-[#1e1e1e] leading-tight mb-5">
                Leading Edge Care for<br />Mom and Baby
              </h2>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-500 leading-[24px] mb-10">
                The Family Birth Center at SaiSangama is a unique, full-service facility offering moms-to-be leading-edge care in a comfortable and nurturing environment. We provide comprehensive care throughout pregnancy, delivery, and postnatal recovery to ensure the best possible birthing experience.
              </p>
              <ProgressBar label="Natural Birth" value={92} />
              <ProgressBar label="Preconception and Fertility" value={85} />
              <ProgressBar label="Womans Health and Physiotherapy" value={85} />
            </motion.div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
