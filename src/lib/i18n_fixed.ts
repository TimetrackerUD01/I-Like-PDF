export interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' }
]

export interface Translations {
  // Header & Navigation
  home: string
  convertPdf: string
  compressPdf: string
  mergePdf: string
  splitPdf: string
  tools: string
  help: string
  
  // Hero Section
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  getStarted: string
  
  // Features
  featuresTitle: string
  convertTitle: string
  convertDesc: string
  compressTitle: string
  compressDesc: string
  mergeTitle: string
  mergeDesc: string
  splitTitle: string
  splitDesc: string
  secureTitle: string
  secureDesc: string
  freeTitle: string
  freeDesc: string
  
  // Upload Section
  uploadTitle: string
  uploadSubtitle: string
  convertFiles: string
  compressFiles: string
  dragFiles: string
  or: string
  chooseFiles: string
  supportedFiles: string
  selectedFiles: string
  processing: string
  startConverting: string
  startCompressing: string
  
  // Conversion Options
  convertToWord: string
  convertToExcel: string
  convertToPowerPoint: string
  convertToImage: string
  convertToText: string
  
  // Messages
  processingCompleted: string
  processingError: string
  processingSuccessful: string
  processedFiles: string
  download: string
  noFileUploaded: string
  fileTooLarge: string
  fileNotFound: string
  invalidFilename: string
  downloadError: string
  
  // Footer
  quickLinks: string
  pdfTools: string
  aboutUs: string
  privacyPolicy: string
  termsOfService: string
  contact: string
  allRightsReserved: string
  
  // Additional Pages
  aboutTitle: string
  aboutContent: string
  privacyTitle: string
  privacyContent: string
  termsTitle: string
  termsContent: string
  contactTitle: string
  contactContent: string
  helpTitle: string
  helpContent: string
}

