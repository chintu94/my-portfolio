import {
  javascript, html5, css3, typescript,
  react, redux, sass, nodeJS, mongodb, github,
  cli, chrome, postman, vsCode, jenkins, jira, travis,
} from "./assets/icons";

export const skills = [
  {
    name: 'Javascript',
    percent: 75,
    type: 'js',
    icon: javascript,
  },
  {
    name: 'HTML5',
    percent: 90,
    type: 'html',
    icon: html5,
  },
  {
    name: 'CSS3',
    percent: 80,
    type: 'css',
    icon: css3,
  },
  {
    name: 'TypeScript',
    percent: 70,
    type: 'ts',
    icon: typescript,
  },
  {
    name: 'ReactJS',
    percent: 70,
    type: 'react',
    icon: react,
  },
  {
    name: 'Redux',
    percent: 85,
    type: 'redux',
    icon: redux,
  },
  {
    name: 'SASS',
    percent: 65,
    type: 'sass',
    icon: sass,
  },
  {
    name: 'NodeJS',
    percent: 55,
    type: 'node',
    icon: nodeJS,
  },
  {
    name: 'MongoDB',
    percent: 45,
    type: 'mongo',
    icon: mongodb,
  },
];

export const tools = [
  {
    name: 'Git/Github',
    icon: github, 
  },
  {
    name: 'Command Line',
    icon: cli, 
  },
  {
    name: 'Chrome DevTools',
    icon: chrome, 
  },
  {
    name: 'Redux DevTools',
    icon: redux, 
  },
  {
    name: 'Postman',
    icon: postman, 
  },
  {
    name: 'VS code',
    icon: vsCode, 
  },
  {
    name: 'Jenkins',
    icon: jenkins, 
  },
  {
    name: 'Jira',
    icon: jira, 
  },
  {
    name: 'Travis',
    icon: travis, 
  },
];

export const testing = [
  {
    type: "Unit Test",
    className: 'unit-test',
    tools: [
      "Jest",
      "React Testing Library",
      "Enzyme"
    ]
  },
  {
    type: "Functional Test",
    className: 'functional-test',
    tools: [
      "Cucumber",
      "Mocha",
      "Chai",
    ]
  }
]