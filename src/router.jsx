import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Project = lazy(() => import('./pages/Project'))

const NotFound = lazy(() => import('./pages/NotFound'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },

		{ path: '/project', element: <Project /> },
		{ path: '*', element: <NotFound /> }
	])
	return routes
}

export default RouterConfig
