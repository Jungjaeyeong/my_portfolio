import styled from 'styled-components'

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	padding: 50px 0;

	.profile {
		&__img {
			width: 150px;
			height: 150px;
			background-color: ${({ theme }) => theme.colors.primary};
		}

		&__name {
			font-size: ${({ theme }) => theme.fontSizes.big};
			font-weight: 500;
		}

		&__fe {
			font-size: ${({ theme }) => theme.fontSizes.xl};
		}
	}
	> span {
		font-size: ${({ theme }) => theme.fontSizes.base};
	}
`
