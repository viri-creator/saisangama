import { motion } from 'motion/react';
import { PageLayout } from '../components/PageLayout';
import { Shield } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you book an appointment, register as a patient, or contact us. This includes:

    • Personal identification: name, date of birth, gender, address
    • Contact details: phone number, email address
    • Medical information: health history, symptoms, diagnoses, treatment records
    • Insurance and billing information
    • Information collected automatically when you use our website (IP address, browser type, pages visited)`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

    • Provide, maintain, and improve our healthcare services
    • Schedule and manage your appointments
    • Process payments and insurance claims
    • Communicate with you about your care, test results, and appointments
    • Send appointment reminders and follow-up care instructions
    • Comply with legal and regulatory obligations
    • Improve the quality and safety of our services`,
  },
  {
    title: '3. Sharing of Information',
    content: `We may share your personal and medical information with:

    • Healthcare providers involved in your treatment and care coordination
    • Insurance companies and third-party payers for billing purposes
    • Laboratories and diagnostic facilities for test processing
    • Government authorities as required by applicable law
    • Service providers who assist us in hospital operations, subject to confidentiality agreements

    We do not sell your personal information to third parties.`,
  },
  {
    title: '4. Data Security',
    content: `We implement appropriate technical and organisational measures to protect your personal and medical information against unauthorised access, disclosure, alteration, or destruction. These measures include:

    • Encrypted storage of medical records
    • Access controls limiting data access to authorised personnel
    • Regular security audits and staff training
    • Physical security at our premises

    While we strive to protect your information, no method of transmission or storage is 100% secure.`,
  },
  {
    title: '5. Your Rights',
    content: `You have the right to:

    • Access your personal and medical records
    • Request corrections to inaccurate information
    • Request restrictions on the use of your information in certain circumstances
    • Receive a copy of your records in a portable format
    • Lodge a complaint with the relevant data protection authority

    To exercise these rights, please contact our Privacy Officer at healthcare@saisangamahealthcare.com.`,
  },
  {
    title: '6. Retention of Data',
    content: `We retain your medical records and personal information for the period required by applicable Indian laws and medical regulations, and thereafter as necessary for legal, audit, or safety purposes. Patient medical records are generally retained for a minimum of 7 years from the date of last treatment.`,
  },
  {
    title: '7. Cookies and Website Data',
    content: `Our website uses cookies and similar technologies to improve your browsing experience, analyse website traffic, and personalise content. You can control cookie settings through your browser preferences. Disabling cookies may limit some website functionality.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of material changes by posting the updated policy on our website with a revised effective date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: '9. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

    SaiSangama Diagnostics & Health Care
    19, 29th A Cross Rd, 7th Block,
    Yediyur, Jayanagar,
    Bengaluru - 560070, Karnataka, India

    Email: healthcare@saisangamahealthcare.com
    Phone: +91 80 2626 2626`,
  },
];

export function PrivacyPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00a6ff] to-[#0080cc] text-white py-12 md:py-20">
        <div className="max-w-[1150px] mx-auto px-4 md:px-12">
          <motion.div className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="bg-white/20 rounded-full p-3">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <span className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-white/70 uppercase tracking-widest">Legal</span>
          </motion.div>
          <motion.h1
            className="font-['Poppins:Bold',sans-serif] text-[32px] md:text-[52px] mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="font-['Roboto:Regular',sans-serif] text-[16px] text-white/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          >
            Effective Date: January 1, 2024 &nbsp;·&nbsp; Last Updated: June 1, 2026
          </motion.p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 md:px-12 py-16">
        <motion.p
          className="font-['Roboto:Regular',sans-serif] text-[16px] text-gray-600 leading-[28px] mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          SaiSangama Diagnostics & Health Care ("we", "our", or "us") is committed to protecting your privacy and the confidentiality of your personal and medical information. This Privacy Policy explains how we collect, use, share, and safeguard your information when you visit our hospital or use our services.
        </motion.p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
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
