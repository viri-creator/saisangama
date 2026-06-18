import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export function FindUsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00a6ff] to-[#0080cc] text-white py-12 md:py-20">
        <div className="max-w-[1150px] mx-auto px-4 md:px-12">
          <motion.div className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white/20 rounded-full p-3">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-white/70 uppercase tracking-widest">Location</span>
          </motion.div>
          <motion.h1
            className="font-['Poppins:Bold',sans-serif] text-[32px] md:text-[52px] mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Find Us
          </motion.h1>
          <motion.p
            className="font-['Roboto:Regular',sans-serif] text-[18px] text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're conveniently located in Jayanagar, South Bengaluru. Come visit us or get in touch.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          >
            <iframe
              title="SaiSangama Diagnostics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.196!2d77.5746378!3d12.9291695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15223e9baf91%3A0x3f59ac4e10bda276!2sSaiSangama+Multi-Speciality+Hospital%2C+Diagnostics+%26+Health+Care!5e0!3m2!1sen!2sin!4v1717000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Address */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#e8f7ff] rounded-full p-3 shrink-0">
                  <MapPin className="w-6 h-6 text-[#00a6ff]" />
                </div>
                <div>
                  <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">Our Address</h3>
                  <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-gray-600 leading-[26px]">
                    19, 29th A Cross Rd, 7th Block,<br />
                    Yediyur, Jayanagar,<br />
                    Bengaluru, Karnataka 560070
                  </p>
                  <a
                    href="https://www.google.com/maps/place/SaiSangama+Multi-Speciality+Hospital,+Diagnostics+%26+Health+Care/@12.9291695,77.5768265,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15223e9baf91:0x3f59ac4e10bda276!8m2!3d12.9291695!4d77.5768265!16s%2Fg%2F11syz2f3v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-[#00a6ff] font-['Poppins:SemiBold',sans-serif] text-[13px] hover:underline"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#e8f7ff] rounded-full p-3 shrink-0">
                  <Phone className="w-6 h-6 text-[#00a6ff]" />
                </div>
                <div>
                  <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">Phone</h3>
                  <a href="tel:+918026262626" className="font-['Roboto:Regular',sans-serif] text-[15px] text-gray-600 hover:text-[#00a6ff] transition-colors block">
                    +91 80 2626 2626
                  </a>
                  <a href="tel:+916366619620" className="font-['Roboto:Regular',sans-serif] text-[15px] text-gray-600 hover:text-[#00a6ff] transition-colors block mt-1">
                    +91 63666 19620
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#e8f7ff] rounded-full p-3 shrink-0">
                  <Mail className="w-6 h-6 text-[#00a6ff]" />
                </div>
                <div>
                  <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-2">Email</h3>
                  <a href="mailto:healthcare@saisangamahealthcare.com" className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#00a6ff] hover:underline break-all">
                    healthcare@saisangamahealthcare.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-[#e8f7ff] rounded-full p-3 shrink-0">
                  <Clock className="w-6 h-6 text-[#00a6ff]" />
                </div>
                <div className="w-full">
                  <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1e1e1e] mb-3">Opening Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-500">All Day</span>
                      <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#00a6ff]">24 / 7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="font-['Poppins:Bold',sans-serif] text-[22px] text-white mb-1">Chat with us on WhatsApp</h3>
            <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-white/80">Quick responses for appointments and queries</p>
          </div>
          <a
            href="https://wa.me/916366619620"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#128C7E] px-8 py-3 rounded-xl font-['Poppins:SemiBold',sans-serif] text-[15px] hover:bg-gray-100 transition-colors shrink-0"
          >
            +91 63666 19620
          </a>
        </motion.div>
      </div>
    </PageLayout>
  );
}
