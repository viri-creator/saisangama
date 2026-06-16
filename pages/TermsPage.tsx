import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the services provided by SaiSangama Diagnostics & Health Care ("the Hospital", "we", "us", or "our"), including this website, appointment booking system, and any related services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: '2. Medical Services',
    content: `The information provided on this website is for general informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider regarding any medical condition or treatment.

    • Emergency situations: Call 108 (emergency services) or visit our Emergency Department immediately
    • Our doctors and medical staff are licensed practitioners regulated under applicable Indian law
    • Medical outcomes cannot be guaranteed; results may vary between patients
    • Second opinions are encouraged and respected`,
  },
  {
    title: '3. Appointment Booking',
    content: `When you book an appointment through our website or by phone:

    • Appointments are subject to availability and confirmation by our staff
    • We will contact you within 2 hours during business hours to confirm your appointment
    • Please arrive 15 minutes before your scheduled appointment time
    • Cancellations must be made at least 24 hours in advance to avoid a cancellation fee
    • We reserve the right to reschedule appointments due to medical emergencies or unforeseen circumstances`,
  },
  {
    title: '4. Patient Responsibilities',
    content: `As a patient, you agree to:

    • Provide accurate and complete medical history and personal information
    • Follow the treatment plans and instructions provided by our medical staff
    • Notify us of any allergies, medications, or pre-existing conditions
    • Pay all applicable fees and charges as per our billing schedule
    • Treat our staff and other patients with respect`,
  },
  {
    title: '5. Billing and Payments',
    content: `All fees for medical services are due at the time of service unless prior arrangements have been made. We accept:

    • Cash and UPI payments
    • Major credit and debit cards
    • Health insurance (subject to your policy's terms and our empanelment status)

    Itemised billing is available on request. For billing disputes, contact our billing department within 30 days of receiving your invoice.`,
  },
  {
    title: '6. Insurance and Third-Party Payers',
    content: `We work with several insurance providers, but coverage depends on your specific policy. We recommend:

    • Verifying coverage with your insurer before your appointment
    • Bringing your insurance card and a valid photo ID to every visit
    • Understanding that you are ultimately responsible for any charges not covered by your insurer

    We will assist with documentation required for insurance claims, but cannot guarantee payment decisions made by your insurer.`,
  },
  {
    title: '7. Website Use',
    content: `You agree not to:

    • Use our website for any unlawful purpose
    • Attempt to gain unauthorised access to any part of our systems
    • Transmit viruses, malware, or harmful code
    • Reproduce or distribute our content without written permission

    We reserve the right to suspend access to users who violate these terms.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the extent permitted by law, SaiSangama Healthcare shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.`,
  },
  {
    title: '9. Governing Law',
    content: `These Terms of Service are governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.`,
  },
  {
    title: '10. Changes to Terms',
    content: `We may update these Terms of Service at any time. Changes will be effective upon posting to our website. Your continued use of our services after any change constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.`,
  },
  {
    title: '11. Contact',
    content: `For questions about these Terms of Service, please contact us:

    SaiSangama Diagnostics & Health Care
    19, 29th A Cross Rd, 7th Block,
    Yediyur, Jayanagar,
    Bengaluru - 560070, Karnataka, India

    Email: healthcare@saisangamahealthcare.com
    Phone: +91 80 2626 2626`,
  },
];

export function TermsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00a6ff] to-[#0080cc] text-white py-20">
        <div className="max-w-[1150px] mx-auto px-12">
          <motion.div className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white/20 rounded-full p-3">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-white/70 uppercase tracking-widest">Legal</span>
          </motion.div>
          <motion.h1
            className="font-['Poppins:Bold',sans-serif] text-[52px] mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Terms of Service
          </motion.h1>
          <motion.p
            className="font-['Roboto:Regular',sans-serif] text-[16px] text-white/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          >
            Effective Date: January 1, 2024 &nbsp;·&nbsp; Last Updated: June 1, 2026
          </motion.p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-12 py-16">
        <motion.p
          className="font-['Roboto:Regular',sans-serif] text-[16px] text-gray-600 leading-[28px] mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          Please read these Terms of Service carefully before using SaiSangama Diagnostics & Health Care's services, website, or appointment booking system. These terms form a legally binding agreement between you and the Hospital.
        </motion.p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#1e1e1e] mb-3">{section.title}</h2>
              <div className="bg-gradient-to-r from-[#00b8db] to-[#155dfc] h-[2px] w-12 rounded-full mb-4" />
              <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-gray-600 leading-[28px] whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
