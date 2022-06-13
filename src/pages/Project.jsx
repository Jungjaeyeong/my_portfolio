import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { projectItem } from '../constant'
import {
	ActiveItem,
	Item,
	Grid,
	Overlay,
	ProjectContainer
} from './Project.styled'

const Project = () => {
	const [projectId, setProjectId] = useState(null)

	const onChangeProjectId = id => () => setProjectId(id)

	const projectItemCurrentIndex = () =>
		projectItem.findIndex(item => item.id === projectId)

	return (
		<ProjectContainer>
			<Grid>
				{projectItem.map(item => (
					<Item
						key={item.id}
						layoutId={`box-${item.id}`}
						onClick={onChangeProjectId(item.id)}
					>
						<motion.img src={item.img} layoutId={`img-${item.id}`} />
						<motion.span layoutId={`title-${item.id}`}></motion.span>
					</Item>
				))}
			</Grid>

			<AnimatePresence>
				{projectId ? (
					<Overlay
						initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
						animate={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
						exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
						onClick={onChangeProjectId(null)}
					>
						<ActiveItem layoutId={`box-${projectId}`} className="box">
							<motion.img
								src={projectItem[projectItemCurrentIndex(projectId)].img}
								layoutId={`img-${projectId}`}
							/>
							<motion.span layoutId={`title-${projectId}`}>
								{projectItem[projectItemCurrentIndex(projectId)].title} <br />
								{projectItem[projectItemCurrentIndex(projectId)].content}
								<br />
								{projectItem[projectItemCurrentIndex(projectId)].info}
							</motion.span>
						</ActiveItem>
					</Overlay>
				) : null}
			</AnimatePresence>
		</ProjectContainer>
	)
}

export default Project
