import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import RouterConfig from './router'
import theme from './styles/theme'
import GlobalStyle from './styles/Globalstyled'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Suspense fallback={<span>...loading</span>}>
						<RouterConfig />
					</Suspense>
				</ThemeProvider>
			</BrowserRouter>
		</>
	)
}

export default App
