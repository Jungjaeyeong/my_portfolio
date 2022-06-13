import styled from 'styled-components'

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	.title {
		font-size: ${({ theme }) => theme.fontSizes.big};
		font-weight: 600;
	}
	.intro {
		font-size: ${({ theme }) => theme.fontSizes.lg};
	}
	.skill {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		gap: 10px;
		&__content {
			display: flex;
			flex-direction: column;

			align-items: center;
			> img {
				width: 60px;
				height: 60px;
			}
			&-js {
				display: flex;
				flex-direction: column;
				align-items: center;

				> img {
					width: 78px;
					height: 78px;
				}
			}
		}
	}
`
