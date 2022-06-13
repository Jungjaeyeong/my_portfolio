import styled from 'styled-components'

export const ProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	.title {
		font-size: ${({ theme }) => theme.fontSizes.big};
		font-weight: 600;
	}
	.project {
		background-color: ${({ theme }) => theme.colors.gray_ee};
		width: 320px;
		height: 260px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;
		border-radius: 15px;
		> img {
			width: 300px;
			height: 200px;
		}
		> span {
			font-size: ${({ theme }) => theme.fontSizes.lg};
		}
	}
`
