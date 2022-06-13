import React, { Suspense } from 'react'

import Profile from '../Component/Profile'

import { HomePageContainer } from './HomePage.styled'
import { portfolioNav } from '../constant/data'
import RouterConfig from '../router'

import { Link } from 'react-router-dom'
import About from './About'

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
				<RouterConfig />
			</div>
		</HomePageContainer>
	)
}

export default HomePage
