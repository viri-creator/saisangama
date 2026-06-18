import { Link } from 'react-router';
import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { specialties, mainServices } from '../data/specialties';
import { ArrowRight, Heart, Users, Clock, Award } from 'lucide-react';
import { ContactModal, useContactModal } from '../components/ContactModal';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const stats = [
  { icon: <Heart className="w-12 h-12 text-[#00a6ff] mx-auto mb-3" />, value: '26+', label: 'Specialties' },
  { icon: <Users className="w-12 h-12 text-[#00a6ff] mx-auto mb-3" />, value: '15+', label: 'Expert Doctors' },
  { icon: <Clock className="w-12 h-12 text-[#00a6ff] mx-auto mb-3" />, value: '24/7', label: 'Emergency Care' },
  { icon: <Award className="w-12 h-12 text-[#00a6ff] mx-auto mb-3" />, value: '5', label: 'Years Experience' },
];

export function ServicesPage() {
  const { isOpen, openModal, closeModal } = useContactModal();

  return (
    <>
      <PageLayout>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00a6ff] to-[#0080cc] text-white py-12 md:py-24 overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 md:px-12">
          <motion.h1
            className="font-['Poppins:Bold',sans-serif] text-[32px] md:text-[48px] mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            Services & Specialities
          </motion.h1>
          <motion.p
            className="font-['Roboto:Regular',sans-serif] text-[18px] text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            At SaiSangama Healthcare, we provide comprehensive medical care across 26+ specialties with state-of-the-art facilities and experienced healthcare professionals.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto px-4 md:px-12 py-16">
        {/* Main Services */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[36px] text-[#1e1e1e] mb-4">Our Main Services</h2>
            <div className="bg-[#00a6ff] h-[3px] rounded-[11px] w-[80px] mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="text-[48px] mb-4">{service.icon}</div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1e1e1e] mb-3">
                  {service.name}
                </h3>
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-600 leading-[21px]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="bg-gradient-to-r from-[#00a6ff]/10 to-[#0080cc]/10 rounded-2xl p-12 mb-20"
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {stat.icon}
                <div className="font-['Poppins:Bold',sans-serif] text-[32px] text-[#1e1e1e]">{stat.value}</div>
                <div className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialties Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[36px] text-[#1e1e1e] mb-4">Medical Specialties</h2>
            <div className="bg-[#00a6ff] h-[3px] rounded-[11px] w-[80px] mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, i) => (
              <motion.div
                key={specialty.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,166,255,0.15)' }}
              >
                <Link
                  to={`/services/${specialty.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md block h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={specialty.imageUrl}
                      alt={specialty.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#1e1e1e] mb-3 group-hover:text-[#00a6ff] transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-600 leading-[21px] mb-4">
                      {specialty.description}
                    </p>
                    <div className="flex items-center text-[#00a6ff] font-['Poppins:Medium',sans-serif] text-[14px]">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 bg-[#00a6ff] rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Poppins:SemiBold',sans-serif] text-[32px] mb-4">Need Medical Assistance?</h2>
          <p className="font-['Roboto:Regular',sans-serif] text-[16px] mb-8 max-w-2xl mx-auto">
            Our team of experienced healthcare professionals is ready to help you. Contact us today to schedule an appointment or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={openModal}
              className="bg-white text-[#00a6ff] px-8 py-3 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            >
              Contact Us
            </motion.button>
            <motion.a
              href="tel:+918026262626"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            >
              Call: +91 80 2626 2626
            </motion.a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
    <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
