# 🎓 ระบบสแกนใบหน้าเช็คชื่อ CDTI (2026 Edition)

ระบบสแกนหน้าอัจฉริยะสำหรับโรงเรียนจิตรลดาวิชาชีพ รองรับการทำงานร่วมกับ Google Workspace สมบูรณ์ 100%

### 🚀 ฟีเจอร์หลัก
- **Login Restriction:** เฉพาะ @cdti.ac.th เท่านั้น
- **Offline AI:** โหลด Model `face-api.js` จากโฟลเดอร์ในโปรเจกต์โดยตรง
- **Notifications:** ส่ง Email ถึงผู้ปกครองพร้อมรูปถ่ายยืนยันตัวตน
- **Automation:** สรุปรายงาน ขาด/ลา/สาย รายสัปดาห์ส่งตรงถึง Admin

### 🛠 การติดตั้ง
1. Clone Repository นี้ลงเครื่อง
2. สร้าง Google Sheets และเตรียมโครงสร้าง Tab ตามคู่มือ
3. Deploy Google Apps Script และนำ URL มาใส่ใน `script.js`
4. เปิดใช้งาน GitHub Pages ในหน้า Settings