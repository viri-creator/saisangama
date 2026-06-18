import { X, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="bg-gradient-to-br from-[#00a6ff] to-[#0080cc] p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="font-['Poppins:Bold',sans-serif] text-[32px] mb-2">Contact Us</h2>
          <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-white/90">
            Get in touch with SaiSangama Healthcare
          </p>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <div className="bg-[#00a6ff] p-3 rounded-full shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-gray-600 mb-1">
                Phone Number
              </p>
              <a
                href="tel:+918026262626"
                className="font-['Roboto:Medium',sans-serif] text-[18px] text-[#00a6ff] hover:underline block"
              >
                +91 80 2626 2626
              </a>
              <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-gray-500 mt-1">
                Available All Day 24/7
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <div className="bg-[#00a6ff] p-3 rounded-full shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-gray-600 mb-1">
                Email Address
              </p>
              <a
                href="mailto:healthcare@saisangamahealthcare.com"
                className="font-['Roboto:Medium',sans-serif] text-[16px] text-[#00a6ff] hover:underline block break-all"
              >
                healthcare@saisangamahealthcare.com
              </a>
            </div>
          </div>

          <Link to="/find-us" className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <div className="bg-[#00a6ff] p-3 rounded-full shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-gray-600 mb-1">
                Address
              </p>
              <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-[#00a6ff] leading-[21px]">
                19, 29th A Cross Rd, 7th Block,<br />
                Yediyur, Jayanagar, Bengaluru - 560070
              </p>
            </div>
          </Link>

          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full bg-[#00a6ff] text-white py-3 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-[#0080cc] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
}
