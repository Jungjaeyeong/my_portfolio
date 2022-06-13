import React, { Suspense } from 'react'

import Profile from '../components/Profile'

import { HomePageContainer } from './HomePage.styled'
import { portfolioNav } from '../constant/data'
import RouterConfig from '../router'

import { Link } from 'react-router-dom'
import About from './About'
import Project from './Project'

const HomePage = () => {
	return (
		<HomePageContainer>
			<div className="home__left">
				<Profile />
			</div>
			<div className="home__right">
				<div className="nav">
					{portfolioNav.map(menu => (
						<Link key={menu.id} to={menu.to}>
							{menu.name}
						</Link>
					))}
				</div>
				<Project />
			</div>
		</HomePageContainer>
	)
}

export default HomePage
