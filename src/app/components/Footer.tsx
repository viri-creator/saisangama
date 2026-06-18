import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <div className="bg-[#0d1b2a] w-full">
      {/* Main footer */}
      <div className="max-w-[1150px] mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          {/* Opening Hours */}
          <div>
            <h3 className="font-['Poppins:SemiBold',sans-serif] font-semibold text-[18px] text-white mb-4">
              Opening Hours
            </h3>
            <div className="bg-gradient-to-r from-[#00b8db] to-[#155dfc] h-[3px] rounded-full w-[48px] mb-6" />
            <div className="space-y-4">
              <div className="flex justify-between gap-4">
                <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#a0aec0]">All Day</span>
                <span className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#00b8db] whitespace-nowrap">24 / 7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Poppins:SemiBold',sans-serif] font-semibold text-[18px] text-white mb-4">
              Quick Links
            </h3>
            <div className="bg-gradient-to-r from-[#00b8db] to-[#155dfc] h-[3px] rounded-full w-[48px] mb-6" />
            <div className="flex flex-col gap-3">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Our Services', to: '/services' },
                { label: 'Find a Doctor', to: '/doctors' },
                { label: 'Book Appointment', to: '/book-appointment' },
                { label: 'Find Us', to: '/find-us' },
              ].map((item) => (
                <Link key={item.label} to={item.to} className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#a0aec0] hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Poppins:SemiBold',sans-serif] font-semibold text-[18px] text-white mb-4">
              Services
            </h3>
            <div className="bg-gradient-to-r from-[#00b8db] to-[#155dfc] h-[3px] rounded-full w-[48px] mb-6" />
            <div className="flex flex-col gap-3">
              <span className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#a0aec0]">Emergency Care</span>
              <span className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#a0aec0]">Primary Care</span>
              <Link to="/services/cardiology" className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#a0aec0] hover:text-white transition-colors">Cardiology</Link>
              <Link to="/services/pediatrics" className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#a0aec0] hover:text-white transition-colors">Pediatrics</Link>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-['Poppins:SemiBold',sans-serif] font-semibold text-[18px] text-white mb-4">
              Contact Us
            </h3>
            <div className="bg-gradient-to-r from-[#00b8db] to-[#155dfc] h-[3px] rounded-full w-[48px] mb-6" />
            <div className="flex flex-col gap-4">
              <Link to="/find-us" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                <div className="bg-[#1a2e45] rounded-full p-2 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#00b8db]" />
                </div>
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#a0aec0] leading-[22px]">
                  19, 29th A Cross Rd, 7th Block,<br />Yediyur, Jayanagar,<br />Bengaluru - 560070
                </p>
              </Link>
              <div className="flex items-center gap-3">
                <div className="bg-[#1a2e45] rounded-full p-2 shrink-0">
                  <Phone className="w-4 h-4 text-[#00b8db]" />
                </div>
                <a href="tel:+918026262626" className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#a0aec0] hover:text-white transition-colors">
                  +91 80 2626 2626
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#1a2e45] rounded-full p-2 shrink-0">
                  <Mail className="w-4 h-4 text-[#00b8db]" />
                </div>
                <a href="mailto:healthcare@saisangamahealthcare.com" className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#00b8db] hover:underline break-all">
                  healthcare@saisangamahealthcare.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#1a2e45] rounded-full p-2 shrink-0">
                  <Clock className="w-4 h-4 text-[#00b8db]" />
                </div>
                <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#a0aec0]">
                  24/7 Emergency Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a2e45]">
        <div className="max-w-[1150px] mx-auto px-4 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#6b7280] whitespace-nowrap">
            © 2026 SaiSangama Diagnostics & Health Care. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { icon: <Facebook className="w-4 h-4" />, href: 'https://www.facebook.com/SaisangamaHealthcare', label: 'Facebook' },
              { icon: <Instagram className="w-4 h-4" />, href: 'https://www.instagram.com/saisangamahealthcare/', label: 'Instagram' },
              { icon: <Linkedin className="w-4 h-4" />, href: 'https://in.linkedin.com/company/saisangamahealthcare', label: 'LinkedIn' },
              { icon: <Youtube className="w-4 h-4" />, href: 'https://www.youtube.com/@saisangamahealthcare', label: 'YouTube' },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                className="bg-[#1a2e45] hover:bg-[#00b8db] text-[#a0aec0] hover:text-white rounded-full p-2.5 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex gap-6 whitespace-nowrap">
            <Link to="/privacy" className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#6b7280] hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#6b7280] hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/find-us" className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#6b7280] hover:text-white transition-colors">Find Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
