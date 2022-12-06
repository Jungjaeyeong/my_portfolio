// import { ReactComponent as HtmlIcon } from './assets/svg/html.svg'
// import { ReactComponent as JavascriptIcon } from './assets/svg/JavaScript.svg'
// import { ReactComponent as MongodbIcon } from './assets/svg/mongodb.svg'
// import { ReactComponent as MysqlIcon } from './assets/svg/mysql.svg'
// import { ReactComponent as NextjsIcon } from './assets/svg/nextjs.svg'
// import { ReactComponent as NodejsIcon } from './assets/svg/nodejs.svg'
// import { ReactComponent as ReactIcon } from './assets/svg/react.svg'
// import { ReactComponent as TypescriptIcon } from './assets/svg/typescript.svg'

export const navMenus = [
	{ id: 1, name: 'About Me', to: '/' },
	{ id: 2, name: 'Skills', to: '/skill' },
	{ id: 3, name: 'Projects', to: '/project' }
]

export const frontSkills = [
	{ id: 1, name: 'HTML', icon: 'images/html.png' },
	{ id: 2, name: 'CSS', icon: 'images/css.png' },
	{ id: 3, name: 'Javascript', icon: 'images/javascript.png' },
	{ id: 4, name: 'Typescript', icon: 'images/typescript.png' },
	{ id: 5, name: 'React', icon: 'images/react.png' },
	{ id: 6, name: 'Redux', icon: 'images/redux.png' },
	{ id: 7, name: 'Nextjs', icon: 'images/nextjs.png' }
]

export const backSkills = [
	{ id: 1, name: 'Nodejs', icon: 'images/nodejs.png' },
	{ id: 2, name: 'Express', icon: 'images/express.png' },
	{ id: 3, name: 'Mongodb', icon: 'images/mongodb.png' },
	{ id: 4, name: 'Mysql', icon: 'images/mysql.png' }
]

export const projectItem = [
	{
		id: 1,
		title: '이츠 (팀 프로젝트)',
		img: '/images/its.png',
		content: '이츠는 스터디 & 프로젝트 매칭 플랫폼입니다.',
		info: '첫 번째 팀 프로젝트이며 Front-end를 맡아서 진행했습니다.'
	},
	{
		id: 2,
		title: '포트폴리오 웹 (개인 프로젝트)',
		img: '/images/portfolio.png',
		content: 'React 기반으로 만든 개인 포트폴리오 웹입니다.'
	}
]
