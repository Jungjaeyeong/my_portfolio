import styled from 'styled-components'

export const HomePageContainer = styled.div`
	width: 100%;
	max-width: 1364px;
	margin: 100px auto;
	display: flex;
	gap: 50px;

	.home {
		&__left {
			width: 25%;
			background-color: ${({ theme }) => theme.colors.white_ff};
		}
		&__right {
			width: 75%;
			background-color: ${({ theme }) => theme.colors.white_ff};
			display: flex;
			flex-direction: column;
			gap: 30px;
			padding: 20px;
			.nav {
				display: flex;
				justify-content: center;
				gap: 50px;
				font-size: ${({ theme }) => theme.fontSizes.xxl};
				> span {
					cursor: pointer;
				}
			}
		}
	}
`
