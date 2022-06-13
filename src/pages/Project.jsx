import React from 'react'

import { ProjectContainer } from './Project.styled'

const Project = () => {
	return (
		<ProjectContainer>
			<h2 className="title">Project</h2>
			<div className="project">
				<img src="/src/public/images/it.png" />
				<span>스터디 매칭 플랫폼 It&apos;s</span>
			</div>
		</ProjectContainer>
	)
}

export default Project
