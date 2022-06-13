import { createGlobalStyle, css } from 'styled-components'

const globalStyle = css`
	* {
		box-sizing: border-box;
	}

	body {
		background-color: #f8f9fd;
		line-height: 1.4;
		font-family: Noto Sans, Noto Sans KR;
		color: #333;

		textarea {
			resize: none;
		}
	}

	button {
		text-decoration: none;
		border: 0;
		cursor: pointer;
	}
`

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`

export default GlobalStyle
