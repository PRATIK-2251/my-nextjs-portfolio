import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Pratik Hole',
  title: "Hi all, I'm Pratik",
  description:
    "I'm a dedicated web developer with experience in React.js and Next.js, skilled in creating elegant user interfaces with Tailwind CSS. I've also successfully built admin dashboards using React and Reactstrap, demonstrating my expertise in delivering user-friendly solutions.",
  // resumeLink:'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'pratik-2251',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  // url: '',
  linkedin: 'https://www.linkedin.com/in/pratik-hole-143a1723a/',
  github: 'https://github.com/PRATIK-2251',
  // instagram: '',
  // facebook: '',
  twitter: 'https://twitter.com/pratikhole22',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Front end developement',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Typescript',
          iconifyTag: 'vscode-icons:file-type-typescript',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Jest',
          iconifyTag: 'logos:jest',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        // {
        //   skillName: 'Yarn',
        //   iconifyTag: 'logos:yarn',
        // },
      ],
    },
    // {
    //   title: 'Cloud Infra-Architecture',
    //   lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience of working on multiple cloud platforms'),
    //     emoji(
    //       '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
    //     ),
    //     emoji(
    //       '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: 'AWS',
    //       iconifyTag: 'logos:aws',
    //     },
    //     {
    //       skillName: 'Azure',
    //       iconifyTag: 'logos:microsoft-azure',
    //     },
    //     {
    //       skillName: 'Heroku',
    //       iconifyTag: 'logos:heroku-icon',
    //     },
    //     {
    //       skillName: 'PostgreSQL',
    //       iconifyTag: 'logos:postgresql',
    //     },
    //     {
    //       skillName: 'Github',
    //       iconifyTag: 'akar-icons:github-fill',
    //     },
    //     {
    //       skillName: 'Docker',
    //       iconifyTag: 'logos:docker-icon',
    //     },
    //     {
    //       skillName: 'Github Actions',
    //       iconifyTag: 'logos:github-actions',
    //     },
    //     {
    //       skillName: 'Cloudinary',
    //       iconifyTag: 'logos:cloudinary',
    //     },
    //     {
    //       skillName: 'Nginx',
    //       iconifyTag: 'logos:nginx',
    //     },
    //     {
    //       skillName: 'Sentry',
    //       iconifyTag: 'logos:sentry-icon',
    //     },
    //   ],
    // },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Next JS', //Insert stack or technology you have experience in
    progressPercentage: '60', //Insert relative proficiency in percentage
  },
  {
    Stack: 'React',
    progressPercentage: '80',
  },
  {
    Stack: 'Redux toolkit',
    progressPercentage: '70',
  },
  {
    Stack: 'Javascript',
    progressPercentage: '60',
  },
  {
    Stack: 'Typescript',
    progressPercentage: '30',
  },
  {
    Stack: 'Tailwind CSS',
    progressPercentage: '50',
  },
  {
    Stack: 'Unit Testing',
    progressPercentage: '30',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Pune University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'September 2017 - April 2019',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'API Engineer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Bleed-AI',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Sept 2021 - Oct 2021',
    desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  },
  {
    role: 'Backend Developer',
    company: 'Wapidu',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Netflix Clone',
    desc: "Created a Netflix clone using React and Bootstrap, replicating the popular streaming platform's user interface and functionality.",
    // github: 'https://github.com/projectURL',
    link: 'https://movieswebseries.netlify.app/',
  },
  // {
  //   name: 'AtlasMart',
  //   desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
  //   github: 'https://github.com/',
  // },
  // {
  //   name: 'Technota (Forum)',
  //   desc: 'Get hands-on experience in technical skills with Technota',
  //   github: 'https://github.com/',
  // },
  // {
  //   name: 'Shopaza (Ecommerce)',
  //   desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
  //   github: 'https://github.com/',
  // },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Pratik Hole',
  description: 'A passionate Front end developer',
  author: 'Pratik Hole',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'porfolio-url',
  keywords: [
    'Pratik',
    'Pratik Hole',
    'Portfolio',
    'pratik-2251',
    'Pratik Portfolio ',
    'Pratik Hole Portfolio',
  ],
};
