import { motion } from 'motion/react';
import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { ContactModal, useContactModal } from '../components/ContactModal';
import { Phone, Search } from 'lucide-react';

/* ── Doctor photos ── */
import imgAbhaySikaria from '../../imports/710873bf-8b1d-405f-9fef-534343e5897c-1731934278893.jpg';
import imgMuralidharTR from '../../imports/74797434-1853-446f-af82-0c8942e5c51e.jpg';
import imgSudeepPutta from '../../imports/1730127886Dr.-Sudeep-Putta-Manohar.jpg';
import imgMuralidharThandebhavi from '../../imports/555476439398b7fd1399682c7fbe2a914a466f4209572.jpg';
import imgSandeepVK from '../../imports/images-1.jpeg';
import imgGiridharVenkatesh from '../../imports/DR__GIRIDHAR_VENKATESH.png';
import imgVeerendraSandur from '../../imports/DR__VEERENDRA_SANDUR_.png';
import imgChinmayNagesh from '../../imports/Dr-Chinmay.png';
import imgChiranBabu from '../../imports/dr-chiran-babu-a_1753943421.jpg';
import imgDeepthiKN from '../../imports/dr-deepthi-k-n.jpg';
import imgMohanKumarG from '../../imports/dr-mohan-kumar-j-orthopedic-surgeon-bangalore-2d9962f1-bb38-4a1f-a287-d121f14287d9.jpg';
import imgRameshTS from '../../imports/dr-ramesh-t-s.png';
import imgRaviKiran from '../../imports/download.jpeg';
import imgSridutt from '../../imports/dr-sridutt-bhadri.jpg';
import imgVijayBhaskar from '../../imports/Dr-Vijay-Bhaskar-Photo..jpg.jpg';
import imgVykuntaRaju from '../../imports/dr-vykunta-raju-k-n-bangalore-child-neurology-and-rehabilitation-center-vijayanagar-bangalore-paediatric-neurologist-doctors-f8rjelkp4q-250.jpg';
import imgPraveenKS from '../../imports/dr_praveen-min.jpg';
import imgAbhijitKulkarni from '../../imports/screenshot-2025-02-21-at-3.01.42-pm.png';
import imgShivaPrasad from '../../imports/Shivaprasad.jpeg';
import imgKasthuri from '../../imports/surgical-gastroenterology-consultant-in-jayanagar-dr-kasthuri-ts.jpg';
import imgKeshavGowda from '../../imports/keshava-murthy-d-1895.jpg';
import imgVijayAKulkarni from '../../imports/download__1_-1.jpeg';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const doctors: { name: string; specialty: string; depts: string[]; photo?: string }[] = [
  { name: 'Dr. Abhijit Vilas Kulkarni', specialty: 'Cardiologist', depts: ['Cardiology'], photo: imgAbhijitKulkarni },
  { name: 'Dr. Shiva Prasad', specialty: 'Critical Care Specialist', depts: ['Critical Care'], photo: imgShivaPrasad },
  { name: 'Dr. Muralidhar TR', specialty: 'Critical Care Physician', depts: ['Critical Care'], photo: imgMuralidharTR },
  { name: 'Dr. Muralidhar Thandebhavi', specialty: 'Anaesthesiology / Pain Specialist', depts: ['Anaesthesia'], photo: imgMuralidharThandebhavi },
  { name: 'Dr. Sudeep Putta Manohar', specialty: 'Endocrinology / Diabetes', depts: ['Endocrinology'], photo: imgSudeepPutta },
  { name: 'Dr. Giridhar Venkatesh', specialty: 'Urology / Nephrology', depts: ['Urology'], photo: imgGiridharVenkatesh },
  { name: 'Dr. Vykunta Raju', specialty: 'Paediatric Neurology', depts: ['Paediatrics'], photo: imgVykuntaRaju },
  { name: 'Dr. Vijay Bhaskar', specialty: 'ENT', depts: ['ENT'], photo: imgVijayBhaskar },
  { name: 'Dr. Veerendra Sandur', specialty: 'Gastroenterology / Hepatology', depts: ['Gastroenterology'], photo: imgVeerendraSandur },
  { name: 'Dr. Sridutt Badari', specialty: 'General Surgery / Neurosurgeon', depts: ['General Surgery', 'Neurosurgery'], photo: imgSridutt },
  { name: 'Dr. Chiran Babu A', specialty: 'Cardiothoracic / Vascular Surgery', depts: ['Cardiology'], photo: imgChiranBabu },
  { name: 'Dr. Chinmay Nagesh', specialty: 'Interventional Radiology', depts: ['Radiology'], photo: imgChinmayNagesh },
  { name: 'Dr. Kasthuri', specialty: 'Surgical Gastroenterology', depts: ['Gastroenterology'], photo: imgKasthuri },
  { name: 'Dr. Ramesh T.S', specialty: 'Laparoscopic Surgeon', depts: ['Laparoscopic Surgery'], photo: imgRameshTS },
  { name: 'Dr. Praveen Kumar S', specialty: 'Neurologist', depts: ['Neurology'], photo: imgPraveenKS },
  { name: 'Dr. Abhay Sikaria', specialty: 'Neurosurgeon', depts: ['Neurosurgery'], photo: imgAbhaySikaria },
  { name: 'Dr. Sandeep V.K', specialty: 'Neurosurgeon & General Surgeon', depts: ['Neurosurgery', 'General Surgery'], photo: imgSandeepVK },
  { name: 'Dr. Ravi Kiran SJ', specialty: 'General Surgeon', depts: ['General Surgery'], photo: imgRaviKiran },
  { name: 'Dr. Deepthi K.N', specialty: 'Orthopedist', depts: ['Orthopaedics'], photo: imgDeepthiKN },
  { name: 'Dr. Mohan Kumar G', specialty: 'Orthopedist', depts: ['Orthopaedics'], photo: imgMohanKumarG },
  { name: 'Dr. Keshav Gowda', specialty: 'Orthopedic', depts: ['Orthopaedics'], photo: imgKeshavGowda },
  { name: 'Dr. Vijay A. Kulkarni', specialty: 'Orthopedic', depts: ['Orthopaedics'], photo: imgVijayAKulkarni },
];

