import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { projectItem } from '../constant'
import { ProjectContainer } from './Project.styled'

const Project = () => {
	const [clicked, setClicked] = useState(false)
	const toggle = () => setClicked(prev => !prev)
	return (
		<ProjectContainer>
			<h2 className="title">Project</h2>

			{projectItem.map(item => (
				<div onClick={toggle} key={item.id} className="project">
					<img src={item.img} />
					<span>{item.title}</span>
				</div>
			))}

			{clicked ? <div className="overlay"></div> : null}
		</ProjectContainer>
	)
}

export default Project
