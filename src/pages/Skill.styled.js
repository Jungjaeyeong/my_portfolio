import styled from 'styled-components'

export const SkillContainer = styled.div`
	padding: 10px;
	.skill {
		display: flex;
		flex-direction: column;
		gap: 20px;
		&__title {
			font-size: 20px;
			padding: 10px;
		}

		&__box {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5px;

			&-item {
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
			}

			&-img {
				width: 50px;
				height: 50px;
			}
		}
	}
`
