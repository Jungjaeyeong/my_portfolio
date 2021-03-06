import { useLocation, useNavigate } from 'react-router-dom'

import { navMenus } from '../constant'
import {
	AppContainer,
	AppAside,
	AppWrapper,
	AppProject,
	AppMenus,
	AppDescript,
	AppContent,
	GithubIcon
} from './AppLayout.styled'

const AppLayout = ({ children }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const onMovePage = to => () => navigate(to)

	return (
		<AppContainer>
			<AppAside>
				<AppWrapper>
					<AppProject>
						<img
							src="https://avatars.githubusercontent.com/u/103166212?v=4"
							alt="github profile img"
						/>
						<h2>정재영</h2>
					</AppProject>
					<AppMenus>
						{navMenus.map(menu => (
							<div
								key={menu.name}
								className={`menu ${pathname === menu.to ? 'active' : ''}`}
								onClick={onMovePage(menu.to)}
							>
								{menu.name}
							</div>
						))}
					</AppMenus>
				</AppWrapper>
				<AppDescript>
					<a
						href="https://github.com/Jungjaeyeong"
						target="_blank"
						rel="noreferrer noopener"
					>
						<GithubIcon width="45" height="45" />
					</a>
					<span>Frontend Developer</span>
					<span>010-3369-8037</span>
				</AppDescript>
			</AppAside>
			<AppContent>{children}</AppContent>
		</AppContainer>
	)
}

export default AppLayout
