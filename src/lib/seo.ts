// SEO-optimized metadata for all languages
import type { Metadata } from 'next'

interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  alternateUrls?: Record<string, string>
}

export const seoMetadata: Record<string, Record<string, SEOMetadata>> = {
  en: {
    home: {
      title: "I Like PDF ❤️ - Free Online PDF Converter & Tools | Convert PDF to Word, Excel, PowerPoint",
      description: "Free online PDF converter and tools. Convert PDF to Word, Excel, PowerPoint, images. Compress, merge, split PDF files. No registration required. 100% secure.",
      keywords: [
        "pdf converter online free", "convert pdf to word", "pdf compressor online", 
        "merge pdf files", "split pdf pages", "pdf to excel converter", "free pdf tools",
        "pdf editor online", "compress pdf without losing quality", "pdf to powerpoint converter",
        "online pdf converter", "pdf merger", "pdf splitter", "pdf tools free",
        "convert pdf to word free", "pdf compression online", "merge multiple pdf"
      ]
    },
    convert: {
      title: "Convert PDF Online Free - PDF to Word, Excel, PowerPoint | I Like PDF ❤️",
      description: "Convert PDF files to Word (DOCX), Excel (XLSX), PowerPoint (PPTX), and images online for free. Fast, secure, and no registration required.",
      keywords: [
        "convert pdf to word", "pdf to excel", "pdf to powerpoint", "pdf to image",
        "convert pdf online free", "pdf converter", "pdf to docx", "pdf to xlsx",
        "pdf to pptx", "pdf to png", "online pdf converter free"
      ]
    },
    compress: {
      title: "Compress PDF Online Free - Reduce PDF File Size | I Like PDF ❤️",
      description: "Compress PDF files online for free. Reduce PDF file size while maintaining quality. Fast compression, no registration required.",
      keywords: [
        "compress pdf online", "pdf compressor", "reduce pdf file size", "compress pdf free",
        "pdf compression online", "make pdf smaller", "pdf size reducer", "compress pdf without losing quality"
      ]
    },
    merge: {
      title: "Merge PDF Files Online Free - Combine Multiple PDFs | I Like PDF ❤️",
      description: "Merge multiple PDF files into one document online for free. Combine PDF files quickly and securely. No registration required.",
      keywords: [
        "merge pdf files", "combine pdf", "pdf merger", "join pdf files",
        "merge multiple pdf", "combine pdf online free", "pdf joiner", "merge pdf documents"
      ]
    },
    split: {
      title: "Split PDF Online Free - Extract Pages from PDF | I Like PDF ❤️",
      description: "Split PDF files online for free. Extract specific pages or split PDF into multiple documents. Fast and secure PDF splitting tool.",
      keywords: [
        "split pdf", "pdf splitter", "extract pdf pages", "divide pdf",
        "split pdf online free", "pdf page extractor", "separate pdf pages", "split pdf documents"
      ]
    }
  },
  th: {
    home: {
      title: "I Like PDF ❤️ - เครื่องมือ PDF ออนไลน์ฟรี | แปลง บีบอัด รวม แยก PDF",
      description: "เครื่องมือ PDF ออนไลน์ฟรี แปลง PDF เป็น Word Excel PowerPoint รูปภาพ บีบอัด รวม แยกไฟล์ PDF ปลอดภัย ไม่ต้องสมัครสมาชิก",
      keywords: [
        "แปลง pdf เป็น word ฟรี", "บีบอัด pdf ออนไลน์", "รวม pdf ฟรี", "แยก pdf หน้า",
        "เครื่องมือ pdf ฟรี", "แปลงไฟล์ pdf ออนไลน์", "แปลง pdf เป็น excel", "แปลง pdf เป็น powerpoint",
        "บีบอัด pdf ไม่เสียคุณภาพ", "รวมไฟล์ pdf หลายไฟล์", "แยกหน้า pdf", "แก้ไข pdf ออนไลน์"
      ]
    },
    convert: {
      title: "แปลง PDF ออนไลน์ฟรี - PDF เป็น Word Excel PowerPoint | I Like PDF ❤️",
      description: "แปลงไฟล์ PDF เป็น Word (DOCX) Excel (XLSX) PowerPoint (PPTX) และรูปภาพออนไลน์ฟรี รวดเร็ว ปลอดภัย ไม่ต้องสมัครสมาชิก",
      keywords: [
        "แปลง pdf เป็น word", "แปลง pdf เป็น excel", "แปลง pdf เป็น powerpoint", "แปลง pdf เป็น รูปภาพ",
        "แปลงไฟล์ pdf ออนไลน์ฟรี", "แปลง pdf ออนไลน์", "pdf เป็น docx", "pdf เป็น xlsx"
      ]
    },
    compress: {
      title: "บีบอัด PDF ออนไลน์ฟรี - ลดขนาดไฟล์ PDF | I Like PDF ❤️",
      description: "บีบอัดไฟล์ PDF ออนไลน์ฟรี ลดขนาดไฟล์ PDF โดยยังคงคุณภาพ รวดเร็ว ไม่ต้องสมัครสมาชิก",
      keywords: [
        "บีบอัด pdf ออนไลน์", "ลดขนาด pdf", "บีบอัด pdf ฟรี", "ย่อขนาด pdf",
        "บีบอัด pdf ไม่เสียคุณภาพ", "ทำให้ pdf เล็กลง", "compress pdf ภาษาไทย"
      ]
    },
    merge: {
      title: "รวม PDF ออนไลน์ฟรี - รวมไฟล์ PDF หลายไฟล์ | I Like PDF ❤️",
      description: "รวมไฟล์ PDF หลายไฟล์เป็นเอกสารเดียวออนไลน์ฟรี รวม PDF รวดเร็ว ปลอดภัย ไม่ต้องสมัครสมาชิก",
      keywords: [
        "รวม pdf ฟรี", "รวมไฟล์ pdf", "ผสาน pdf", "รวม pdf หลายไฟล์",
        "รวม pdf ออนไลน์", "เชื่อมต่อ pdf", "รวมเอกสาร pdf", "merge pdf ภาษาไทย"
      ]
    },
    split: {
      title: "แยก PDF ออนไลน์ฟรี - แยกหน้า PDF | I Like PDF ❤️",
      description: "แยกไฟล์ PDF ออนไลน์ฟรี แยกหน้าที่ต้องการหรือแยก PDF เป็นหลายเอกสาร รวดเร็ว ปลอดภัย",
      keywords: [
        "แยก pdf ฟรี", "แยกหน้า pdf", "แยกไฟล์ pdf", "แบ่ง pdf",
        "แยก pdf ออนไลน์", "แยกเอกสาร pdf", "split pdf ภาษาไทย", "แยกหน้าเอกสาร"
      ]
    }
  },
  zh: {
    home: {
      title: "I Like PDF ❤️ - 免费在线PDF转换器和工具 | PDF转Word、Excel、PowerPoint",
      description: "免费在线PDF转换器和工具。PDF转Word、Excel、PowerPoint、图像。压缩、合并、分割PDF文件。无需注册，100%安全。",
      keywords: [
        "PDF转换器在线免费", "PDF转Word", "PDF压缩在线", "合并PDF文件", "PDF分割工具",
        "免费PDF工具", "PDF编辑在线", "PDF转Excel", "PDF转PowerPoint", "PDF压缩器",
        "在线PDF转换", "PDF合并", "PDF分割", "免费PDF转换器", "PDF工具免费"
      ]
    },
    convert: {
      title: "在线免费PDF转换 - PDF转Word、Excel、PowerPoint | I Like PDF ❤️",
      description: "免费在线转换PDF文件为Word (DOCX)、Excel (XLSX)、PowerPoint (PPTX)和图像。快速、安全，无需注册。",
      keywords: [
        "PDF转Word", "PDF转Excel", "PDF转PowerPoint", "PDF转图像",
        "PDF转换在线免费", "PDF转换器", "PDF转DOCX", "PDF转XLSX"
      ]
    },
    compress: {
      title: "在线免费PDF压缩 - 减小PDF文件大小 | I Like PDF ❤️",
      description: "免费在线压缩PDF文件。在保持质量的同时减小PDF文件大小。快速压缩，无需注册。",
      keywords: [
        "PDF压缩在线", "PDF压缩器", "减小PDF文件大小", "PDF压缩免费",
        "PDF压缩在线", "PDF文件压缩", "PDF大小减少", "无损PDF压缩"
      ]
    },
    merge: {
      title: "在线免费合并PDF - 合并多个PDF文件 | I Like PDF ❤️",
      description: "免费在线合并多个PDF文件为一个文档。快速安全地合并PDF文件。无需注册。",
      keywords: [
        "合并PDF文件", "PDF合并", "PDF合并器", "合并PDF",
        "PDF文件合并", "合并多个PDF", "PDF合并在线免费", "PDF文档合并"
      ]
    },
    split: {
      title: "在线免费PDF分割 - 从PDF中提取页面 | I Like PDF ❤️",
      description: "免费在线分割PDF文件。提取特定页面或将PDF分割为多个文档。快速安全的PDF分割工具。",
      keywords: [
        "PDF分割", "PDF分割器", "PDF页面提取", "PDF分离",
        "PDF分割在线免费", "PDF页面提取器", "PDF分页", "PDF文档分割"
      ]
    }
  },
  ja: {
    home: {
      title: "I Like PDF ❤️ - 無料オンラインPDFコンバーター＆ツール | PDF変換・圧縮・結合・分割",
      description: "無料オンラインPDFコンバーターとツール。PDFをWord、Excel、PowerPoint、画像に変換。PDF圧縮、結合、分割。登録不要、100%安全。",
      keywords: [
        "PDF変換無料オンライン", "PDFをWordに変換", "PDF圧縮無料", "PDF結合ツール", "PDF分割オンライン",
        "無料PDFツール", "PDFエディターオンライン", "PDFをExcelに変換", "PDFをPowerPointに変換", "PDF変換器",
        "オンラインPDF変換", "PDF結合", "PDF分割", "無料PDF変換器", "PDFツール無料"
      ]
    },
    convert: {
      title: "オンライン無料PDF変換 - PDFをWord、Excel、PowerPointに変換 | I Like PDF ❤️",
      description: "PDFファイルを無料でWord (DOCX)、Excel (XLSX)、PowerPoint (PPTX)、画像にオンライン変換。高速、安全、登録不要。",
      keywords: [
        "PDFをWordに変換", "PDFをExcelに変換", "PDFをPowerPointに変換", "PDFを画像に変換",
        "PDF変換オンライン無料", "PDF変換器", "PDFをDOCXに変換", "PDFをXLSXに変換"
      ]
    },
    compress: {
      title: "オンライン無料PDF圧縮 - PDFファイルサイズを縮小 | I Like PDF ❤️",
      description: "PDFファイルを無料でオンライン圧縮。品質を保ちながらPDFファイルサイズを縮小。高速圧縮、登録不要。",
      keywords: [
        "PDF圧縮オンライン", "PDF圧縮器", "PDFファイルサイズ縮小", "PDF圧縮無料",
        "PDF圧縮ツール", "PDFサイズ削減", "PDF圧縮オンライン", "高品質PDF圧縮"
      ]
    },
    merge: {
      title: "オンライン無料PDF結合 - 複数PDFファイルを結合 | I Like PDF ❤️",
      description: "複数のPDFファイルを無料で1つの文書にオンライン結合。PDFファイルを高速かつ安全に結合。登録不要。",
      keywords: [
        "PDF結合", "PDF結合ツール", "PDFマージ", "PDF結合器",
        "PDFファイル結合", "複数PDF結合", "PDF結合オンライン無料", "PDF文書結合"
      ]
    },
    split: {
      title: "オンライン無料PDF分割 - PDFからページを抽出 | I Like PDF ❤️",
      description: "PDFファイルを無料でオンライン分割。特定のページを抽出またはPDFを複数の文書に分割。高速で安全なPDF分割ツール。",
      keywords: [
        "PDF分割", "PDF分割ツール", "PDFページ抽出", "PDF分離",
        "PDF分割オンライン無料", "PDFページ抽出器", "PDF分割器", "PDF文書分割"
      ]
    }
  },
  ko: {
    home: {
      title: "I Like PDF ❤️ - 무료 온라인 PDF 변환기 및 도구 | PDF를 Word, Excel, PowerPoint로 변환",
      description: "무료 온라인 PDF 변환기 및 도구. PDF를 Word, Excel, PowerPoint, 이미지로 변환. PDF 압축, 병합, 분할. 등록 불필요, 100% 안전.",
      keywords: [
        "PDF 변환기 온라인 무료", "PDF Word 변환", "PDF 압축 무료", "PDF 병합 도구", "PDF 분할 온라인",
        "무료 PDF 도구", "PDF 편집기 온라인", "PDF Excel 변환", "PDF PowerPoint 변환", "PDF 변환기",
        "온라인 PDF 변환", "PDF 병합", "PDF 분할", "무료 PDF 변환기", "PDF 도구 무료"
      ]
    },
    convert: {
      title: "온라인 무료 PDF 변환 - PDF를 Word, Excel, PowerPoint로 변환 | I Like PDF ❤️",
      description: "PDF 파일을 무료로 Word (DOCX), Excel (XLSX), PowerPoint (PPTX), 이미지로 온라인 변환. 빠르고 안전하며 등록 불필요.",
      keywords: [
        "PDF Word 변환", "PDF Excel 변환", "PDF PowerPoint 변환", "PDF 이미지 변환",
        "PDF 변환 온라인 무료", "PDF 변환기", "PDF DOCX 변환", "PDF XLSX 변환"
      ]
    },
    compress: {
      title: "온라인 무료 PDF 압축 - PDF 파일 크기 줄이기 | I Like PDF ❤️",
      description: "PDF 파일을 무료로 온라인 압축. 품질을 유지하면서 PDF 파일 크기를 줄입니다. 빠른 압축, 등록 불필요.",
      keywords: [
        "PDF 압축 온라인", "PDF 압축기", "PDF 파일 크기 줄이기", "PDF 압축 무료",
        "PDF 압축 도구", "PDF 크기 줄이기", "PDF 압축 온라인", "고품질 PDF 압축"
      ]
    },
    merge: {
      title: "온라인 무료 PDF 병합 - 여러 PDF 파일 결합 | I Like PDF ❤️",
      description: "여러 PDF 파일을 무료로 하나의 문서로 온라인 병합. PDF 파일을 빠르고 안전하게 결합. 등록 불필요.",
      keywords: [
        "PDF 병합", "PDF 병합 도구", "PDF 결합", "PDF 병합기",
        "PDF 파일 병합", "여러 PDF 병합", "PDF 병합 온라인 무료", "PDF 문서 결합"
      ]
    },
    split: {
      title: "온라인 무료 PDF 분할 - PDF에서 페이지 추출 | I Like PDF ❤️",
      description: "PDF 파일을 무료로 온라인 분할. 특정 페이지를 추출하거나 PDF를 여러 문서로 분할. 빠르고 안전한 PDF 분할 도구.",
      keywords: [
        "PDF 분할", "PDF 분할 도구", "PDF 페이지 추출", "PDF 분리",
        "PDF 분할 온라인 무료", "PDF 페이지 추출기", "PDF 분할기", "PDF 문서 분할"
      ]
    }
  },
  es: {
    home: {
      title: "I Like PDF ❤️ - Convertidor PDF Gratuito Online | Convertir PDF a Word, Excel, PowerPoint",
      description: "Convertidor PDF gratuito online y herramientas. Convertir PDF a Word, Excel, PowerPoint, imágenes. Comprimir, unir, dividir archivos PDF. Sin registro, 100% seguro.",
      keywords: [
        "convertir pdf a word gratis", "compresor pdf online", "unir archivos pdf", "dividir pdf gratis",
        "herramientas pdf gratis", "editor pdf online", "convertir pdf a excel", "convertir pdf a powerpoint",
        "comprimir pdf sin perder calidad", "unir varios pdf", "dividir paginas pdf", "convertidor pdf gratis"
      ]
    },
    convert: {
      title: "Convertir PDF Online Gratis - PDF a Word, Excel, PowerPoint | I Like PDF ❤️",
      description: "Convertir archivos PDF a Word (DOCX), Excel (XLSX), PowerPoint (PPTX) e imágenes online gratis. Rápido, seguro, sin registro.",
      keywords: [
        "convertir pdf a word", "convertir pdf a excel", "convertir pdf a powerpoint", "convertir pdf a imagen",
        "convertir pdf online gratis", "convertidor pdf", "pdf a docx", "pdf a xlsx"
      ]
    },
    compress: {
      title: "Comprimir PDF Online Gratis - Reducir Tamaño PDF | I Like PDF ❤️",
      description: "Comprimir archivos PDF online gratis. Reducir el tamaño del archivo PDF manteniendo la calidad. Compresión rápida, sin registro.",
      keywords: [
        "comprimir pdf online", "compresor pdf", "reducir tamaño pdf", "comprimir pdf gratis",
        "compresión pdf online", "hacer pdf más pequeño", "reductor tamaño pdf", "comprimir pdf sin perder calidad"
      ]
    },
    merge: {
      title: "Unir PDF Online Gratis - Combinar Múltiples PDFs | I Like PDF ❤️",
      description: "Unir múltiples archivos PDF en un documento online gratis. Combinar archivos PDF rápida y seguramente. Sin registro.",
      keywords: [
        "unir archivos pdf", "combinar pdf", "unir pdf gratis", "fusionar pdf",
        "unir varios pdf", "combinar múltiples pdf", "unir pdf online gratis", "fusionar documentos pdf"
      ]
    },
    split: {
      title: "Dividir PDF Online Gratis - Extraer Páginas PDF | I Like PDF ❤️",
      description: "Dividir archivos PDF online gratis. Extraer páginas específicas o dividir PDF en múltiples documentos. Herramienta rápida y segura.",
      keywords: [
        "dividir pdf", "separar pdf", "extraer páginas pdf", "dividir pdf gratis",
        "dividir pdf online gratis", "extractor páginas pdf", "separar páginas pdf", "dividir documentos pdf"
      ]
    }
  },
  fr: {
    home: {
      title: "I Like PDF ❤️ - Convertisseur PDF Gratuit en Ligne | Convertir PDF en Word, Excel, PowerPoint",
      description: "Convertisseur PDF gratuit en ligne et outils. Convertir PDF en Word, Excel, PowerPoint, images. Compresser, fusionner, diviser fichiers PDF. Sans inscription, 100% sécurisé.",
      keywords: [
        "convertir pdf en word gratuit", "compresser pdf en ligne", "fusionner pdf gratuit", "diviser pdf pages",
        "outils pdf gratuits", "éditeur pdf en ligne", "convertir pdf en excel", "convertir pdf en powerpoint",
        "compresser pdf sans perte qualité", "fusionner plusieurs pdf", "diviser pages pdf", "convertisseur pdf gratuit"
      ]
    },
    convert: {
      title: "Convertir PDF en Ligne Gratuit - PDF en Word, Excel, PowerPoint | I Like PDF ❤️",
      description: "Convertir fichiers PDF en Word (DOCX), Excel (XLSX), PowerPoint (PPTX) et images en ligne gratuit. Rapide, sécurisé, sans inscription.",
      keywords: [
        "convertir pdf en word", "convertir pdf en excel", "convertir pdf en powerpoint", "convertir pdf en image",
        "convertir pdf en ligne gratuit", "convertisseur pdf", "pdf en docx", "pdf en xlsx"
      ]
    },
    compress: {
      title: "Compresser PDF en Ligne Gratuit - Réduire Taille PDF | I Like PDF ❤️",
      description: "Compresser fichiers PDF en ligne gratuit. Réduire la taille du fichier PDF en maintenant la qualité. Compression rapide, sans inscription.",
      keywords: [
        "compresser pdf en ligne", "compresseur pdf", "réduire taille pdf", "compresser pdf gratuit",
        "compression pdf en ligne", "rendre pdf plus petit", "réducteur taille pdf", "compresser pdf sans perte"
      ]
    },
    merge: {
      title: "Fusionner PDF en Ligne Gratuit - Combiner Plusieurs PDFs | I Like PDF ❤️",
      description: "Fusionner plusieurs fichiers PDF en un document en ligne gratuit. Combiner fichiers PDF rapidement et sécurisé. Sans inscription.",
      keywords: [
        "fusionner pdf gratuit", "combiner pdf", "fusionner fichiers pdf", "joindre pdf",
        "fusionner plusieurs pdf", "combiner plusieurs pdf", "fusionner pdf en ligne gratuit", "joindre documents pdf"
      ]
    },
    split: {
      title: "Diviser PDF en Ligne Gratuit - Extraire Pages PDF | I Like PDF ❤️",
      description: "Diviser fichiers PDF en ligne gratuit. Extraire pages spécifiques ou diviser PDF en plusieurs documents. Outil rapide et sécurisé.",
      keywords: [
        "diviser pdf", "séparer pdf", "extraire pages pdf", "diviser pdf gratuit",
        "diviser pdf en ligne gratuit", "extracteur pages pdf", "séparer pages pdf", "diviser documents pdf"
      ]
    }
  },
  de: {
    home: {
      title: "I Like PDF ❤️ - Kostenloser Online PDF Konverter | PDF in Word, Excel, PowerPoint umwandeln",
      description: "Kostenloser Online PDF Konverter und Tools. PDF in Word, Excel, PowerPoint, Bilder umwandeln. PDF komprimieren, zusammenführen, aufteilen. Ohne Registrierung, 100% sicher.",
      keywords: [
        "pdf in word umwandeln kostenlos", "pdf komprimieren online", "pdf dateien zusammenfügen", "pdf aufteilen kostenlos",
        "pdf tools kostenlos", "pdf editor online", "pdf in excel umwandeln", "pdf in powerpoint umwandeln",
        "pdf komprimieren ohne qualitätsverlust", "mehrere pdf zusammenfügen", "pdf seiten aufteilen", "pdf konverter kostenlos"
      ]
    },
    convert: {
      title: "PDF Online Kostenlos Umwandeln - PDF in Word, Excel, PowerPoint | I Like PDF ❤️",
      description: "PDF Dateien kostenlos in Word (DOCX), Excel (XLSX), PowerPoint (PPTX) und Bilder online umwandeln. Schnell, sicher, ohne Registrierung.",
      keywords: [
        "pdf in word umwandeln", "pdf in excel umwandeln", "pdf in powerpoint umwandeln", "pdf in bild umwandeln",
        "pdf umwandeln online kostenlos", "pdf konverter", "pdf zu docx", "pdf zu xlsx"
      ]
    },
    compress: {
      title: "PDF Online Kostenlos Komprimieren - PDF Dateigröße Reduzieren | I Like PDF ❤️",
      description: "PDF Dateien online kostenlos komprimieren. PDF Dateigröße reduzieren bei gleichbleibender Qualität. Schnelle Komprimierung, ohne Registrierung.",
      keywords: [
        "pdf komprimieren online", "pdf komprimierer", "pdf dateigröße reduzieren", "pdf komprimieren kostenlos",
        "pdf komprimierung online", "pdf kleiner machen", "pdf größe reduzieren", "pdf komprimieren ohne verlust"
      ]
    },
    merge: {
      title: "PDF Online Kostenlos Zusammenführen - Mehrere PDFs Kombinieren | I Like PDF ❤️",
      description: "Mehrere PDF Dateien kostenlos zu einem Dokument online zusammenführen. PDF Dateien schnell und sicher kombinieren. Ohne Registrierung.",
      keywords: [
        "pdf zusammenführen", "pdf dateien kombinieren", "pdf zusammenfügen kostenlos", "pdf verbinden",
        "mehrere pdf zusammenführen", "pdf dateien zusammenführen", "pdf zusammenführen online kostenlos", "pdf dokumente verbinden"
      ]
    },
    split: {
      title: "PDF Online Kostenlos Aufteilen - Seiten aus PDF Extrahieren | I Like PDF ❤️",
      description: "PDF Dateien online kostenlos aufteilen. Bestimmte Seiten extrahieren oder PDF in mehrere Dokumente aufteilen. Schnelles und sicheres Tool.",
      keywords: [
        "pdf aufteilen", "pdf teilen", "pdf seiten extrahieren", "pdf aufteilen kostenlos",
        "pdf aufteilen online kostenlos", "pdf seiten extrahierer", "pdf seiten trennen", "pdf dokumente aufteilen"
      ]
    }
  }
}

export function getSEOMetadata(language: string, page: string): SEOMetadata {
  return seoMetadata[language]?.[page] || seoMetadata['en'][page] || seoMetadata['en']['home']
}
