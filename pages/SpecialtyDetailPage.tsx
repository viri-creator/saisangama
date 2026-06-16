import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { specialties } from '../data/specialties';
import { ArrowLeft, CheckCircle, Phone, Calendar } from 'lucide-react';
import { ContactModal, useContactModal } from '../components/ContactModal';

export function SpecialtyDetailPage() {
  const { specialtyId } = useParams<{ specialtyId: string }>();
  const specialty = specialties.find(s => s.id === specialtyId);
  const { isOpen, openModal, closeModal } = useContactModal();

  if (!specialty) {
    return (
      <PageLayout>
        <div className="max-w-[1150px] mx-auto px-12 py-24 text-center">
          <h1 className="font-['Poppins:Bold',sans-serif] text-[36px] text-[#1e1e1e] mb-4">Specialty Not Found</h1>
          <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-gray-600 mb-8">
            The specialty you're looking for doesn't exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#00a6ff] text-white px-6 py-3 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-[#0080cc] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00a6ff] to-[#0080cc] text-white py-16 overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 font-['Roboto:Regular',sans-serif] text-[14px]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Services
            </Link>
          </motion.div>
          <motion.h1
            className="font-['Poppins:Bold',sans-serif] text-[48px] mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            {specialty.name}
          </motion.h1>
          <motion.p
            className="font-['Roboto:Regular',sans-serif] text-[18px] text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          >
            {specialty.description}
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto px-12 py-16">
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={specialty.imageUrl}
                alt={specialty.name}
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[28px] text-[#1e1e1e] mb-4">
                About {specialty.name}
              </h2>
              <div className="bg-[#00a6ff] h-[3px] rounded-[11px] w-[60px] mb-6" />
              <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-gray-700 leading-[28px]">
                {specialty.detailedInfo}
              </p>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#1e1e1e] mb-6">
                Services We Provide
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {specialty.services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#00a6ff] shrink-0 mt-0.5" />
                    <span className="font-['Roboto:Regular',sans-serif] text-[15px] text-gray-700">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#1e1e1e] mb-4">
                Why Choose SaiSangama for {specialty.name}?
              </h3>
              <ul className="space-y-3">
                {[
                  'Experienced and qualified medical professionals',
                  'State-of-the-art medical equipment and facilities',
                  'Patient-centered approach to care',
                  'Affordable and transparent pricing',
                  'Comprehensive care from diagnosis to treatment',
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#00a6ff] shrink-0 mt-0.5" />
                    <span className="font-['Roboto:Regular',sans-serif] text-[15px] text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <motion.div
              className="bg-white border-2 border-[#00a6ff] rounded-2xl p-8 sticky top-24"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-[24px] text-[#1e1e1e] mb-6 text-center">
                Book an Appointment
              </h3>

              <div className="space-y-4 mb-8">
                <motion.a
                  href="tel:+918026262626"
                  className="flex items-center justify-center gap-3 bg-[#00a6ff] text-white px-6 py-4 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-[#0080cc] transition-colors w-full"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>

                <Link to="/book-appointment" className="w-full">
                  <motion.div
                    className="flex items-center justify-center gap-3 bg-white text-[#00a6ff] border-2 border-[#00a6ff] px-6 py-4 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-[#00a6ff] hover:text-white transition-colors w-full"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Online
                  </motion.div>
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-4">
                  Opening Hours
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-600">All Day</span>
                    <span className="font-['Roboto:Medium',sans-serif] text-[14px] text-[#00a6ff]">24 / 7</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-4">
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <a
                    href="tel:+918026262626"
                    className="flex items-center gap-2 text-[#00a6ff] hover:underline font-['Roboto:Regular',sans-serif] text-[14px]"
                  >
                    <Phone className="w-4 h-4" />
                    +91 80 2626 2626
                  </a>
                  <a
                    href="mailto:healthcare@saisangamahealthcare.com"
                    className="flex items-center gap-2 text-[#00a6ff] hover:underline font-['Roboto:Regular',sans-serif] text-[14px] break-all"
                  >
                    healthcare@saisangamahealthcare.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </PageLayout>
  );
}