export const translations: Record<string, Translations> = {
  en: {
    // Header & Navigation
    home: 'Home',
    convertPdf: 'Convert PDF',
    compressPdf: 'Compress PDF',
    mergePdf: 'Merge PDF',
    splitPdf: 'Split PDF',
    tools: 'Tools',
    help: 'Help',
    
    // Hero Section
    heroTitle: 'I Love PDF',
    heroSubtitle: 'Free Online PDF Tools & File Converter',
    heroDescription: 'Convert, compress, merge, and split PDF files easily. All tools you need for your PDF files in one place.',
    getStarted: 'Get Started',
    
    // Features
    featuresTitle: 'Why Choose I Love PDF?',
    convertTitle: 'Convert PDF Files',
    convertDesc: 'Convert PDF to Word, Excel, PowerPoint, and more formats easily.',
    compressTitle: 'Compress PDF Size',  
    compressDesc: 'Reduce PDF file size while maintaining quality.',
    mergeTitle: 'Merge PDF Files',
    mergeDesc: 'Combine multiple PDF files into a single document.',
    splitTitle: 'Split PDF Pages',
    splitDesc: 'Extract specific pages or split PDF into multiple files.',
    secureTitle: '100% Secure',
    secureDesc: 'Your files are automatically deleted after processing.',
    freeTitle: 'Completely Free',
    freeDesc: 'All tools are free to use without registration.',
    
    // Upload Section
    uploadTitle: 'Upload Your Files',
    uploadSubtitle: 'Choose files or drag and drop to start processing',
    convertFiles: 'Convert Files',
    compressFiles: 'Compress Files',
    dragFiles: 'Drag files here',
    or: 'or',
    chooseFiles: 'Choose Files',
    supportedFiles: 'Supports PDF, Word, Images (Max 10MB per file)',
    selectedFiles: 'Selected Files',
    processing: 'Processing...',
    startConverting: 'Start Converting',
    startCompressing: 'Start Compressing',
    
    // Conversion Options
    convertToWord: 'Convert to Word (.docx)',
    convertToExcel: 'Convert to Excel (.xlsx)',
    convertToPowerPoint: 'Convert to PowerPoint (.pptx)',
    convertToImage: 'Convert to Image (.png)',
    convertToText: 'Convert to Text (.txt)',
    
    // Messages
    processingCompleted: 'Processing completed successfully!',
    processingError: 'An error occurred during processing',
    processingSuccessful: 'Processing successful',
    processedFiles: 'Processed Files',
    download: 'Download',
    noFileUploaded: 'No file uploaded',
    fileTooLarge: 'File is too large (max 10MB)',
    fileNotFound: 'File not found',
    invalidFilename: 'Invalid filename',
    downloadError: 'Download error occurred',
    
    // Footer
    quickLinks: 'Quick Links',
    pdfTools: 'PDF Tools',
    aboutUs: 'About Us',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    contact: 'Contact',
    allRightsReserved: 'All rights reserved.',
    
    // Additional Pages
    aboutTitle: 'About I Love PDF',
    aboutContent: 'I Love PDF is a comprehensive online platform for all your PDF needs. We provide free, secure, and easy-to-use tools for converting, compressing, merging, and splitting PDF files.',
    privacyTitle: 'Privacy Policy',
    privacyContent: 'Your privacy is important to us. All uploaded files are automatically deleted after processing to ensure your data security.',
    termsTitle: 'Terms of Service',
    termsContent: 'By using I Love PDF, you agree to our terms of service. Please use our tools responsibly and respect copyright laws.',
    contactTitle: 'Contact Us',
    contactContent: 'Have questions or suggestions? We\'d love to hear from you!',
    helpTitle: 'Help & FAQ',
    helpContent: 'Find answers to frequently asked questions about using I Love PDF tools.'
  },
  
  th: {
    // Header & Navigation
    home: 'หน้าแรก',
    convertPdf: 'แปลง PDF',
    compressPdf: 'บีบอัด PDF',
    mergePdf: 'รวม PDF',
    splitPdf: 'แยก PDF',
    tools: 'เครื่องมือ',
    help: 'ช่วยเหลือ',
    
    // Hero Section
    heroTitle: 'I Love PDF',
    heroSubtitle: 'เครื่องมือ PDF ออนไลน์ฟรี และตัวแปลงไฟล์',
    heroDescription: 'แปลง บีบอัด รวม และแยกไฟล์ PDF ได้อย่างง่ายดาย เครื่องมือทั้งหมดที่คุณต้องการสำหรับไฟล์ PDF ในที่เดียว',
    getStarted: 'เริ่มต้นใช้งาน',
    
    // Features
    featuresTitle: 'ทำไมต้องเลือก I Love PDF?',
    convertTitle: 'แปลงไฟล์ PDF',
    convertDesc: 'แปลง PDF เป็น Word, Excel, PowerPoint และรูปแบบอื่นๆ ได้อย่างง่ายดาย',
    compressTitle: 'บีบอัดขนาด PDF',
    compressDesc: 'ลดขนาดไฟล์ PDF โดยยังคงคุณภาพ',
    mergeTitle: 'รวมไฟล์ PDF',
    mergeDesc: 'รวมไฟล์ PDF หลายไฟล์เป็นเอกสารเดียว',
    splitTitle: 'แยกหน้า PDF',
    splitDesc: 'แยกหน้าที่ต้องการหรือแยก PDF เป็นหลายไฟล์',
    secureTitle: 'ปลอดภัย 100%',
    secureDesc: 'ไฟล์ของคุณจะถูกลบโดยอัตโนมัติหลังการประมวลผล',
    freeTitle: 'ฟรีทั้งหมด',
    freeDesc: 'เครื่องมือทั้งหมดใช้ฟรีโดยไม่ต้องสมัครสมาชิก',
    
    // Upload Section
    uploadTitle: 'อัพโหลดไฟล์ของคุณ',
    uploadSubtitle: 'เลือกไฟล์หรือลากและวางเพื่อเริ่มการประมวลผล',
    convertFiles: 'แปลงไฟล์',
    compressFiles: 'บีบอัดไฟล์',
    dragFiles: 'ลากไฟล์มาที่นี่',
    or: 'หรือ',
    chooseFiles: 'เลือกไฟล์',
    supportedFiles: 'รองรับ PDF, Word, รูปภาพ (สูงสุด 10MB ต่อไฟล์)',
    selectedFiles: 'ไฟล์ที่เลือก',
    processing: 'กำลังประมวลผล...',
    startConverting: 'เริ่มแปลงไฟล์',
    startCompressing: 'เริ่มบีบอัดไฟล์',
    
    // Conversion Options
    convertToWord: 'แปลงเป็น Word (.docx)',
    convertToExcel: 'แปลงเป็น Excel (.xlsx)',
    convertToPowerPoint: 'แปลงเป็น PowerPoint (.pptx)',
    convertToImage: 'แปลงเป็นรูปภาพ (.png)',
    convertToText: 'แปลงเป็นข้อความ (.txt)',
    
    // Messages
    processingCompleted: 'ประมวลผลเสร็จสิ้นแล้ว!',
    processingError: 'เกิดข้อผิดพลาดในการประมวลผล',
    processingSuccessful: 'ประมวลผลสำเร็จ',
    processedFiles: 'ไฟล์ที่ประมวลผลแล้ว',
    download: 'ดาวน์โหลด',
    noFileUploaded: 'ไม่มีไฟล์ที่อัพโหลด',
    fileTooLarge: 'ไฟล์ใหญ่เกินไป (สูงสุด 10MB)',
    fileNotFound: 'ไม่พบไฟล์',
    invalidFilename: 'ชื่อไฟล์ไม่ถูกต้อง',
    downloadError: 'เกิดข้อผิดพลาดในการดาวน์โหลด',
    
    // Footer
    quickLinks: 'ลิงก์ด่วน',
    pdfTools: 'เครื่องมือ PDF',
    aboutUs: 'เกี่ยวกับเรา',
    privacyPolicy: 'นโยบายความเป็นส่วนตัว',
    termsOfService: 'ข้อกำหนดการใช้งาน',
    contact: 'ติดต่อเรา',
    allRightsReserved: 'สงวนสิทธิ์ทั้งหมด',
    
    // Additional Pages
    aboutTitle: 'เกี่ยวกับ I Love PDF',
    aboutContent: 'I Love PDF เป็นแพลตฟอร์มออนไลน์ที่ครอบคลุมสำหรับความต้องการ PDF ทั้งหมดของคุณ เราให้บริการเครื่องมือฟรี ปลอดภัย และใช้งานง่ายสำหรับการแปลง บีบอัด รวม และแยกไฟล์ PDF',
    privacyTitle: 'นโยบายความเป็นส่วนตัว',
    privacyContent: 'ความเป็นส่วนตัวของคุณสำคัญสำหรับเรา ไฟล์ที่อัพโหลดทั้งหมดจะถูกลบโดยอัตโนมัติหลังการประมวลผลเพื่อความปลอดภัยของข้อมูลของคุณ',
    termsTitle: 'ข้อกำหนดการใช้งาน',
    termsContent: 'การใช้ I Love PDF หมายถึงคุณยอมรับข้อกำหนดการใช้งานของเรา โปรดใช้เครื่องมือของเราอย่างรับผิดชอบและเคารพกฎหมายลิขสิทธิ์',
    contactTitle: 'ติดต่อเรา',
    contactContent: 'มีคำถามหรือข้อเสนอแนะ? เรายินดีรับฟังจากคุณ!',
    helpTitle: 'ช่วยเหลือ & คำถามที่พบบ่อย',
    helpContent: 'ค้นหาคำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับการใช้เครื่องมือ I Love PDF'
  }
}

export function getTranslation(langCode: string): Translations {
  return translations[langCode] || translations['en']
}

export function getBrowserLanguage(): string {
  if (typeof window !== 'undefined') {
    const lang = navigator.language.split('-')[0]
    return languages.find(l => l.code === lang)?.code || 'en'
  }
  return 'en'
}
