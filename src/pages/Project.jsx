import React from 'react'
import { ProjectContainer } from './Project.styled'

const Project = () => {
	return (
		<ProjectContainer>
			<div className="imgbox">
				<img className="p1" src="images/its.png" />
				<div className="textbox1">
					<span className="name">
						It's <span className="type">팀 프로젝트</span>
					</span>
					<span>온라인 스터디 매칭 플랫폼 It's 입니다.</span>
				</div>
			</div>
			<div className="imgbox">
				<img className="p2" src="images/portfolio.png" />
				<div className="textbox2">
					<span className="name">
						개인 포트폴리오 웹<span className="type">개인 프로젝트</span>
					</span>
					<span>react 기반으로 만든 개인 포트폴리오 웹 입니다.</span>
				</div>
			</div>
		</ProjectContainer>
	)
}

export default Project
