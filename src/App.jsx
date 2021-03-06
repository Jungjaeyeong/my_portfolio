import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyled'
import theme from './styles/theme'
import AppLayout from './components/AppLayout'
import RouterConfig from './router'

const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;

	@media ${({ theme }) => theme.device.tablet} {
		height: auto;
	}
`

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Container>
					<AppLayout>
						<Suspense fallback={<span>…loading</span>}>
							<RouterConfig />
						</Suspense>
					</AppLayout>
				</Container>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
