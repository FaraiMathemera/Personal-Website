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
      text: "Drop me a line",
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
      url: 'mailto:queries@faraimathemera.co.za',
      text: 'Send me an email',
      hoverColor: '#d9071c'
    }
  ]
}

const projects = [
  {
    title: 'Personal Website (fadzaikadzinga.co.za)',
    img: '',
    description: 'Personal website of PhD candidate looking to put herself out there and showcase herself.',
    categories: ['Website', 'NodeJS', 'React'],
    siteUrl: 'fadzaikadzinga.co.za',
    sourceCodeUrl: 'github.com/user/project'
  },
  {
    title: 'Personal Website (faraimathemera.co.za)',
    img: 'https://www.nethruster.com/assets/img/icons/apple-touch-icon.png',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Website', 'NodeJS', 'React'],
    siteUrl: 'faraimathemera.co.za',
    sourceCodeUrl: 'github.com/user/project'
  },
  {
    title: 'I Do Foundation (NGO)',
    img: 'https://www.nethruster.com/assets/img/wareader.svg',
    description: 'NGO providing the community with education and support services.',
    categories: ['JS', 'Website'],
    siteUrl: 'idofoundation.co.za',
    sourceCodeUrl: 'github.com/user/:O'
  }
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
