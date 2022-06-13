import { ReactComponent as HtmlIcon } from './assets/svg/html.svg'
import { ReactComponent as JavascriptIcon } from './assets/svg/javascript.svg'
import { ReactComponent as MongodbIcon } from './assets/svg/mongodb.svg'
import { ReactComponent as MysqlIcon } from './assets/svg/mysql.svg'
import { ReactComponent as NextjsIcon } from './assets/svg/nextjs.svg'
import { ReactComponent as NodejsIcon } from './assets/svg/nodejs.svg'
import { ReactComponent as ReactIcon } from './assets/svg/react.svg'
import { ReactComponent as TypescriptIcon } from './assets/svg/typescript.svg'

export const navMenus = [
	{ name: 'About Me', to: '/' },
	{ name: 'Projects', to: '/project' }
]

export const aboutSkills = [
	{ name: 'HTML', Icon: HtmlIcon },
	{ name: 'Javascript', Icon: JavascriptIcon },
	{ name: 'Typescript', Icon: TypescriptIcon },
	{ name: 'React', Icon: ReactIcon },
	{ name: 'Nextjs', Icon: NextjsIcon },
	{ name: 'Nodejs', Icon: NodejsIcon },
	{ name: 'Mysql', Icon: MysqlIcon },
	{ name: 'Mongodb', Icon: MongodbIcon }
]

export const projectItem = [
	{ id: 1, title: '스터디 매칭 플랫폼 이츠', img: '/images/it.png' }
]
