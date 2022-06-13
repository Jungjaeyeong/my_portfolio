import styled from 'styled-components'
import { ReactComponent } from '@/assets/svg/github.svg'

export const AppContainer = styled.div`
	width: 1364px;
	max-width: 80%;
	height: calc(100vh * 0.9);
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const AppAside = styled.div`
	width: 25%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 40px 20px;
	border: 1px solid ${({ theme }) => theme.colors.lineColor};
`

export const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`

export const AppProject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	> img {
		width: 80%;
		border-radius: 5px;
	}

	> h2 {
		font-size: ${({ theme }) => theme.fontSizes.xxxl};
		font-weight: 500;
	}
`

export const AppMenus = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	.menu {
		width: 100%;
		border: 1px solid ${({ theme }) => theme.colors.gray_ee};
		border-radius: 5px;
		padding: 8px 0;
		display: flex;
		justify-content: center;
		font-size: ${({ theme }) => theme.fontSizes.lg};
		color: ${({ theme }) => theme.colors.gray_33};
		text-decoration: none;
		cursor: pointer;
		transition: 200ms;

		&.active {
			background-color: ${({ theme }) => theme.colors.bgColor};
			border: 1px solid ${({ theme }) => theme.colors.primary};
			color: ${({ theme }) => theme.colors.primary};
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.bgColor};
			border: 1px solid ${({ theme }) => theme.colors.primary};
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`

export const AppDescript = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`

export const GithubIcon = styled(ReactComponent)`
	cursor: pointer;

	&:hover {
		.cls-1 {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}

	.cls-1 {
		fill: ${({ theme }) => theme.colors.gray_77};
		transition: 200ms;
	}
`
