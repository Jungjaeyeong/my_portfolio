import React from 'react'

import { aboutSkill } from '@/constant'
import { AboutContainer } from './About.styled'

const About = () => {
	return (
		<AboutContainer>
			<div className="intro">
				<h2 className="intro__title">
					안녕하세요 프론트앤드 개발자 정재영입니다.
				</h2>
				<span>
					대학교에 들어와 웹 디자인을 시작으로 현재는 개발자가 되기 위해
					공부하는 중입니다.
					<br />팀 프로젝트 경험은 아직 한 번밖에 없지만 이 한 번의 경험으로
					많은 것을 배웠고 <br />
					앞으로도 항상 배우려는 자세로 꾸준히 성장하는 개발자가 되겠습니다.
				</span>
			</div>
			<h2 className="title">skills</h2>
			<div className="skill">
				{aboutSkill.map(({ name, Icon }) => (
					<div key={name} className="skill__box">
						<Icon className="skill__box-img" />
						<span>{name}</span>
					</div>
				))}
			</div>
		</AboutContainer>
	)
}

export default About
