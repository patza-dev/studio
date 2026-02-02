import type { Candidate, TeamMember, Policy, FaqItem } from './definitions';

export const candidate: Candidate = {
  name: 'Prompat',
  bio: 'A passionate and dedicated student leader committed to fostering a more inclusive, innovative, and supportive school environment. With a proven track record of successful projects and a clear vision for the future, Prompat is ready to listen, act, and lead our student body towards a brighter tomorrow. Your voice, our mission.',
  photoUrl: 'candidate.jpg',
};

export const platformSummary: string = 'Leading with vision, serving with heart. Ready to develop our school together.';

export const team: TeamMember[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Team Member ${i + 1}`,
  role: i === 0 ? 'Campaign Manager' : i < 4 ? 'Policy Advisor' : i < 8 ? 'Communications' : 'Event Coordinator',
  photoUrl: `team${i + 1}.jpg`,
}));


export const policies: Policy[] = [
  {
    title: 'โปรแกรมความเป็นเลิศทางวิชาการ',
    icon: 'Award',
    description: 'เราจะเปิดตัวเครือข่ายการสอนพิเศษแบบเพื่อนช่วยเพื่อน และจัดตั้งกลุ่มการเรียนรู้สำหรับทุกวิชาหลัก เป้าหมายของเราคือการให้การสนับสนุนทางวิชาการที่เข้าถึงได้สำหรับนักเรียนทุกคน ช่วยปรับปรุงผลการเรียนและความเข้าใจในวงกว้าง นอกจากนี้ เราจะร่วมมือกับครูเพื่อจัดช่วงทบทวนรายเดือนก่อนการสอบสำคัญ เพื่อให้แน่ใจว่าทุกคนมีทรัพยากรที่จำเป็นต่อความสำเร็จ',
  },
  {
    title: 'ส่งเสริมสุขภาวะของนักเรียน',
    icon: 'HeartHandshake',
    description: 'สุขภาพกายและสุขภาพจิตเป็นสิ่งสำคัญยิ่ง เราวางแผนที่จะเปิดตัว "Wellness Wednesdays" พร้อมกิจกรรมต่างๆ เช่น โยคะ การทำสมาธิ และเวิร์คช็อปการจัดการความเครียด นอกจากนี้ เราจะสนับสนุนให้มีตัวเลือกอาหารกลางวันที่มีประโยชน์และหลากหลายมากขึ้นในโรงอาหาร และทำงานเพื่อสร้างพื้นที่ที่เงียบสงบและสะดวกสบายรอบๆ โรงเรียน ซึ่งนักเรียนสามารถคลายเครียดและผ่อนคลายในช่วงพักได้',
  },
  {
    title: 'โครงการริเริ่มการเปลี่ยนแปลงสู่ดิจิทัล',
    icon: 'Scaling',
    description: 'เพื่อเตรียมนักเรียนของเราให้พร้อมสำหรับอนาคตดิจิทัล เราจะผลักดันให้มีการอัปเกรดเทคโนโลยีของโรงเรียน ซึ่งรวมถึงการล็อบบี้ให้มี Wi-Fi ที่เร็วขึ้น สถานีชาร์จสำหรับอุปกรณ์ส่วนตัวมากขึ้น และการเข้าถึงซอฟต์แวร์ที่ทันสมัยและชมรมเขียนโค้ด เรามุ่งมั่นที่จะสร้างทีม "Student Tech Support" เพื่อช่วยเพื่อนๆ แก้ไขปัญหาด้านเทคโนโลยี',
  },
  {
    title: 'ชมรมและชีวิตชุมชนที่สดใส',
    icon: 'Users',
    description: 'ชุมชนโรงเรียนที่แข็งแกร่งสร้างขึ้นจากความสนใจและกิจกรรมร่วมกัน เราจะปรับปรุงกระบวนการสร้างชมรมใหม่ให้ง่ายขึ้น และจัดหางบประมาณเพิ่มเติมสำหรับชมรมที่มีอยู่ เราวางแผนที่จะจัด "งานแสดงชมรม" ในแต่ละภาคการศึกษาเพื่อเพิ่มการมีส่วนร่วม และจัดกิจกรรมสำหรับทั้งโรงเรียนมากขึ้น เช่น การแสดงความสามารถ คืนดูหนัง และเทศกาลวัฒนธรรมเพื่อนำทุกคนมารวมกัน',
  },
  {
    title: 'โครงการวิทยาเขตที่เป็นมิตรต่อสิ่งแวดล้อม',
    icon: 'Lightbulb',
    description: 'แคมเปญของเรามุ่งมั่นที่จะทำให้โรงเรียนของเราเป็นสถานที่ที่เป็นมิตรต่อสิ่งแวดล้อมมากขึ้น เราจะดำเนินโครงการรีไซเคิลอย่างครบวงจร จัดวันทำความสะอาดวิทยาเขต และเริ่มทำสวนในโรงเรียน เป้าหมายของเราคือการลดขยะ ส่งเสริมความยั่งยืน และให้ความรู้แก่นักเรียนเกี่ยวกับความสำคัญของความรับผิดชอบต่อสิ่งแวดล้อม',
  },
  {
    title: 'นโยบายที่ 6: เพิ่มเสียงนักเรียน',
    icon: 'Mic',
    description: 'สร้างช่องทางการสื่อสารโดยตรงระหว่างนักเรียนและฝ่ายบริหารของโรงเรียนให้มากขึ้น ซึ่งรวมถึงการประชุมรับฟังความคิดเห็นอย่างสม่ำเสมอ และจัดตั้งคณะกรรมการที่นำโดยนักเรียนเพื่อทบทวนนโยบายของโรงเรียน',
  },
  {
    title: 'นโยบายที่ 7: ส่งเสริมศิลปะและความคิดสร้างสรรค์',
    icon: 'Paintbrush',
    description: 'เพื่อส่งเสริมความคิดสร้างสรรค์ เราจะพยายามเพิ่มงบประมาณสำหรับโครงการศิลปะ ดนตรี และการละคร นอกจากนี้ เราจะจัดเทศกาลศิลปะทั่วทั้งโรงเรียนเป็นประจำทุกปีเพื่อแสดงความสามารถของนักเรียน',
  },
  {
    title: 'นโยบายที่ 8: พัฒนากีฬาและกรีฑา',
    icon: 'Trophy',
    description: 'เราจะทำงานเพื่อปรับปรุงสิ่งอำนวยความสะดวกด้านกีฬาและดูแลให้ทุกทีมมีอุปกรณ์ที่จำเป็น นอกจากนี้ เราวางแผนที่จะแนะนำกีฬาภายในให้มากขึ้นเพื่อส่งเสริมการมีส่วนร่วมของนักเรียนทุกคน',
  },
  {
    title: 'นโยบายที่ 9: เตรียมความพร้อมสู่อาชีพและมหาวิทยาลัย',
    icon: 'Briefcase',
    description: 'เราจะจัดเวิร์คช็อปเกี่ยวกับการเขียนเรซูเม่ ทักษะการสัมภาษณ์ และการสมัครเข้ามหาวิทยาลัย นอกจากนี้ เราจะจัดตั้งโครงการพี่เลี้ยงที่เชื่อมโยงนักเรียนกับศิษย์เก่าในสาขาต่างๆ',
  },
  {
    title: 'นโยบายที่ 10: ริเริ่มสร้างสรรค์จิตวิญญาณของโรงเรียน',
    icon: 'PartyPopper',
    description: 'เราจะส่งเสริมจิตวิญญาณของโรงเรียนโดยการจัดกิจกรรมชุมนุมเชียร์ให้บ่อยขึ้น วันแต่งกายตามธีม และการแข่งขันระหว่างชั้นเรียนอย่างเป็นมิตรตลอดทั้งปี',
  },
];


export const faqs: FaqItem[] = [
    {
        question: "What is the main goal of พรรคพร้อมพัฒน์?",
        answer: "Our main goal is to create a more supportive, innovative, and engaging school environment for every student. We want to improve academic resources, enhance student wellness, and build a stronger, more connected community."
    },
    {
        question: "How will you ensure you listen to student feedback?",
        answer: "We plan to hold monthly open forums where any student can voice their concerns and ideas. We will also set up an anonymous online feedback form and have suggestion boxes placed around the school. Your voice is crucial to our mission."
    },
    {
        question: "What makes your party different from the others?",
        answer: "Our party, 'พร้อมพัฒน์', stands for being 'Ready to Develop'. We are focused on actionable, concrete policies rather than just promises. Our diverse 15-member team brings a wide range of skills and perspectives, ensuring we represent the entire student body effectively."
    },
    {
        question: "How can I get involved with the campaign?",
        answer: "We're always looking for passionate students to help out! You can talk to any of our team members, or send us a message through the Q&A form on this website. We have roles for everything from spreading the word to helping organize events."
    }
];
