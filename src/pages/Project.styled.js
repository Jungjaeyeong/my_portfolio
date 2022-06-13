import styled from 'styled-components'

export const ProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	.project {
		display: flex;
		flex-direction: column;
		align-items: center;

		> img {
			width: 200px;
			height: 120px;
		}
	}

	.overlay {
		width: 940px;
		height: 300px;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 500px;
	}
`
