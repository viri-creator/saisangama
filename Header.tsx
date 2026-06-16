import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import imgImageLogo from '../../imports/logo.png';
import { ContactModal, useContactModal } from './ContactModal';
import { specialties } from '../data/specialties';
import { ChevronDown } from 'lucide-react';

const doctors = [
  { name: 'Dr. Abhijit Vilas Kulkarni', specialty: 'Cardiologist' },
  { name: 'Dr. Shiva Prasad', specialty: 'Critical Care Specialist' },
  { name: 'Dr. Muralidhar TR', specialty: 'Critical Care Physician' },
  { name: 'Dr. Muralidhar Thandebhavi', specialty: 'Anaesthesiology / Pain Specialist' },
  { name: 'Dr. Sudeep Putta Manohar', specialty: 'Endocrinology / Diabetes' },
  { name: 'Dr. Giridhar Venkatesh', specialty: 'Urology / Nephrology' },
  { name: 'Dr. Vykunta Raju', specialty: 'Paediatric Neurology' },
  { name: 'Dr. Vijay Bhaskar', specialty: 'ENT' },
  { name: 'Dr. Veerendra Sandur', specialty: 'Gastroenterology / Hepatology' },
  { name: 'Dr. Sridutt Badari', specialty: 'General Surgery / Neurosurgeon' },
  { name: 'Dr. Chiran Babu A', specialty: 'Cardiothoracic / Vascular Surgery' },
  { name: 'Dr. Chinmay Nagesh', specialty: 'Interventional Radiology' },
  { name: 'Dr. Kasthuri', specialty: 'Surgical Gastroenterology' },
  { name: 'Dr. Ramesh T.S', specialty: 'Laparoscopic Surgeon' },
  { name: 'Dr. Praveen K.S', specialty: 'Neurologist' },
  { name: 'Dr. Abhay Sikaria', specialty: 'Neurosurgeon' },
  { name: 'Dr. Sandeep V.K', specialty: 'Neurosurgeon' },
  { name: 'Dr. Ravi Kiran', specialty: 'General Surgeon' },
  { name: 'Dr. Deepthi K.N', specialty: 'Orthopedist' },
  { name: 'Dr. Mohan Kumar G', specialty: 'Orthopedist' },
  { name: 'Dr. Keshav Gowda', specialty: 'Orthopedic' },
  { name: 'Dr. Vijay A. Kulkarni', specialty: 'Orthopedic' },
];

export function Header() {
  const { isOpen, openModal, closeModal } = useContactModal();
  const [doctorsOpen, setDoctorsOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const doctorsRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (doctorsRef.current && !doctorsRef.current.contains(e.target as Node)) {
        setDoctorsOpen(false);
      }
      if (specialtiesRef.current && !specialtiesRef.current.contains(e.target as Node)) {
        setSpecialtiesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="bg-white drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] w-full sticky top-0 z-50">
        <div className="max-w-[1150px] mx-auto px-12 h-[100px] flex items-center gap-24 justify-between">
          <Link to="/" className="shrink-0">
            <img alt="SaiSangama Healthcare" className="h-[60px] w-[226.8px] object-contain" src={imgImageLogo} />
          </Link>

          <nav className="flex gap-10 items-center flex-1 justify-end">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />

            {/* Specialties Dropdown → links to /services */}
            <div className="relative" ref={specialtiesRef}>
              <button
                onClick={() => { setSpecialtiesOpen((prev) => !prev); setDoctorsOpen(false); }}
                className="flex items-center gap-1 font-['Poppins:SemiBold',sans-serif] text-[18px] text-black hover:text-[#00a6ff] transition-colors relative group"
              >
                Specialties
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${specialtiesOpen ? 'rotate-180' : ''}`} />
                <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-[#00a6ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              {specialtiesOpen && (
                <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-xl shadow-2xl w-[680px] p-6 z-50">
                  <div className="mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#00a6ff] uppercase tracking-wider">26 Medical Specialties</p>
                    <Link
                      to="/services"
                      onClick={() => setSpecialtiesOpen(false)}
                      className="text-[13px] font-['Poppins:SemiBold',sans-serif] text-[#00a6ff] hover:underline"
                    >
                      View all →
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {specialties.map((specialty) => (
                      <Link
                        key={specialty.id}
                        to={`/services/${specialty.id}`}
                        onClick={() => setSpecialtiesOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-[14px] font-['Roboto:Regular',sans-serif] text-gray-700 hover:bg-[#00a6ff]/10 hover:text-[#00a6ff] transition-colors group/item"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00a6ff] opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                        {specialty.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Doctors Dropdown */}
            <div className="relative" ref={doctorsRef}>
              <button
                onClick={() => { setDoctorsOpen((prev) => !prev); setSpecialtiesOpen(false); }}
                className="flex items-center gap-1 font-['Poppins:SemiBold',sans-serif] text-[18px] text-black hover:text-[#00a6ff] transition-colors relative group"
              >
                Doctors
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${doctorsOpen ? 'rotate-180' : ''}`}
                />
                <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-[#00a6ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              {doctorsOpen && (
                <div className="absolute top-[calc(100%+16px)] right-0 bg-white border border-gray-200 rounded-xl shadow-2xl w-[600px] p-6 z-50">
                  <div className="mb-4 pb-3 border-b border-gray-100">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-[#00a6ff] uppercase tracking-wider">
                      Our Specialists
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {doctors.map((doc) => (
                      <Link
                        key={doc.name}
                        to="/doctors"
                        onClick={() => setDoctorsOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#00a6ff]/10 transition-colors group"
                      >
                        <span className="text-[13px] font-['Poppins:SemiBold',sans-serif] text-gray-800 group-hover:text-[#00a6ff]">
                          {doc.name}
                        </span>
                        <span className="text-[11px] font-['Roboto:Regular',sans-serif] text-gray-400 group-hover:text-[#00a6ff]/70 ml-2 text-right">
                          {doc.specialty}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-100">
                    <Link
                      to="/doctors"
                      onClick={() => setDoctorsOpen(false)}
                      className="inline-flex items-center gap-2 text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#00a6ff] hover:underline"
                    >
                      View all doctors →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={openModal}
              className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black hover:text-[#00a6ff] transition-colors relative group"
            >
              Contact
              <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-[#00a6ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <Link
              to="/book-appointment"
              className="bg-gradient-to-r from-[#00b8db] to-[#155dfc] text-white px-6 py-2.5 rounded-[10px] font-['Inter:Medium',sans-serif] font-medium text-[16px] leading-[24px] hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>

      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-black hover:text-[#00a6ff] transition-colors relative group"
    >
      {label}
      <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-[#00a6ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}
