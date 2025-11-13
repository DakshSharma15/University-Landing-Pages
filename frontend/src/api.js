export const universities = {
  uni1: {
    name: 'Veritas Institute',
    overview: `
Veritas Institute is one of India’s leading private universities, committed to academic excellence and holistic development.  
Our mission is to equip students with the knowledge, skills, and experiences needed to thrive in a competitive global environment.  

We offer a wide range of undergraduate and postgraduate programs designed in collaboration with industry experts to ensure career-ready graduates.  

Our campus boasts modern classrooms, advanced labs, a well-stocked library, sports facilities, and a vibrant student life.  
We also focus on internships, industry exposure, and placement assistance to help students achieve their professional goals.
`,
    courses: [
      { code: 'btech', name: 'B.Tech', duration: '4 years', eligibility: '12th (PCM)' },
      { code: 'mba', name: 'MBA', duration: '2 years', eligibility: 'Graduation' },
      { code: 'bba', name: 'BBA', duration: '3 years', eligibility: '12th' },
      { code: 'bsc', name: 'B.Sc', duration: '3 years', eligibility: '12th' },
    ],
    placements: [
      { company: 'TCS', package: '₹6 LPA' },
      { company: 'Infosys', package: '₹5.5 LPA' },
      { company: 'Accenture', package: '₹6.5 LPA' },
    ],
    facilities: [
      'Modern laboratories and research centers',
      'State-of-the-art library with digital resources',
      'Sports complex and fitness center',
      'Hostels with high-speed Wi-Fi',
      'Cultural and technical clubs',
      'Cafeteria with healthy meals',
    ]
  },
  uni2: {
    name: 'Horizon School',
    overview: `
Horizon School is renowned for providing quality education with a focus on innovation, leadership, and employability.  
Our programs are designed to foster critical thinking, creativity, and hands-on learning, preparing students for global careers.  

The campus features modern classrooms, smart labs, an extensive library, and ample recreational facilities to support a balanced student life.  
We emphasize internships, industry visits, and mentoring programs to ensure every student is career-ready upon graduation.
`,
    courses: [
      { code: 'btech', name: 'B.Tech', duration: '4 years', eligibility: '12th (PCM)' },
      { code: 'mba', name: 'MBA', duration: '2 years', eligibility: 'Graduation' },
      { code: 'bcom', name: 'B.Com', duration: '3 years', eligibility: '12th' },
      { code: 'bca', name: 'BCA', duration: '3 years', eligibility: '12th' },
    ],
    placements: [
      { company: 'Wipro', package: '₹5 LPA' },
      { company: 'Cognizant', package: '₹4.8 LPA' },
      { company: 'IBM', package: '₹6 LPA' },
    ],
    facilities: [
      'Advanced computer labs with latest software',
      'Well-stocked library with journals and e-resources',
      'Indoor and outdoor sports facilities',
      'Separate hostels for boys and girls with 24/7 security',
      'Student clubs and entrepreneurship cells',
      'On-campus cafeteria with variety of options',
    ]
  }
};

export function fetchUniversity(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (universities[id]) resolve(universities[id]);
      else reject('University not found');
    }, 200);
  });
}
