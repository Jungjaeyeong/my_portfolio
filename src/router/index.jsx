import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('../pages/HomePage'))
const Project = lazy(() => import('../pages/Project'))
const About = lazy(() => import('../pages/About'))
const NotFound = lazy(() => import('../pages/NotFound'))

const RouterConfig = () => {
	const routes = useRoutes([
		{ path: '/*', element: <Home /> },
		{ path: '/about', element: <About /> },
		{ path: '/project', element: <Project /> },
		{ path: '*', element: <NotFound /> }
	])
	return routes
}

export default RouterConfig
