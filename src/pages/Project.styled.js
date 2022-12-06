import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProjectContainer = styled.div`
	padding: 20px 15px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	.imgbox {
		display: flex;
		align-items: flex-start;
		gap: 50px;
		position: relative;
		.textbox1 {
			position: absolute;
			top: 0;
			right: 130px;
			display: flex;
			flex-direction: column;
			gap: 15px;
			font-size: 20px;
		}
		.textbox2 {
			top: 250px;
			right: 50px;
			position: absolute;
			display: flex;
			flex-direction: column;
			gap: 15px;
			font-size: 20px;
		}
		.p1 {
			position: absolute;
			top: 0;
			border: solid 1px ${({ theme }) => theme.colors.lineColor};
			border-radius: 5px;
			width: 450px;
			cursor: pointer;
			&:hover {
				border: 1px solid ${({ theme }) => theme.colors.primary};
				width: 465px;
			}
		}
		.p2 {
			position: absolute;
			top: 250px;
			border: solid 1px ${({ theme }) => theme.colors.lineColor};
			border-radius: 5px;
			width: 450px;
			cursor: pointer;
			&:hover {
				border: 1px solid ${({ theme }) => theme.colors.primary};
				width: 465px;
			}
		}
		.name {
			font-size: 32px;
			font-weight: 400;
		}
		.type {
			font-size: 20px;
			margin-left: 15px;
			font-weight: 400;
		}
	}
`
