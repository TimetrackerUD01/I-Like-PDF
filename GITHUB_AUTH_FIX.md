# แก้ไขปัญหา GitHub Authentication

## ปัญหาที่เกิดขึ้น:
```
remote: Permission to ukhgkjg/next.js.git denied to TimetrackerUD01.
fatal: unable to access 'https://github.com/ukhgkjg/next.js.git/': The requested URL returned error: 403
```

## วิธีแก้ไข:

### วิธีที่ 1: ใช้ Personal Access Token (แนะนำ)

1. **สร้าง Personal Access Token:**
   - ไปที่ GitHub.com
   - คลิก Profile picture → Settings
   - ไปที่ Developer settings → Personal access tokens → Tokens (classic)
   - คลิก "Generate new token (classic)"
   - เลือก scope: `repo` (Full control of private repositories)
   - Copy token ที่ได้

2. **ใช้ Token แทน Password:**
   ```powershell
   cd "c:\Users\Administrator\Desktop\Eeley pdf"
   
   # ลบ remote ที่มีอยู่
   git remote remove origin
   
   # เพิ่ม remote ใหม่พร้อม token
   git remote add origin https://YOUR_TOKEN@github.com/ukhgkjg/next.js.git
   
   # Push ไฟล์
   git push -u origin main
   ```

3. **หรือใช้ Git Credential Manager:**
   ```powershell
   git push -u origin main
   ```
   จากนั้นใส่:
   - Username: `ukhgkjg`
   - Password: `YOUR_PERSONAL_ACCESS_TOKEN`

### วิธีที่ 2: เปลี่ยน Git Config

```powershell
cd "c:\Users\Administrator\Desktop\Eeley pdf"

# เปลี่ยน user config ให้ตรงกับ GitHub account
git config user.name "ukhgkjg"
git config user.email "YOUR_GITHUB_EMAIL"

# Push อีกครั้ง
git push -u origin main
```

### วิธีที่ 3: ใช้ SSH แทน HTTPS

1. **สร้าง SSH Key:**
   ```powershell
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **เพิ่ม SSH Key ไปยัง GitHub:**
   - Copy public key: `Get-Content ~/.ssh/id_ed25519.pub`
   - ไปที่ GitHub Settings → SSH and GPG keys → New SSH key
   - Paste public key

3. **เปลี่ยน remote URL:**
   ```powershell
   cd "c:\Users\Administrator\Desktop\Eeley pdf"
   git remote set-url origin git@github.com:ukhgkjg/next.js.git
   git push -u origin main
   ```

## คำสั่งที่ใช้ตรวจสอบ:

```powershell
# ดู remote URL ปัจจุบัน
git remote -v

# ดู Git config
git config --list

# ดู status ของ repository
git status

# ดู branch ปัจจุบัน
git branch
```

## หมายเหตุสำคัญ:

1. **ตรวจสอบ Repository:** ให้แน่ใจว่า https://github.com/ukhgkjg/next.js มีอยู่จริงและคุณมีสิทธิ์ push

2. **Repository ที่มีอยู่แล้ว:** หาก repository มีไฟล์อยู่แล้ว ให้ใช้:
   ```powershell
   git pull origin main --allow-unrelated-histories
   git push origin main
   ```

3. **สร้าง Repository ใหม่:** หากต้องการสร้าง repository ใหม่:
   - ไปที่ GitHub.com
   - คลิก "New repository"
   - ตั้งชื่อ "next.js"
   - ไม่ต้องเพิ่ม README, .gitignore หรือ license (เพราะเรามีแล้ว)

---

**ขั้นตอนที่แนะนำ:**
1. สร้าง Personal Access Token
2. ใช้ token ในการ push
3. ตรวจสอบผลลัพธ์บน GitHub
