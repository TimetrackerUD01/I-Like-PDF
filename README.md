# ระบบแปลงไฟล์ PDF - อบต.ข่าใหญ่

ระบบแปลงไฟล์ PDF และบีบอัดไฟล์ออนไลน์ สำหรับองค์การบริหารส่วนตำบลข่าใหญ่

## ฟีเจอร์หลัก

### 🔄 แปลงไฟล์ PDF
- แปลง PDF เป็น Microsoft Word (.docx)
- แปลง PDF เป็น Microsoft Excel (.xlsx) 
- แปลง PDF เป็น Microsoft PowerPoint (.pptx)
- แปลง PDF เป็นรูปภาพ PNG
- แปลง PDF เป็นข้อความธรรมดา (.txt)

### 🗜️ บีบอัดไฟล์
- บีบอัดไฟล์ PDF เพื่อลดขนาด
- บีบอัดรูปภาพ
- รักษาคุณภาพไฟล์

### 🛡️ ความปลอดภัย
- ไฟล์จะถูกลบอัตโนมัติหลังจาก 5 นาที
- ไม่เก็บข้อมูลส่วนบุคคล
- การเข้ารหัสการส่งข้อมูล

### 📱 ใช้งานง่าย
- รองรับการลากวางไฟล์
- ใช้งานได้บนมือถือ
- ภาษาไทยเต็มรูปแบบ

## การติดตั้งและใช้งาน

### ความต้องการของระบบ
- Node.js 18.0.0 หรือใหม่กว่า
- NPM หรือ Yarn

### การติดตั้ง

1. Clone repository:
\`\`\`bash
git clone <repository-url>
cd eeley-pdf
\`\`\`

2. ติดตั้ง dependencies:
\`\`\`bash
npm install
\`\`\`

3. รันในโหมด development:
\`\`\`bash
npm run dev
\`\`\`

4. เปิดเบราว์เซอร์ไปที่ http://localhost:3000

### การ Build สำหรับ Production

\`\`\`bash
npm run build
npm start
\`\`\`

## การ Deploy บน Render

### ขั้นตอนการ Deploy

1. สร้างบัญชี Render.com
2. เชื่อมต่อ GitHub repository
3. ตั้งค่า Build & Deploy:
   - **Build Command**: \`npm run build\`
   - **Start Command**: \`npm start\`
   - **Node Version**: 18

### Environment Variables

ไม่จำเป็นต้องตั้งค่า environment variables พิเศษสำหรับการใช้งานพื้นฐาน

## โครงสร้างโปรเจค

\`\`\`
eeley-pdf/
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── process/
│   │   │   └── download/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── FeatureSection.tsx
│   │   ├── UploadSection.tsx
│   │   └── AdBanner.tsx
│   ├── lib/
│   │   ├── fileUpload.ts
│   │   └── fileProcessor.ts
│   └── types/
│       └── index.ts
├── uploads/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
\`\`\`

## API Endpoints

### POST /api/process
อัปโหลดและประมวลผลไฟล์

**Parameters:**
- \`file\`: ไฟล์ที่ต้องการประมวลผล
- \`action\`: 'convert' หรือ 'compress'
- \`convertTo\`: รูปแบบที่ต้องการแปลง (สำหรับ convert)

**Response:**
\`\`\`json
{
  "success": true,
  "downloadUrl": "/api/download/filename.ext",
  "originalFileName": "original.pdf",
  "processedFileName": "processed.docx",
  "message": "แปลงไฟล์เสร็จสิ้น"
}
\`\`\`

### GET /api/download/[filename]
ดาวน์โหลดไฟล์ที่ประมวลผลแล้ว

## ข้อจำกัด

- ขนาดไฟล์สูงสุด: 10MB
- รองรับไฟล์: PDF, Word, Excel, PowerPoint, รูปภาพ
- ไฟล์จะถูกลบอัตโนมัติหลังจาก 5 นาที

## การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

1. **ไฟล์ใหญ่เกินไป**
   - ตรวจสอบว่าไฟล์มีขนาดไม่เกิน 10MB

2. **การแปลงไฟล์ล้มเหลว**
   - ตรวจสอบว่าไฟล์เป็น PDF ที่ถูกต้อง
   - ลองใช้ไฟล์ PDF อื่น

3. **ไม่สามารถดาวน์โหลดได้**
   - ไฟล์อาจหมดอายุแล้ว (5 นาที)
   - ลองประมวลผลใหม่

## การสนับสนุน

หากพบปัญหาการใช้งาน กรุณาติดต่อ:
- อีเมล: info@khaiyai.go.th
- โทรศัพท์: 0XX-XXX-XXXX

## ลิขสิทธิ์

© 2025 องค์การบริหารส่วนตำบลข่าใหญ่ สงวนลิขสิทธิ์ทุกประการ
