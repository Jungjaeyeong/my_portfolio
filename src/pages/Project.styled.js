import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProjectContainer = styled.div`
	padding: 20px 15px;
`
export const Item = styled(motion.div)`
	width: 100%;
	height: 100%;
	cursor: pointer;
	display: flex;
	border: solid 1px ${({ theme }) => theme.colors.gray_ee};
	border-radius: 15px;
	padding: 10px;

	> img {
		width: 100%;
	}

	> span {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		font-weight: 400;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const ActiveItem = styled(Item)`
	width: 70%;
	height: auto;
	background-color: white;
	padding: 30px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 15px;
`

export const Overlay = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 20;
`
