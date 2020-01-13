const profile = {
  fullName: 'Farai Mathemera',
  description: 'BACK-END DEVELOPER | CLOUD ENGINEER',

  avatarPath: 'avatar.svg',
  about: {
    title: `FARAI MATHEMERA`,
    description: ``,

  },
  social: [
    {
      iconName: 'linkedin',
      url: 'www.linkedin.com/in/farai-mathemera',
      text: "I'm on linkedIn",
      hoverColor: '#0e76a8'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/The_Fusse',
      text: "Drop me line",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/FaraiMathemera',
      text: "I'm on Github",
      hoverColor: '#1e9429'
    },
    {
      iconName: 'email',
      url: 'mailto:queries@faraimathemera.com',
      text: 'Send me an email',
      hoverColor: '#d9071c'
    }
  ]
}

const projects = [
  {
    title: 'Project Title #1',
    img: '',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Open source', 'React'],
    siteUrl: 'amazing.project.com',
    sourceCodeUrl: 'github.com/user/project'
  },
  {
    title: 'Project Title #2',
    img: 'https://www.nethruster.com/assets/img/icons/apple-touch-icon.png',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Freeware', 'Go'],
    siteUrl: 'amazing.project.com'
  },
  {
    title: 'Project Title #3',
    img: 'https://www.nethruster.com/assets/img/wareader.svg',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Wat', 'Linux', 'LoL'],
    sourceCodeUrl: 'github.com/user/:O'
  }
]

const degrees = [
 {
    school: 'University of Cape Town',
    degree: 'BSc Computer Science and Business Computing',
    link: 'https://uct.ac.za',
    year: 2020,
  },
]

const positions = [
  {
    company: 'University of Cape Town, Chemical Engineering Department',
    position: 'Teaching assistant: Research communication and methodology',
    link: 'http://www.chemeng.uct.ac.za/',
    daterange: 'January 2018 - Present',
    points: [
      'Provide academic and administrative support for a postgraduate course that introduces new postgraduate students to good research practices such as the scientific method, critical thinking and science communication.',
    ],
  }, {
    company: 'University of Cape Town, Chemical Engineering Department',
    position: 'Ad hoc assistant lecturer: Separation processes, Mass transfer ',
    link: 'http://www.chemeng.uct.ac.za/',
    daterange: 'January 2016 – June 2018',
    points: [
      'Lecture a ‘Boot Camp’ to undergraduate students who have performed poorly in the course and are then given an opportunity to consolidate the material over an intensive 4-day programme, before retaking the exam.',
      'Two of the five classes I have worked with have achieved a pass rate of over 90%, and the rest have had a pass rate above 80%. ',
      'Structure course and deliver lectures',
      'Prepare worksheets and give support to students working on them',
      'Evaluate student progress and give detailed and timeous feedback',
    ],
  }, {
    company: 'University of Cape Town',
    position: 'Consultant: Undergraduate 2nd year project design',
    link: 'http://www.chemeng.uct.ac.za/',
    daterange: 'February 2018',
    points: [
      'Contributed to designing an anaerobic digestion project for the undergraduate curriculum. ',
      'The project is critical because it is the first undergraduate project that places chemical engineering in a small-scale informal setting in South Africa.',
    ],
  }, {
    company: 'University of Cape Town, Chemical Engineering Department',
    position: 'Head teaching assistant: various courses',
    link: 'http://www.chemeng.uct.ac.za/',
    daterange: '2013-2015',
    points: [
      'Developed end to end machine learning pipeline to train visual classifiers from keywords using Node.JS, Express, Keystone, MongoDB, AWS, S3, Caffe, and other technologies.',
      'Received Series A term sheets for 20M+ valuations.',
    ],
  }, {
    company: 'University of Cape Town, Hydrometallurgy Research Department',
    position: 'Intern',
    link: 'http://www.chemeng.uct.ac.za/',
    daterange: 'December 2010 – February 2011',
    points: [
      'Conducted a feasibility study on a model sulphide heap bioleach reactor. ',
    ],
  },
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
const missingProjectIcon = './assets/no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
