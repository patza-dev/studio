import type { Candidate, TeamMember, Policy } from './definitions';

export const candidate: Candidate = {
  name: 'แป้ง',
  bio: 'A passionate and dedicated student leader committed to fostering a more inclusive, innovative, and supportive school environment. With a proven track record of successful projects and a clear vision for the future, Pang is ready to listen, act, and lead our student body towards a brighter tomorrow. Your voice, our mission.',
  photoUrl: 'candidate.jpg',
};

export const platformSummary: string = 'Leading with vision, serving with heart. Ready to develop our school together.';

export const team: TeamMember[] = [
  { id: 1, name: 'แป้ง', role: 'ประธานนักเรียน', photoUrl: 'team1.jpg' },
  { id: 2, name: 'ดรีม', role: 'สมาชิก', photoUrl: 'team2.jpg' },
  { id: 3, name: 'ฟาร์', role: 'สมาชิก', photoUrl: 'team3.jpg' },
  { id: 4, name: 'ขวัญ', role: 'สมาชิก', photoUrl: 'team4.jpg' },
  { id: 5, name: 'ฝ้าย', role: 'สมาชิก', photoUrl: 'team5.jpg' },
  { id: 6, name: 'เนม', role: 'สมาชิก', photoUrl: 'team6.jpg' },
  { id: 7, name: 'พัฒน์', role: 'สมาชิก', photoUrl: 'team7.jpg' },
  { id: 8, name: 'วาย', role: 'สมาชิก', photoUrl: 'team8.jpg' },
  { id: 9, name: 'ขวัญ', role: 'สมาชิก', photoUrl: 'team9.jpg' },
  { id: 10, name: 'มะนาว', role: 'สมาชิก', photoUrl: 'team10.jpg' },
  { id: 11, name: 'เพชร', role: 'สมาชิก', photoUrl: 'team11.jpg' },
  { id: 12, name: 'พีค', role: 'สมาชิก', photoUrl: 'team12.jpg' },
  { id: 13, name: 'นุ่น', role: 'สมาชิก', photoUrl: 'team13.jpg' },
  { id: 14, name: 'น้ำ', role: 'สมาชิก', photoUrl: 'team14.jpg' },
  { id: 15, name: 'เติ้ล', role: 'สมาชิก', photoUrl: 'team15.jpg' },
];


export const policies: Policy[] = [
  {
    title: 'พร้อมพัฒน์ความสามารถ',
    icon: 'Award',
    description: 'ประชาสัมพันธ์กิจกรรมการแข่งขันในหมวดวิชาต่างๆ เช่น กีฬา, การงานอาชีพ และดนตรี เพื่อส่งเสริมความสามารถและสนับสนุนให้นักเรียนกล้าแสดงออก โดยมีเกียรติบัตรมอบให้ทุกรายการ และเงินรางวัลในบางกิจกรรม',
  },
  {
    title: 'บริจาครับจบ',
    icon: 'HeartHandshake',
    description: 'เปิดรับบริจาคอุปกรณ์เครื่องใช้ต่างๆ เพื่อส่งต่อให้มูลนิธิที่ขาดแคลนในนามโรงเรียน รวมถึงเป็นศูนย์กลางการส่งต่อสิ่งของ เช่น เสื้อผ้า และกระเป๋านักเรียน ให้แก่เพื่อนนักเรียนที่ขาดแคลนภายในโรงเรียนของเรา',
  },
  {
    title: 'กล่องความฝันพร้อมรับฟังความเห็น',
    icon: 'ExternalLink',
    description: 'เปิดช่องทางแนะนำสายการเรียนต่อและการเก็บผลงานใส่พอร์ตโฟลิโอ พร้อมเป็นพื้นที่รับฟังความคิดเห็นและปัญหาต่างๆ ของนักเรียนแบบไม่ระบุตัวตน เพื่อนำไปปรับปรุงแก้ไขและพัฒนาโรงเรียนร่วมกัน',
  },
  {
    title: 'กิจการนี้เราช่วยนะ',
    icon: 'Users',
    description: 'สนับสนุนและส่งเสริมทักษะการเป็นผู้ประกอบการของนักเรียน โดยช่วยโปรโมทสินค้าและช่วยหาออร์เดอร์ให้กับนักเรียนที่มีการค้าขาย เพื่อสร้างรายได้ระหว่างเรียน',
  },
  {
    title: 'สุขาน่าใช้',
    icon: 'Lightbulb',
    description: 'ปรับปรุงสุขอนามัยในห้องน้ำหญิงตึกเพชร โดยจัดตั้งถังสำรองน้ำ เพิ่มอุปกรณ์ลดกลิ่น และจัดเตรียมกระดาษห่อผ้าอนามัยพร้อมโปสเตอร์แนะนำวิธีห่ออย่างถูกวิธีเพื่อความสะอาดเรียบร้อย',
  },
  {
    title: 'เทศกาลนี้พี่ขอร่วม',
    icon: 'Mic',
    description: 'จัดกิจกรรมตามเทศกาลต่างๆ เช่น Valentine, ตรุษจีน และ Christmas โดยมีสภาเป็นสื่อกลางในการมอบโน้ตบอกรัก จัดจำหน่ายสินค้าที่ระลึก และจัดกิจกรรมร่วมกับหมวดภาษาต่างประเทศ',
  },
  {
    title: 'อาสาพาลุย',
    icon: 'Paintbrush',
    description: 'จัดตั้งทีมอาสาดูแลความสะอาดภายในโรงเรียน และพาตะลุยทำกิจกรรมจิตอาสานอกสถานที่ เพื่อรณรงค์การรักษาความสะอาดและช่วยให้นักเรียนได้สะสมชั่วโมงจิตอาสาอย่างสร้างสรรค์',
  },
  {
    title: 'สุขภาพจิตดีสุขภาพกายพร้อม',
    icon: 'Trophy',
    description: 'ส่งเสริมสุขภาพที่ดีให้กับนักเรียนด้วยการรวมกลุ่มวิ่งออกกำลังกายในช่วงเย็นหลังเลิกเรียน สัปดาห์ละ 2 ครั้ง เพื่อสร้างความผ่อนคลายและเสริมสร้างร่างกายให้แข็งแรง',
  },
  {
    title: 'Promptpath Umbrella',
    icon: 'Umbrella',
    description: 'บริการสวัสดิการยืมร่มยามฉุกเฉินเพื่ออำนวยความสะดวกให้นักเรียนในวันที่ฝนตก โดยสามารถลงทะเบียนผ่านฟอร์มในการรับและคืนร่มได้อย่างง่ายดาย',
  },
  {
    title: 'ริเริ่มสร้างสรรค์จิตวิญญาณของโรงเรียน',
    icon: 'PartyPopper',
    description: 'สร้างบรรยากาศที่เต็มไปด้วยพลังบวกและความภาคภูมิใจในสถาบัน ผ่านกิจกรรมสร้างสรรค์ที่เน้นการมีส่วนร่วมและความสามัคคีของนักเรียนทุกคน',
  },
];
