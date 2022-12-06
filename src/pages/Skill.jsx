import React from 'react'

import { frontSkills, backSkills } from '../constant'
import { SkillContainer } from './Skill.styled'

const Skill = () => {
	return (
		<SkillContainer>
			<div className="skill">
				<span className="skill__title">Front-end</span>
				<div className="skill__box">
					{frontSkills.map(skills => (
						<div key={skills.id} className="skill__box-item">
							<img src={skills.icon} className="skill__box-img" />
							<span>{skills.name}</span>
						</div>
					))}
				</div>
				<span className="skill__title">Back-end</span>
				<div className="skill__box">
					{backSkills.map(skills => (
						<div key={skills.id} className="skill__box-item">
							<img src={skills.icon} className="skill__box-img" />
							<span>{skills.name}</span>
						</div>
					))}
				</div>
			</div>
		</SkillContainer>
	)
}

export default Skill
