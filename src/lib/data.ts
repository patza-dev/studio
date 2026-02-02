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
    title: 'Academic Excellence Program',
    icon: 'Award',
    description: 'We will launch a peer-to-peer tutoring network and establish dedicated study groups for all major subjects. Our goal is to provide accessible academic support for every student, helping to improve grades and comprehension across the board. We will also partner with teachers to host monthly review sessions before major exams, ensuring everyone has the resources they need to succeed.',
  },
  {
    title: 'Enhanced Student Wellness',
    icon: 'HeartHandshake',
    description: 'Mental and physical health are paramount. We plan to introduce "Wellness Wednesdays" with activities like yoga, meditation, and stress-management workshops. We will also advocate for healthier and more diverse lunch options in the cafeteria and work to create quiet, comfortable spaces around the school where students can de-stress and relax during breaks.',
  },
  {
    title: 'Digital Transformation Initiative',
    icon: 'Scaling',
    description: 'To prepare our students for a digital future, we will push for an upgrade in school technology. This includes lobbying for faster Wi-Fi, more charging stations for personal devices, and access to modern software and coding clubs. We aim to create a "Student Tech Support" team to help peers with their tech issues.',
  },
  {
    title: 'Vibrant Club & Community Life',
    icon: 'Users',
    description: 'A strong school community is built on shared interests and activities. We will streamline the process for creating new clubs and secure more funding for existing ones. We plan to organize a "Club Fair" each semester to boost participation and host more all-school events like talent shows, movie nights, and cultural festivals to bring everyone together.',
  },
  {
    title: 'Eco-Friendly Campus Project',
    icon: 'Lightbulb',
    description: 'Our campaign is committed to making our school a greener place. We will implement a comprehensive recycling program, organize campus clean-up days, and start a school garden. Our goal is to reduce waste, promote sustainability, and educate the student body on the importance of environmental responsibility.',
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
