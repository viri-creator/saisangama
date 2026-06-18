import { motion } from 'motion/react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PageLayout } from '../components/PageLayout';
import { CheckCircle, Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react';

const EMAILJS_SERVICE_ID  = 'service_6mx86qg';
const EMAILJS_TEMPLATE_ID = 'template_2b0gj8o';
const EMAILJS_PUBLIC_KEY  = 'BqYp6f66a9ec1-PTe';

const departmentDoctors: Record<string, string[]> = {
  'Anaesthesia': ['Dr. Muralidhar Thandebhavi'],
  'Cardiology': ['Dr. Abhijit Vilas Kulkarni', 'Dr. Chiran Babu A'],
  'Critical Care': ['Dr. Shiva Prasad', 'Dr. Muralidhar TR'],
  'ENT': ['Dr. Vijay Bhaskar'],
  'Endocrinology': ['Dr. Sudeep Putta Manohar'],
  'Gastroenterology': ['Dr. Veerendra Sandur', 'Dr. Kasthuri'],
  'General Surgery': ['Dr. Sridutt Badari', 'Dr. Sandeep V.K', 'Dr. Ravi Kiran SJ'],
  'Laparoscopic Surgery': ['Dr. Ramesh T.S'],
  'Neurology': ['Dr. Praveen Kumar S'],
  'Neurosurgery': ['Dr. Abhay Sikaria', 'Dr. Sandeep V.K', 'Dr. Sridutt Badari'],
  'Orthopaedics': ['Dr. Deepthi K.N', 'Dr. Mohan Kumar G', 'Dr. Keshav Gowda', 'Dr. Vijay A. Kulkarni'],
  'Paediatrics': ['Dr. Vykunta Raju'],
  'Radiology': ['Dr. Chinmay Nagesh'],
  'Urology': ['Dr. Giridhar Venkatesh'],
};

const departments = Object.keys(departmentDoctors).sort();

const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl font-['Roboto:Regular',sans-serif] text-[15px] text-gray-700 focus:outline-none focus:border-[#00a6ff] focus:ring-2 focus:ring-[#00a6ff]/20 bg-white";
const labelClass = "font-['Poppins:SemiBold',sans-serif] text-[14px] text-gray-700 mb-2 block";

export function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [form, setForm] = useState({
    name: '', age: '', gender: '', phone: '', email: '',
    department: '', doctor: '', symptoms: '', date: '', time: '',
  });

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'department' ? { doctor: '' } : {}),
    }));
  };

  const availableDoctors = form.department ? departmentDoctors[form.department] || [] : [];
  const canSubmit = form.name && form.age && form.gender && form.phone && form.date && form.time;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSending(true);
    setSendError('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          patient_name:  form.name,
          patient_age:   form.age,
          gender:        form.gender,
          patient_phone: form.phone,
          patient_email: form.email || 'Not provided',
          specialty:     form.department || 'Not specified',
          doctor:        form.doctor || 'No preference',
          notes:         form.symptoms || 'None',
          date:          form.date,
          time:          form.time,
          to_email:      'saisangamahealthcare@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setSendError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00a6ff] to-[#0080cc] text-white py-20">
        <div className="max-w-[1150px] mx-auto px-12">
          <motion.h1
            className="font-['Poppins:Bold',sans-serif] text-[52px] mb-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            Book an Appointment
          </motion.h1>
          <motion.p
            className="font-['Roboto:Regular',sans-serif] text-[18px] text-white/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fill in your details and our team will call or email you with a confirmed slot after checking with the doctor.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto px-12 py-16">
        <div className="grid grid-cols-3 gap-12 items-start">

          {/* Form */}
          <div className="col-span-2">
            {submitted ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="font-['Poppins:Bold',sans-serif] text-[32px] text-[#1e1e1e] mb-4">Request Received!</h2>
                <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-gray-600 max-w-lg mx-auto mb-2">
                  Thank you, <strong>{form.name}</strong>! We've received your appointment request.
                </p>
                <p className="font-['Roboto:Regular',sans-serif] text-[16px] text-gray-600 max-w-lg mx-auto mb-8">
                  Our hospital staff will <strong>call or email you</strong> with a confirmed slot after checking with the doctor. Please keep your phone accessible.
                </p>
                <motion.button
                  onClick={() => { setSubmitted(false); setForm({ name: '', age: '', gender: '', phone: '', email: '', department: '', doctor: '', symptoms: '', date: '', time: '' }); }}
                  className="bg-[#00a6ff] text-white px-8 py-3 rounded-lg font-['Poppins:SemiBold',sans-serif] text-[16px] hover:bg-[#0080cc] transition-colors"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                >
                  Book Another Appointment
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-6">

                  {/* Name */}
                  <div className="col-span-2">
                    <label className={labelClass}>Name <span className="text-red-400">*</span></label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className={labelClass}>Age <span className="text-red-400">*</span></label>
                    <input
                      name="age" value={form.age} onChange={handleChange} required
                      placeholder="Your age" type="number" min="1" max="120"
                      className={inputClass}
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className={labelClass}>Gender <span className="text-red-400">*</span></label>
                    <select name="gender" value={form.gender} onChange={handleChange} required className={inputClass}>
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className={labelClass}>Mobile Number <span className="text-red-400">*</span></label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="+91 XXXXX XXXXX" type="tel"
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" type="email"
                      className={inputClass}
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label className={labelClass}>Department <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <select name="department" value={form.department} onChange={handleChange} className={inputClass}>
                      <option value="">Select department</option>
                      {departments.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  {/* Doctor */}
                  <div>
                    <label className={labelClass}>Doctor <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <select name="doctor" value={form.doctor} onChange={handleChange} className={inputClass} disabled={!form.department}>
                      <option value="">No preference</option>
                      {availableDoctors.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>

                  {/* Symptoms */}
                  <div className="col-span-2">
                    <label className={labelClass}>Symptoms / Reason for Visit</label>
                    <textarea
                      name="symptoms" value={form.symptoms} onChange={handleChange}
                      placeholder="Briefly describe your symptoms or reason for visit..."
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className={labelClass}>Preferred Date <span className="text-red-400">*</span></label>
                    <input
                      name="date" value={form.date} onChange={handleChange} required
                      type="date" min={today}
                      className={inputClass}
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className={labelClass}>Preferred Time <span className="text-red-400">*</span></label>
                    <select name="time" value={form.time} onChange={handleChange} required className={inputClass}>
                      <option value="">Select preference</option>
                      <option value="Morning (8 AM – 12 PM)">Morning (8 AM – 12 PM)</option>
                      <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
                      <option value="Evening (4 PM – 8 PM)">Evening (4 PM – 8 PM)</option>
                      <option value="No Preference">No Preference</option>
                    </select>
                  </div>

                </div>

                {sendError && (
                  <p className="mt-6 text-red-500 font-['Roboto:Regular',sans-serif] text-[14px] bg-red-50 border border-red-200 rounded-xl px-4 py-3">{sendError}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={!canSubmit || sending}
                  className="mt-8 w-full bg-gradient-to-r from-[#00b8db] to-[#155dfc] text-white py-4 rounded-xl font-['Poppins:SemiBold',sans-serif] text-[16px] hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={canSubmit && !sending ? { scale: 1.02 } : {}}
                  whileTap={canSubmit && !sending ? { scale: 0.98 } : {}}
                >
                  {sending ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : 'Submit Appointment Request'}
                </motion.button>

                <p className="mt-4 text-center font-['Roboto:Regular',sans-serif] text-[13px] text-gray-400">
                  Our staff will call or email you with a confirmed slot after checking with the doctor.
                </p>
              </motion.form>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <motion.div
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden sticky top-24"
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-[#00a6ff] to-[#0080cc] p-6 text-white">
                <h3 className="font-['Poppins:Bold',sans-serif] text-[20px] mb-1">Need Help?</h3>
                <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-white/80">Call us to book over the phone</p>
              </div>
              <div className="p-6 space-y-5">
                <a href="tel:+918026262626" className="flex items-center gap-3 hover:text-[#00a6ff] transition-colors group">
                  <div className="bg-[#00a6ff]/10 rounded-full p-2.5 group-hover:bg-[#00a6ff]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#00a6ff]" />
                  </div>
                  <div>
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-gray-500">Phone</p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[15px] text-[#1e1e1e]">+91 80 2626 2626</p>
                  </div>
                </a>
                <a href="mailto:healthcare@saisangamahealthcare.com" className="flex items-center gap-3 hover:text-[#00a6ff] transition-colors group">
                  <div className="bg-[#00a6ff]/10 rounded-full p-2.5 group-hover:bg-[#00a6ff]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#00a6ff]" />
                  </div>
                  <div>
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-gray-500">Email</p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#00a6ff] break-all">healthcare@saisangamahealthcare.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="bg-[#00a6ff]/10 rounded-full p-2.5">
                    <MapPin className="w-5 h-5 text-[#00a6ff]" />
                  </div>
                  <div>
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-gray-500">Address</p>
                    <p className="font-['Roboto:Regular',sans-serif] text-[14px] text-gray-700 leading-[20px]">19, 29th A Cross Rd, 7th Block,<br />Yediyur, Jayanagar, Bengaluru - 560070</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#00a6ff]/10 rounded-full p-2.5">
                      <Clock className="w-5 h-5 text-[#00a6ff]" />
                    </div>
                    <div>
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[13px] text-gray-500">Opening Hours</p>
                      <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#00a6ff]">All Day 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
