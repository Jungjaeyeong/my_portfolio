import styled from 'styled-components'

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	padding: 30px;

	.about {
		&-intro {
			font-size: 32px;
			font-weight: 500;
			&_emp {
				color: ${({ theme }) => theme.colors.primary};
				font-weight: 600;
			}
		}
		&-content {
			display: flex;
			flex-direction: column;
			gap: 50px;
			&__title {
				font-size: 28px;
				margin-bottom: 20px;
				font-weight: 500;
			}
			&__info {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}
			&_1 {
				display: flex;
				flex-direction: column;
				font-size: 20px;
			}
			&_2 {
				display: flex;
				flex-direction: column;
				font-size: 20px;
			}
		}
	}
`
