const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL"; // นำ URL จาก Deployment มาใส่
const MODEL_URL = './models';

// 1. โหลด AI Models
async function loadModels() {
    await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
    startVideo();
}

// 2. เริ่มทำงานกล้อง
function startVideo() {
    const video = document.getElementById('video');
    navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => video.srcObject = stream)
        .catch(err => console.error(err));
}

// 3. ฟังก์ชันสแกนและส่งข้อมูล
async function onPlay() {
    const video = document.getElementById('video');
    const detections = await faceapi.detectSingleFace(video).withFaceLandmarks().withFaceDescriptor();
    
    if (detections) {
        // logic ตรวจจับใบหน้านักเรียนที่มีในฐานข้อมูล
        // หากพบ ให้ส่งข้อมูลไปที่ Google Sheets
        submitAttendance("67XXXX", "ชื่อนักเรียน");
    }
}

async function submitAttendance(studentId, name) {
    const data = {
        action: "checkIn",
        studentId: studentId,
        name: name,
        timestamp: new Date().toISOString()
    };
    
    await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

loadModels();