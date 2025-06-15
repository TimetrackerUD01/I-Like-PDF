# คู่มือการอัปโหลดโปรเจ็กต์ไปยัง GitHub

## ขั้นตอนที่ 1: ติดตั้ง Git

### วิธีที่ 1: ดาวน์โหลดและติดตั้ง Git
1. ไปที่ https://git-scm.com/download/win
2. ดาวน์โหลด Git for Windows
3. รันไฟล์ที่ดาวน์โหลดมาและติดตั้งตามขั้นตอน
4. เลือก "Git from the command line and also from 3rd-party software"
5. ติดตั้งเรียบร้อย

### วิธีที่ 2: ใช้ winget (Windows 11/10)
```powershell
winget install --id Git.Git -e --source winget
```

### วิธีที่ 3: ใช้ Chocolatey
```powershell
choco install git
```

## ขั้นตอนที่ 2: ตั้งค่า Git ครั้งแรก
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## ขั้นตอนที่ 3: เตรียมโปรเจ็กต์
```powershell
cd "c:\Users\Administrator\Desktop\Eeley pdf"
```

### สร้างไฟล์ .gitignore
```
# Dependencies
node_modules/
/.pnp
.pnp.js

# Production
/out/
/build/
/.next/

# Misc
.DS_Store
*.tsbuildinfo
next-env.d.ts

# Environment variables
.env
.env*.local

# Uploads (temporary files)
uploads/*
!uploads/.gitkeep

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/

# OS
Thumbs.db
```

## ขั้นตอนที่ 4: Initialize Git Repository
```powershell
# ไปยังโฟลเดอร์โปรเจ็กต์
cd "c:\Users\Administrator\Desktop\Eeley pdf"

# สร้าง Git repository
git init

# เพิ่มไฟล์ทั้งหมด
git add .

# สร้าง commit แรก
git commit -m "Initial commit: PDF Converter System with multi-language support"
```

## ขั้นตอนที่ 5: เชื่อมต่อกับ GitHub Repository
```powershell
# เพิ่ม remote repository
git remote add origin https://github.com/ukhgkjg/next.js.git

# ตั้งค่า branch หลักเป็น main
git branch -M main

# Push ไฟล์ไปยัง GitHub
git push -u origin main
```

## ขั้นตอนที่ 6: การ Push ครั้งต่อไป
หลังจากทำการแก้ไขไฟล์:
```powershell
git add .
git commit -m "Your commit message"
git push origin main
```

## หมายเหตุสำคัญ:

### 1. Authentication
- หาก GitHub ขอ authentication ให้ใช้ Personal Access Token แทน password
- สร้าง Personal Access Token ได้ที่: GitHub Settings > Developer settings > Personal access tokens

### 2. ตรวจสอบสถานะ Repository
- ตรวจสอบว่า repository https://github.com/ukhgkjg/next.js มีอยู่จริง
- หากไม่มี ให้สร้าง repository ใหม่ก่อน

### 3. Branch Protection
- repository อาจมี branch protection rules
- หากไม่สามารถ push ได้ ให้ตรวจสอบ settings ของ repository

## การแก้ไขปัญหาที่อาจเกิดขึ้น:

### ปัญหา: Repository ไม่ว่าง
```powershell
git pull origin main --allow-unrelated-histories
git push origin main
```

### ปัญหา: Authentication failed
1. สร้าง Personal Access Token ใน GitHub
2. ใช้ token แทน password เมื่อ git ขอ authentication

### ปัญหา: Permission denied
- ตรวจสอบว่าคุณมีสิทธิ์ write ใน repository หรือไม่
- ตรวจสอบ username และ email ใน git config

## คำสั่งที่เป็นประโยชน์:
```powershell
# ตรวจสอบสถานะ
git status

# ดู commit history
git log --oneline

# ดู remote repositories
git remote -v

# ตรวจสอบ branch ปัจจุบัน
git branch
```

---

**หลังจากติดตั้ง Git เรียบร้อยแล้ว ให้รันคำสั่งต่อไปนี้ตามลำดับ:**

1. ตั้งค่า Git config
2. Initialize repository
3. เพิ่มไฟล์และ commit
4. เชื่อมต่อกับ GitHub
5. Push ไฟล์ขึ้น GitHub

หากมีปัญหาใดๆ สามารถถามได้ตลอดเวลา!