const departments = ['All', ...Array.from(new Set(doctors.flatMap(d => d.depts))).sort()];

function getInitials(name: string) {
  return name.replace('Dr. ', '').split(' ').slice(0, 2).map(n => n[0]).join('');
}

const avatarColors = [
  'from-[#00b8db] to-[#155dfc]',
  'from-[#155dfc] to-[#00b8db]',
  'from-[#00a6ff] to-[#0080cc]',
  'from-[#0080cc] to-[#00a6ff]',
];

export function DoctorsPage() {
  const { isOpen, openModal, closeModal } = useContactModal();
  const [search, setSearch] = useState('');
  const [activeDept, setActiveDept] = useState('All');

  const filtered = doctors.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase());
    const matchDept = activeDept === 'All' || d.depts.includes(activeDept);
    return matchSearch && matchDept;
  });

  return (
    <>
      <PageLayout>
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#00a6ff] to-[#0080cc] text-white py-24 overflow-hidden">
          <div className="max-w-[1150px] mx-auto px-12">
            <motion.h1
              className="font-['Poppins:Bold',sans-serif] text-[52px] mb-4"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              Our Doctors
            </motion.h1>
            <motion.p
              className="font-['Roboto:Regular',sans-serif] text-[18px] text-white/90 max-w-2xl"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              Meet our team of experienced, board-certified specialists dedicated to providing exceptional healthcare across 26+ medical disciplines.
            </motion.p>
          </div>
        </div>

        <div className="max-w-[1150px] mx-auto px-12 py-16">
          {/* Search & Filter */}
          <motion.div
            className="flex flex-col gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl font-['Roboto:Regular',sans-serif] text-[15px] text-gray-700 focus:outline-none focus:border-[#00a6ff] focus:ring-2 focus:ring-[#00a6ff]/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-full font-['Poppins:SemiBold',sans-serif] text-[13px] transition-colors ${
                    activeDept === dept
                      ? 'bg-[#00a6ff] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-[#00a6ff]/10 hover:text-[#00a6ff]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Doctors Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-gray-500">No doctors found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {filtered.map((doctor, i) => (
                <motion.div
                  key={doctor.name}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={`${doctor.photo ? '' : `bg-gradient-to-br ${avatarColors[i % avatarColors.length]}`} h-56 flex items-center justify-center overflow-hidden`}>
                    {doctor.photo ? (
                      <img
                        src={doctor.photo}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-[center_15%]"
                      />
                    ) : (
                      <span className="font-['Poppins:Bold',sans-serif] text-[36px] text-white/90">{getInitials(doctor.name)}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Poppins:SemiBold',sans-serif] text-[17px] text-[#1e1e1e] mb-1">{doctor.name}</h3>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#00a6ff] mb-3">{doctor.specialty}</p>
                    <div className="flex items-center justify-end border-t border-gray-100 pt-4">
                      <motion.button
                        onClick={openModal}
                        className="bg-[#00a6ff] text-white px-4 py-1.5 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[12px] hover:bg-[#0080cc] transition-colors"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                      >
                        Book
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* CTA */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-[#00b8db] to-[#155dfc] rounded-2xl p-12 text-white text-center"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-['Poppins:Bold',sans-serif] text-[28px] mb-3">Can't find the right specialist?</h2>
            <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-white/90 mb-8 max-w-xl mx-auto">
              Call us and our team will help you find the right doctor for your needs.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                onClick={openModal}
                className="bg-white text-[#00a6ff] px-8 py-3 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              >
                Book Appointment
              </motion.button>
              <motion.a
                href="tel:+918026262626"
                className="flex items-center gap-2 bg-white/10 border border-white/40 text-white px-8 py-3 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                +91 80 2626 2626
              </motion.a>
            </div>
          </motion.div>
        </div>
      </PageLayout>
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
