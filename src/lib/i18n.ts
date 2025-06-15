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
    heroTitle: 'I Like PDF ❤️',
    heroSubtitle: 'Free Online PDF Tools & File Converter',
    heroDescription: 'Convert, compress, merge, and split PDF files easily. All tools you need for your PDF files in one place.',
    getStarted: 'Get Started',
    
    // Features
    featuresTitle: 'Why Choose I Like PDF? ❤️',
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
    aboutTitle: 'About I Like PDF ❤️',
    aboutContent: 'I Like PDF is a comprehensive online platform for all your PDF needs. We provide free, secure, and easy-to-use tools for converting, compressing, merging, and splitting PDF files.',
    privacyTitle: 'Privacy Policy',
    privacyContent: 'Your privacy is important to us. All uploaded files are automatically deleted after processing to ensure your data security.',
    termsTitle: 'Terms of Service',
    termsContent: 'By using I Like PDF, you agree to our terms of service. Please use our tools responsibly and respect copyright laws.',
    contactTitle: 'Contact Us',
    contactContent: 'Have questions or suggestions? We\'d love to hear from you!',
    helpTitle: 'Help & FAQ',
    helpContent: 'Find answers to frequently asked questions about using I Like PDF tools.'
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
    heroTitle: 'I Like PDF ❤️',
    heroSubtitle: 'เครื่องมือ PDF ออนไลน์ฟรี และตัวแปลงไฟล์',
    heroDescription: 'แปลง บีบอัด รวม และแยกไฟล์ PDF ได้อย่างง่ายดาย เครื่องมือทั้งหมดที่คุณต้องการสำหรับไฟล์ PDF ในที่เดียว',
    getStarted: 'เริ่มต้นใช้งาน',
    
    // Features
    featuresTitle: 'ทำไมต้องเลือก I Like PDF? ❤️',
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
    helpContent: 'ค้นหาคำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับการใช้เครื่องมือ I Love PDF'  },

  zh: {
    // Header & Navigation
    home: '首页',
    convertPdf: '转换PDF',
    compressPdf: '压缩PDF',
    mergePdf: '合并PDF',
    splitPdf: '拆分PDF',
    tools: '工具',
    help: '帮助',
      // Hero Section
    heroTitle: 'I Like PDF ❤️',
    heroSubtitle: '免费在线PDF工具和文件转换器',
    heroDescription: '轻松转换、压缩、合并和拆分PDF文件。满足您所有PDF需求的完整解决方案。',
    getStarted: '开始使用',
    
    // Features
    featuresTitle: '强大的PDF工具',
    convertTitle: 'PDF转换',
    convertDesc: '将PDF转换为Word、Excel、PowerPoint和图像格式',
    compressTitle: 'PDF压缩',
    compressDesc: '减少PDF文件大小而不损失质量',
    mergeTitle: 'PDF合并',
    mergeDesc: '将多个PDF文件合并为一个文档',
    splitTitle: 'PDF拆分',
    splitDesc: '将大型PDF拆分为单独的页面或章节',
    secureTitle: '安全可靠',
    secureDesc: '您的文件经过安全加密处理',
    freeTitle: '完全免费',
    freeDesc: '无需注册，所有工具完全免费使用',
    
    // Upload Section
    uploadTitle: '选择PDF文件',
    uploadSubtitle: '拖放或点击选择要处理的文件',
    convertFiles: '转换文件',
    compressFiles: '压缩文件',
    dragFiles: '拖放文件到此处',
    or: '或',
    chooseFiles: '选择文件',
    supportedFiles: '支持的文件：PDF（最大10MB）',
    selectedFiles: '已选择的文件',
    processing: '处理中...',
    startConverting: '开始转换',
    startCompressing: '开始压缩',
    
    // Conversion Options
    convertToWord: '转换为Word (.docx)',
    convertToExcel: '转换为Excel (.xlsx)',
    convertToPowerPoint: '转换为PowerPoint (.pptx)',
    convertToImage: '转换为图像 (.png)',
    convertToText: '转换为文本 (.txt)',
    
    // Messages
    processingCompleted: '处理成功完成！',
    processingError: '处理过程中发生错误',
    noFileUploaded: '未上传文件',
    fileTooLarge: '文件过大（最大10MB）',
    fileNotFound: '文件未找到',
    invalidFilename: '无效的文件名',
    downloadError: '下载发生错误',
    
    // Footer
    quickLinks: '快速链接',
    pdfTools: 'PDF工具',
    aboutUs: '关于我们',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    contact: '联系我们',
    allRightsReserved: '版权所有。',
    
    // Additional Pages
    aboutTitle: '关于I Love PDF',
    aboutContent: 'I Love PDF是满足您所有PDF需求的综合在线平台。我们提供免费、安全且易于使用的工具来转换、压缩、合并和拆分PDF文件。',
    privacyTitle: '隐私政策',
    privacyContent: '您的隐私对我们很重要。所有上传的文件在处理后会自动删除，以确保您的数据安全。',
    termsTitle: '服务条款',
    termsContent: '使用I Love PDF即表示您同意我们的服务条款。请负责任地使用我们的工具并尊重版权法。',
    contactTitle: '联系我们',
    contactContent: '有问题或建议？我们很乐意听取您的意见！',
    helpTitle: '帮助和常见问题',
    helpContent: '查找有关使用I Love PDF工具的常见问题的答案。'
  },

  ja: {
    // Header & Navigation
    home: 'ホーム',
    convertPdf: 'PDF変換',
    compressPdf: 'PDF圧縮',
    mergePdf: 'PDF結合',
    splitPdf: 'PDF分割',
    tools: 'ツール',
    help: 'ヘルプ',
      // Hero Section
    heroTitle: 'I Like PDF ❤️',
    heroSubtitle: '無料オンラインPDFツールとファイルコンバーター',
    heroDescription: 'PDFファイルを簡単に変換、圧縮、結合、分割できます。すべてのPDFニーズに対応する完全なソリューション。',
    getStarted: '使い始める',
    
    // Features
    featuresTitle: '強力なPDFツール',
    convertTitle: 'PDF変換',
    convertDesc: 'PDFをWord、Excel、PowerPoint、画像形式に変換',
    compressTitle: 'PDF圧縮',
    compressDesc: '品質を損なうことなくPDFファイルサイズを削減',
    mergeTitle: 'PDF結合',
    mergeDesc: '複数のPDFファイルを1つの文書に結合',
    splitTitle: 'PDF分割',
    splitDesc: '大きなPDFを個別のページやセクションに分割',
    secureTitle: '安全で信頼性',
    secureDesc: 'ファイルは安全に暗号化して処理されます',
    freeTitle: '完全無料',
    freeDesc: '登録不要、すべてのツールが完全無料',
    
    // Upload Section
    uploadTitle: 'PDFファイルを選択',
    uploadSubtitle: 'ドラッグ＆ドロップまたはクリックして処理するファイルを選択',
    convertFiles: 'ファイル変換',
    compressFiles: 'ファイル圧縮',
    dragFiles: 'ファイルをここにドラッグ',
    or: 'または',
    chooseFiles: 'ファイルを選択',
    supportedFiles: 'サポートファイル：PDF（最大10MB）',
    selectedFiles: '選択されたファイル',
    processing: '処理中...',
    startConverting: '変換開始',
    startCompressing: '圧縮開始',
    
    // Conversion Options
    convertToWord: 'Wordに変換 (.docx)',
    convertToExcel: 'Excelに変換 (.xlsx)',
    convertToPowerPoint: 'PowerPointに変換 (.pptx)',
    convertToImage: '画像に変換 (.png)',
    convertToText: 'テキストに変換 (.txt)',
    
    // Messages
    processingCompleted: '処理が正常に完了しました！',
    processingError: '処理中にエラーが発生しました',
    noFileUploaded: 'ファイルがアップロードされていません',
    fileTooLarge: 'ファイルが大きすぎます（最大10MB）',
    fileNotFound: 'ファイルが見つかりません',
    invalidFilename: '無効なファイル名',
    downloadError: 'ダウンロードエラーが発生しました',
    
    // Footer
    quickLinks: 'クイックリンク',
    pdfTools: 'PDFツール',
    aboutUs: '私たちについて',
    privacyPolicy: 'プライバシーポリシー',
    termsOfService: '利用規約',
    contact: 'お問い合わせ',
    allRightsReserved: '全著作権所有。',
    
    // Additional Pages
    aboutTitle: 'I Love PDFについて',
    aboutContent: 'I Love PDFは、すべてのPDFニーズに対応する包括的なオンラインプラットフォームです。PDFファイルの変換、圧縮、結合、分割のための無料で安全で使いやすいツールを提供しています。',
    privacyTitle: 'プライバシーポリシー',
    privacyContent: 'お客様のプライバシーは私たちにとって重要です。アップロードされたすべてのファイルは、データのセキュリティを確保するために処理後に自動的に削除されます。',
    termsTitle: '利用規約',
    termsContent: 'I Love PDFを使用することで、当社の利用規約に同意したものとみなされます。ツールを責任を持って使用し、著作権法を尊重してください。',
    contactTitle: 'お問い合わせ',
    contactContent: 'ご質問やご提案がございますか？ぜひお聞かせください！',
    helpTitle: 'ヘルプとよくある質問',
    helpContent: 'I Love PDFツールの使用に関するよくある質問の回答を見つけてください。'  },

  ko: {
    // Header & Navigation
    home: '홈',
    convertPdf: 'PDF 변환',
    compressPdf: 'PDF 압축',
    mergePdf: 'PDF 결합',
    splitPdf: 'PDF 분할',
    tools: '도구',
    help: '도움말',
      // Hero Section
    heroTitle: 'I Like PDF ❤️',
    heroSubtitle: '무료 온라인 PDF 도구 및 파일 변환기',
    heroDescription: 'PDF 파일을 쉽게 변환, 압축, 결합 및 분할하세요. 모든 PDF 요구 사항을 위한 완전한 솔루션입니다.',
    getStarted: '시작하기',
    
    // Features
    featuresTitle: '강력한 PDF 도구',
    convertTitle: 'PDF 변환',
    convertDesc: 'PDF를 Word, Excel, PowerPoint 및 이미지 형식으로 변환',
    compressTitle: 'PDF 압축',
    compressDesc: '품질 손실 없이 PDF 파일 크기 줄이기',
    mergeTitle: 'PDF 결합',
    mergeDesc: '여러 PDF 파일을 하나의 문서로 결합',
    splitTitle: 'PDF 분할',
    splitDesc: '큰 PDF를 개별 페이지나 섹션으로 분할',
    secureTitle: '안전하고 신뢰할 수 있음',
    secureDesc: '파일이 안전하게 암호화되어 처리됩니다',
    freeTitle: '완전 무료',
    freeDesc: '등록 없이 모든 도구를 완전 무료로 사용',
    
    // Upload Section
    uploadTitle: 'PDF 파일 선택',
    uploadSubtitle: '드래그 앤 드롭하거나 클릭하여 처리할 파일 선택',
    convertFiles: '파일 변환',
    compressFiles: '파일 압축',
    dragFiles: '파일을 여기에 드래그',
    or: '또는',
    chooseFiles: '파일 선택',
    supportedFiles: '지원 파일: PDF (최대 10MB)',
    selectedFiles: '선택된 파일',
    processing: '처리 중...',
    startConverting: '변환 시작',
    startCompressing: '압축 시작',
    
    // Conversion Options
    convertToWord: 'Word로 변환 (.docx)',
    convertToExcel: 'Excel로 변환 (.xlsx)',
    convertToPowerPoint: 'PowerPoint로 변환 (.pptx)',
    convertToImage: '이미지로 변환 (.png)',
    convertToText: '텍스트로 변환 (.txt)',
    
    // Messages
    processingCompleted: '처리가 성공적으로 완료되었습니다!',
    processingError: '처리 중 오류가 발생했습니다',
    noFileUploaded: '파일이 업로드되지 않았습니다',
    fileTooLarge: '파일이 너무 큽니다 (최대 10MB)',
    fileNotFound: '파일을 찾을 수 없습니다',
    invalidFilename: '잘못된 파일명',
    downloadError: '다운로드 오류가 발생했습니다',
    
    // Footer
    quickLinks: '빠른 링크',
    pdfTools: 'PDF 도구',
    aboutUs: '회사 소개',
    privacyPolicy: '개인정보 보호정책',
    termsOfService: '서비스 약관',
    contact: '문의하기',
    allRightsReserved: '모든 권리 보유.',
    
    // Additional Pages
    aboutTitle: 'I Love PDF 소개',
    aboutContent: 'I Love PDF는 모든 PDF 요구 사항을 위한 포괄적인 온라인 플랫폼입니다. PDF 파일 변환, 압축, 결합 및 분할을 위한 무료, 안전하고 사용하기 쉬운 도구를 제공합니다.',
    privacyTitle: '개인정보 보호정책',
    privacyContent: '귀하의 개인정보는 저희에게 중요합니다. 업로드된 모든 파일은 데이터 보안을 보장하기 위해 처리 후 자동으로 삭제됩니다.',
    termsTitle: '서비스 약관',
    termsContent: 'I Love PDF를 사용함으로써 귀하는 저희의 서비스 약관에 동의하게 됩니다. 저희 도구를 책임감 있게 사용하고 저작권법을 존중해 주십시오.',
    contactTitle: '문의하기',
    contactContent: '질문이나 제안이 있으신가요? 저희는 귀하의 의견을 듣고 싶습니다!',
    helpTitle: '도움말 및 자주 묻는 질문',
    helpContent: 'I Love PDF 도구 사용에 관한 자주 묻는 질문의 답변을 찾아보세요.'
  },

  es: {
    // Header & Navigation
    home: 'Inicio',
    convertPdf: 'Convertir PDF',
    compressPdf: 'Comprimir PDF',
    mergePdf: 'Combinar PDF',
    splitPdf: 'Dividir PDF',
    tools: 'Herramientas',
    help: 'Ayuda',
      // Hero Section
    heroTitle: 'I Like PDF ❤️',
    heroSubtitle: 'Herramientas PDF gratuitas en línea y convertidor de archivos',
    heroDescription: 'Convierte, comprime, combina y divide archivos PDF con facilidad. La solución completa para todas tus necesidades de PDF.',
    getStarted: 'Comenzar',
    
    // Features
    featuresTitle: 'Herramientas PDF Potentes',
    convertTitle: 'Conversión de PDF',
    convertDesc: 'Convierte PDF a Word, Excel, PowerPoint y formatos de imagen',
    compressTitle: 'Compresión de PDF',
    compressDesc: 'Reduce el tamaño del archivo PDF sin perder calidad',
    mergeTitle: 'Combinar PDF',
    mergeDesc: 'Combina múltiples archivos PDF en un solo documento',
    splitTitle: 'Dividir PDF',
    splitDesc: 'Divide PDFs grandes en páginas o secciones individuales',
    secureTitle: 'Seguro y Confiable',
    secureDesc: 'Tus archivos se procesan de forma segura y encriptada',
    freeTitle: 'Completamente Gratis',
    freeDesc: 'Sin registro, todas las herramientas completamente gratuitas',
    
    // Upload Section
    uploadTitle: 'Seleccionar Archivo PDF',
    uploadSubtitle: 'Arrastra y suelta o haz clic para seleccionar archivos a procesar',
    convertFiles: 'Convertir Archivos',
    compressFiles: 'Comprimir Archivos',
    dragFiles: 'Arrastra archivos aquí',
    or: 'o',
    chooseFiles: 'Elegir Archivos',
    supportedFiles: 'Archivos soportados: PDF (máximo 10MB)',
    selectedFiles: 'Archivos Seleccionados',
    processing: 'Procesando...',
    startConverting: 'Comenzar Conversión',
    startCompressing: 'Comenzar Compresión',
    
    // Conversion Options
    convertToWord: 'Convertir a Word (.docx)',
    convertToExcel: 'Convertir a Excel (.xlsx)',
    convertToPowerPoint: 'Convertir a PowerPoint (.pptx)',
    convertToImage: 'Convertir a Imagen (.png)',
    convertToText: 'Convertir a Texto (.txt)',
    
    // Messages
    processingCompleted: '¡Procesamiento completado exitosamente!',
    processingError: 'Ocurrió un error durante el procesamiento',
    noFileUploaded: 'No se subió ningún archivo',
    fileTooLarge: 'El archivo es demasiado grande (máximo 10MB)',
    fileNotFound: 'Archivo no encontrado',
    invalidFilename: 'Nombre de archivo inválido',
    downloadError: 'Ocurrió un error de descarga',
    
    // Footer
    quickLinks: 'Enlaces Rápidos',
    pdfTools: 'Herramientas PDF',
    aboutUs: 'Acerca de Nosotros',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    contact: 'Contacto',
    allRightsReserved: 'Todos los derechos reservados.',
    
    // Additional Pages
    aboutTitle: 'Acerca de I Love PDF',
    aboutContent: 'I Love PDF es una plataforma en línea integral para todas tus necesidades de PDF. Proporcionamos herramientas gratuitas, seguras y fáciles de usar para convertir, comprimir, combinar y dividir archivos PDF.',
    privacyTitle: 'Política de Privacidad',
    privacyContent: 'Tu privacidad es importante para nosotros. Todos los archivos subidos se eliminan automáticamente después del procesamiento para garantizar la seguridad de tus datos.',
    termsTitle: 'Términos de Servicio',
    termsContent: 'Al usar I Love PDF, aceptas nuestros términos de servicio. Por favor, usa nuestras herramientas de manera responsable y respeta las leyes de derechos de autor.',
    contactTitle: 'Contáctanos',
    contactContent: '¿Tienes preguntas o sugerencias? ¡Nos encantaría escucharte!',
    helpTitle: 'Ayuda y Preguntas Frecuentes',
    helpContent: 'Encuentra respuestas a las preguntas frecuentes sobre el uso de las herramientas I Love PDF.'
  },

  fr: {
    // Header & Navigation
    home: 'Accueil',
    convertPdf: 'Convertir PDF',
    compressPdf: 'Compresser PDF',
    mergePdf: 'Fusionner PDF',
    splitPdf: 'Diviser PDF',
    tools: 'Outils',
    help: 'Aide',
      // Hero Section
    heroTitle: 'I Like PDF ❤️',
    heroSubtitle: 'Outils PDF gratuits en ligne et convertisseur de fichiers',
    heroDescription: 'Convertissez, compressez, fusionnez et divisez facilement les fichiers PDF. La solution complète pour tous vos besoins PDF.',
    getStarted: 'Commencer',
    
    // Features
    featuresTitle: 'Outils PDF Puissants',
    convertTitle: 'Conversion PDF',
    convertDesc: 'Convertissez PDF en Word, Excel, PowerPoint et formats d\'image',
    compressTitle: 'Compression PDF',
    compressDesc: 'Réduisez la taille du fichier PDF sans perte de qualité',
    mergeTitle: 'Fusionner PDF',
    mergeDesc: 'Combinez plusieurs fichiers PDF en un seul document',
    splitTitle: 'Diviser PDF',
    splitDesc: 'Divisez les gros PDF en pages ou sections individuelles',
    secureTitle: 'Sécurisé et Fiable',
    secureDesc: 'Vos fichiers sont traités de manière sécurisée et cryptée',
    freeTitle: 'Entièrement Gratuit',
    freeDesc: 'Aucune inscription, tous les outils entièrement gratuits',
    
    // Upload Section
    uploadTitle: 'Sélectionner Fichier PDF',
    uploadSubtitle: 'Glissez-déposez ou cliquez pour sélectionner les fichiers à traiter',
    convertFiles: 'Convertir Fichiers',
    compressFiles: 'Compresser Fichiers',
    dragFiles: 'Glissez les fichiers ici',
    or: 'ou',
    chooseFiles: 'Choisir Fichiers',
    supportedFiles: 'Fichiers supportés: PDF (maximum 10MB)',
    selectedFiles: 'Fichiers Sélectionnés',
    processing: 'Traitement...',
    startConverting: 'Commencer Conversion',
    startCompressing: 'Commencer Compression',
    
    // Conversion Options
    convertToWord: 'Convertir en Word (.docx)',
    convertToExcel: 'Convertir en Excel (.xlsx)',
    convertToPowerPoint: 'Convertir en PowerPoint (.pptx)',
    convertToImage: 'Convertir en Image (.png)',
    convertToText: 'Convertir en Texte (.txt)',
    
    // Messages
    processingCompleted: 'Traitement terminé avec succès!',
    processingError: 'Une erreur s\'est produite pendant le traitement',
    noFileUploaded: 'Aucun fichier téléchargé',
    fileTooLarge: 'Le fichier est trop volumineux (maximum 10MB)',
    fileNotFound: 'Fichier non trouvé',
    invalidFilename: 'Nom de fichier invalide',
    downloadError: 'Une erreur de téléchargement s\'est produite',
    
    // Footer
    quickLinks: 'Liens Rapides',
    pdfTools: 'Outils PDF',
    aboutUs: 'À Propos',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation',
    contact: 'Contact',
    allRightsReserved: 'Tous droits réservés.',
    
    // Additional Pages
    aboutTitle: 'À Propos d\'I Love PDF',
    aboutContent: 'I Love PDF est une plateforme en ligne complète pour tous vos besoins PDF. Nous fournissons des outils gratuits, sécurisés et faciles à utiliser pour convertir, compresser, fusionner et diviser les fichiers PDF.',
    privacyTitle: 'Politique de Confidentialité',
    privacyContent: 'Votre confidentialité est importante pour nous. Tous les fichiers téléchargés sont automatiquement supprimés après traitement pour assurer la sécurité de vos données.',
    termsTitle: 'Conditions d\'Utilisation',
    termsContent: 'En utilisant I Love PDF, vous acceptez nos conditions d\'utilisation. Veuillez utiliser nos outils de manière responsable et respecter les lois sur le droit d\'auteur.',
    contactTitle: 'Nous Contacter',
    contactContent: 'Vous avez des questions ou des suggestions? Nous aimerions vous entendre!',
    helpTitle: 'Aide et FAQ',
    helpContent: 'Trouvez des réponses aux questions fréquemment posées sur l\'utilisation des outils I Love PDF.'
  },

  de: {
    // Header & Navigation
    home: 'Startseite',
    convertPdf: 'PDF Konvertieren',
    compressPdf: 'PDF Komprimieren',
    mergePdf: 'PDF Zusammenführen',
    splitPdf: 'PDF Teilen',
    tools: 'Werkzeuge',
    help: 'Hilfe',
      // Hero Section
    heroTitle: 'I Like PDF ❤️',
    heroSubtitle: 'Kostenlose Online-PDF-Tools und Dateikonverter',
    heroDescription: 'Konvertieren, komprimieren, zusammenführen und teilen Sie PDF-Dateien mit Leichtigkeit. Die komplette Lösung für alle Ihre PDF-Bedürfnisse.',
    getStarted: 'Loslegen',
    
    // Features
    featuresTitle: 'Leistungsstarke PDF-Tools',
    convertTitle: 'PDF-Konvertierung',
    convertDesc: 'Konvertieren Sie PDF in Word, Excel, PowerPoint und Bildformate',
    compressTitle: 'PDF-Komprimierung',
    compressDesc: 'Reduzieren Sie die PDF-Dateigröße ohne Qualitätsverlust',
    mergeTitle: 'PDF Zusammenführen',
    mergeDesc: 'Kombinieren Sie mehrere PDF-Dateien zu einem Dokument',
    splitTitle: 'PDF Teilen',
    splitDesc: 'Teilen Sie große PDFs in einzelne Seiten oder Abschnitte',
    secureTitle: 'Sicher und Zuverlässig',
    secureDesc: 'Ihre Dateien werden sicher und verschlüsselt verarbeitet',
    freeTitle: 'Völlig Kostenlos',
    freeDesc: 'Keine Registrierung, alle Tools völlig kostenlos',
    
    // Upload Section
    uploadTitle: 'PDF-Datei Auswählen',
    uploadSubtitle: 'Ziehen und ablegen oder klicken, um zu verarbeitende Dateien auszuwählen',
    convertFiles: 'Dateien Konvertieren',
    compressFiles: 'Dateien Komprimieren',
    dragFiles: 'Dateien hier hinziehen',
    or: 'oder',
    chooseFiles: 'Dateien Wählen',
    supportedFiles: 'Unterstützte Dateien: PDF (maximal 10MB)',
    selectedFiles: 'Ausgewählte Dateien',
    processing: 'Verarbeitung...',
    startConverting: 'Konvertierung Starten',
    startCompressing: 'Komprimierung Starten',
    
    // Conversion Options
    convertToWord: 'In Word konvertieren (.docx)',
    convertToExcel: 'In Excel konvertieren (.xlsx)',
    convertToPowerPoint: 'In PowerPoint konvertieren (.pptx)',
    convertToImage: 'In Bild konvertieren (.png)',
    convertToText: 'In Text konvertieren (.txt)',
    
    // Messages
    processingCompleted: 'Verarbeitung erfolgreich abgeschlossen!',
    processingError: 'Ein Fehler ist während der Verarbeitung aufgetreten',
    noFileUploaded: 'Keine Datei hochgeladen',
    fileTooLarge: 'Datei ist zu groß (maximal 10MB)',
    fileNotFound: 'Datei nicht gefunden',
    invalidFilename: 'Ungültiger Dateiname',
    downloadError: 'Ein Download-Fehler ist aufgetreten',
    
    // Footer
    quickLinks: 'Schnelllinks',
    pdfTools: 'PDF-Tools',
    aboutUs: 'Über Uns',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsOfService: 'Nutzungsbedingungen',
    contact: 'Kontakt',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    
    // Additional Pages
    aboutTitle: 'Über I Love PDF',
    aboutContent: 'I Love PDF ist eine umfassende Online-Plattform für alle Ihre PDF-Bedürfnisse. Wir bieten kostenlose, sichere und benutzerfreundliche Tools zum Konvertieren, Komprimieren, Zusammenführen und Teilen von PDF-Dateien.',
    privacyTitle: 'Datenschutzrichtlinie',
    privacyContent: 'Ihre Privatsphäre ist uns wichtig. Alle hochgeladenen Dateien werden nach der Verarbeitung automatisch gelöscht, um die Sicherheit Ihrer Daten zu gewährleisten.',
    termsTitle: 'Nutzungsbedingungen',
    termsContent: 'Durch die Nutzung von I Love PDF stimmen Sie unseren Nutzungsbedingungen zu. Bitte verwenden Sie unsere Tools verantwortungsbewusst und respektieren Sie das Urheberrecht.',
    contactTitle: 'Kontaktieren Sie Uns',
    contactContent: 'Haben Sie Fragen oder Vorschläge? Wir würden gerne von Ihnen hören!',
    helpTitle: 'Hilfe und FAQ',
    helpContent: 'Finden Sie Antworten auf häufig gestellte Fragen zur Verwendung der I Love PDF-Tools.'
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
