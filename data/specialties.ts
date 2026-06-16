export interface Specialty {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  detailedInfo: string;
  services: string[];
}

export const specialties: Specialty[] = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic and treatment facilities',
    imageUrl: 'https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our Cardiology department provides comprehensive cardiac care with state-of-the-art facilities including ECG, TMT, ECHO, and advanced cardiac monitoring. Our experienced cardiologists diagnose and treat all types of heart conditions.',
    services: ['ECG & ECHO', 'TMT (Treadmill Test)', 'Cardiac Monitoring', 'Heart Disease Management', 'Preventive Cardiology']
  },
  {
    id: 'general-surgery',
    name: 'General & Laparoscopic Surgery',
    description: 'Advanced minimally invasive surgical procedures',
    imageUrl: 'https://images.unsplash.com/photo-1579154491915-611e891d3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our surgical department offers both traditional and minimally invasive laparoscopic procedures. We specialize in gallbladder surgery, hernia repair, appendectomy, and other general surgical procedures with faster recovery times.',
    services: ['Laparoscopic Surgery', 'Hernia Repair', 'Appendectomy', 'Gallbladder Surgery', 'General Surgical Procedures']
  },
  {
    id: 'pediatrics',
    name: 'Pediatric Services',
    description: 'Complete healthcare for children from infancy through adolescence',
    imageUrl: 'https://images.unsplash.com/photo-1632053002928-1919605ee6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our pediatric department provides comprehensive healthcare for children of all ages. We focus on preventive care, growth monitoring, vaccination programs, and treatment of childhood illnesses in a child-friendly environment.',
    services: ['Well-Child Checkups', 'Vaccination Programs', 'Growth Monitoring', 'Childhood Illness Treatment', 'Developmental Assessments']
  },
  {
    id: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    description: 'Comprehensive women\'s health and maternity care',
    imageUrl: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'We provide complete care for women at all stages of life, from routine gynecological care to pregnancy management and delivery. Our experienced team ensures safe and comfortable maternity care.',
    services: ['Prenatal Care', 'Normal & Cesarean Delivery', 'Gynecological Consultations', 'Family Planning', 'High-Risk Pregnancy Management']
  },
  {
    id: 'orthopedics',
    name: 'Orthopedic – Bone & Joint Surgery',
    description: 'Expert care for bone, joint, and musculoskeletal conditions',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our orthopedic department treats all bone and joint conditions including fractures, arthritis, sports injuries, and degenerative diseases. We offer both surgical and non-surgical treatment options.',
    services: ['Fracture Management', 'Joint Replacement', 'Arthroscopy', 'Sports Injury Treatment', 'Spine Surgery']
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Specialized care for nervous system disorders',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our neurology department provides expert diagnosis and treatment for conditions affecting the brain, spinal cord, and nervous system including stroke, epilepsy, Parkinson\'s disease, and headaches.',
    services: ['Stroke Management', 'Epilepsy Treatment', 'Headache & Migraine Care', 'Movement Disorders', 'Nerve Disorders']
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    description: 'Comprehensive digestive system care',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'We specialize in the diagnosis and treatment of digestive system disorders including stomach, liver, pancreas, and intestinal conditions. Advanced endoscopic procedures are available.',
    services: ['Endoscopy & Colonoscopy', 'Liver Disease Management', 'IBS Treatment', 'Acid Reflux Treatment', 'Pancreatic Disorders']
  },
  {
    id: 'nephrology',
    name: 'Nephrology',
    description: 'Expert kidney care and dialysis services',
    imageUrl: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our nephrology department provides comprehensive kidney care including management of kidney diseases, hypertension related to kidney problems, and dialysis services.',
    services: ['Kidney Disease Management', 'Dialysis Services', 'Hypertension Care', 'Kidney Stone Treatment', 'Chronic Kidney Disease']
  },
  {
    id: 'pulmonology',
    name: 'Pulmonology – Chest Medicine',
    description: 'Respiratory and lung disease management',
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'We provide comprehensive care for respiratory conditions including asthma, COPD, pneumonia, and other lung diseases. Advanced pulmonary function testing is available.',
    services: ['Asthma Management', 'COPD Treatment', 'Respiratory Infections', 'Pulmonary Function Tests', 'Sleep Apnea Management']
  },
  {
    id: 'ent',
    name: 'ENT',
    description: 'Ear, Nose, and Throat care',
    imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our ENT department treats all conditions related to ear, nose, throat, and related structures of the head and neck. We offer both medical and surgical treatments.',
    services: ['Ear Infections', 'Sinusitis Treatment', 'Tonsillectomy', 'Hearing Tests', 'Voice Disorders']
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Endocrinology',
    description: 'Skin care and hormonal disorder management',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'We provide comprehensive care for skin conditions and endocrine disorders including diabetes, thyroid problems, and hormonal imbalances.',
    services: ['Skin Disease Treatment', 'Diabetes Management', 'Thyroid Care', 'Hormonal Disorders', 'Cosmetic Dermatology']
  },
  {
    id: 'urology',
    name: 'Urology & Andrology',
    description: 'Urinary tract and male reproductive health',
    imageUrl: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our urology department treats conditions of the urinary tract and male reproductive system including kidney stones, prostate problems, and urinary infections.',
    services: ['Kidney Stone Treatment', 'Prostate Care', 'Urinary Infections', 'Male Infertility', 'Urological Surgery']
  },
  {
    id: 'critical-care',
    name: 'Critical Care',
    description: '24/7 intensive care unit services',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our ICU provides round-the-clock intensive care for critically ill patients with advanced monitoring and life support systems.',
    services: ['24/7 ICU Care', 'Ventilator Support', 'Cardiac Monitoring', 'Emergency Care', 'Post-Operative Care']
  },
  {
    id: 'anaesthesia',
    name: 'Anaesthesia',
    description: 'Safe and effective anesthesia services',
    imageUrl: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Our anesthesia team provides safe and effective pain management for surgical procedures and pain relief services.',
    services: ['General Anesthesia', 'Regional Anesthesia', 'Pain Management', 'Sedation Services', 'Post-Operative Pain Control']
  },
  {
    id: 'radiology',
    name: 'Radiology',
    description: 'Advanced imaging and diagnostic services',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'State-of-the-art imaging services including X-ray, ultrasound, CT scan, and other diagnostic imaging modalities.',
    services: ['X-Ray', 'Ultrasound', 'CT Scan', 'Diagnostic Imaging', 'Image-Guided Procedures']
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    description: 'Primary care and internal medicine',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Comprehensive primary healthcare for adults including diagnosis and treatment of common medical conditions.',
    services: ['Health Checkups', 'Chronic Disease Management', 'Preventive Care', 'Vaccination', 'Health Counseling']
  },
  {
    id: 'bariatric-surgery',
    name: 'Bariatric & Metabolic Surgery',
    description: 'Weight loss and metabolic surgery',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Advanced surgical solutions for obesity and metabolic disorders including gastric bypass and sleeve gastrectomy.',
    services: ['Gastric Bypass', 'Sleeve Gastrectomy', 'Metabolic Surgery', 'Weight Management', 'Nutritional Counseling']
  },
  {
    id: 'fetal-medicine',
    name: 'Fetal Medicine',
    description: 'Specialized care for high-risk pregnancies',
    imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Expert care for complex pregnancies with advanced fetal monitoring and intervention capabilities.',
    services: ['High-Risk Pregnancy Care', 'Fetal Monitoring', 'Prenatal Diagnosis', 'Genetic Counseling', 'Fetal Interventions']
  },
  {
    id: 'gastrointestinal-surgery',
    name: 'Gastrointestinal Surgery',
    description: 'Surgical treatment of digestive system disorders',
    imageUrl: 'https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwc3VyZ2VyeSUyMGFiZG9tZW4lMjBkb2N0b3J8ZW58MXx8fHwxNzgwNTU3NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedInfo: 'Specialized surgical care for conditions affecting the digestive tract including stomach, intestines, and colon.',
    services: ['Colorectal Surgery', 'Stomach Surgery', 'Intestinal Surgery', 'Cancer Surgery', 'Minimally Invasive Procedures']
  },
  {
    id: 'hepatobiliary',
    name: 'Hepatobiliary Sciences',
    description: 'Liver, gallbladder, and bile duct care',
    imageUrl: 'https://images.unsplash.com/photo-1574717025179-0b6d03d4d86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsaXZlciUyMG1lZGljYWwlMjBzY2FufGVufDF8fHx8MTc4MDU1NzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedInfo: 'Specialized care for liver, gallbladder, and bile duct disorders including advanced surgical interventions.',
    services: ['Liver Disease Treatment', 'Gallbladder Surgery', 'Bile Duct Procedures', 'Liver Transplant Evaluation', 'Hepatitis Management']
  },
  {
    id: 'medical-oncology',
    name: 'Medical Oncology',
    description: 'Comprehensive cancer care',
    imageUrl: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjB0cmVhdG1lbnQlMjBtZWRpY2FsfGVufDF8fHx8MTc4MDU1NzYyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    detailedInfo: 'Complete cancer care including diagnosis, chemotherapy, and supportive care services.',
    services: ['Cancer Diagnosis', 'Chemotherapy', 'Immunotherapy', 'Supportive Care', 'Cancer Screening']
  },
  {
    id: 'pediatric-cardiology',
    name: 'Pediatric Cardiology',
    description: 'Heart care for children',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Specialized cardiac care for children with congenital and acquired heart conditions.',
    services: ['Congenital Heart Disease', 'Pediatric ECHO', 'Heart Murmur Evaluation', 'Cardiac Monitoring', 'Intervention Procedures']
  },
  {
    id: 'physio-rehabilitation',
    name: 'Physio & Rehabilitation',
    description: 'Physical therapy and rehabilitation services',
    imageUrl: 'https://images.unsplash.com/photo-1645005513713-9e2b92a687d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3ODA1NTc2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedInfo: 'Comprehensive rehabilitation services to restore function and mobility after injury or surgery.',
    services: ['Physical Therapy', 'Occupational Therapy', 'Sports Rehabilitation', 'Post-Surgical Rehab', 'Pain Management']
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic & Reconstructive Surgery',
    description: 'Cosmetic and reconstructive procedures',
    imageUrl: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwc3VyZ2VyeSUyMGFiZG9tZW4lMjBkb2N0b3J8ZW58MXx8fHwxNzgwNTU3NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailedInfo: 'Expert plastic surgery services for both cosmetic enhancement and reconstructive needs.',
    services: ['Reconstructive Surgery', 'Cosmetic Procedures', 'Burn Treatment', 'Hand Surgery', 'Scar Revision']
  },
  {
    id: 'rheumatology',
    name: 'Rheumatology',
    description: 'Treatment for arthritis and autoimmune diseases',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Specialized care for arthritis, autoimmune diseases, and musculoskeletal disorders.',
    services: ['Arthritis Treatment', 'Autoimmune Disease Care', 'Joint Pain Management', 'Osteoporosis Treatment', 'Infusion Therapy']
  },
  {
    id: 'sports-medicine',
    name: 'Sports Medicine & Arthroscopy',
    description: 'Sports injury treatment and prevention',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Comprehensive sports medicine services including injury prevention, treatment, and arthroscopic surgery.',
    services: ['Sports Injury Treatment', 'Arthroscopic Surgery', 'Injury Prevention', 'Performance Enhancement', 'Rehabilitation']
  },
  {
    id: 'vascular-surgery',
    name: 'Vascular Surgery',
    description: 'Treatment of blood vessel disorders',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    detailedInfo: 'Specialized surgical care for arterial and venous conditions including varicose veins and peripheral arterial disease.',
    services: ['Varicose Vein Treatment', 'Angioplasty', 'Bypass Surgery', 'Carotid Surgery', 'Dialysis Access Surgery']
  }
];

export const mainServices = [
  {
    id: 'healthcare-center',
    name: 'Healthcare Center',
    description: 'We provide a patient-centered medical home for all patients',
    icon: '🏥'
  },
  {
    id: 'immediate-care',
    name: 'Immediate Care',
    description: 'Effective and affordable treatment for non-life threatening illnesses',
    icon: '⚡'
  },
  {
    id: 'diagnostic-center',
    name: 'Diagnostic Center',
    description: 'Wide array of reliable lab and diagnostic imaging services',
    icon: '🔬'
  },
  {
    id: 'pediatric-services',
    name: 'Pediatric Services',
    description: 'Helping you and your child stay healthy through every milestone',
    icon: '👶'
  },
  {
    id: 'family-birth-center',
    name: 'Family Birth Center',
    description: 'Care through delivery and post-natal treatment',
    icon: '🤱'
  },
  {
    id: 'home-care',
    name: 'Home Care',
    description: 'Doorstep medicare facility for selected chronic ailments',
    icon: '🏠'
  }
];
