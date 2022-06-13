import styled from 'styled-components'

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	.intro {
		font-size: ${({ theme }) => theme.fontSizes.lg};

		&__title {
			font-size: ${({ theme }) => theme.fontSizes.big};
			font-weight: 600;
		}
	}

	.skill {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5px;

		&__box {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 10px;
			border: 1px solid ${({ theme }) => theme.colors.lineColor};
			border-radius: 5px;
			transition: 300ms;
			cursor: default;
			padding: 20px 0;

			&:hover {
				border: 1px solid ${({ theme }) => theme.colors.primary};
			}

			&-img {
				width: 50px;
				height: 50px;
			}
		}
	}
`
