import React from 'react'
import { Navigate, Route, RouteProps } from 'react-router-dom'

// components
import PrivateRoute from './PrivateRoute'

// auth
const Login = React.lazy(() => import('../pages/auth/Login'))
const Logout = React.lazy(() => import('../pages/auth/Logout'))

// error
const Error404 = React.lazy(() => import('../pages/error/Error404'))
const Error500 = React.lazy(() => import('../pages/error/Error500'))

//
const Dashboard = React.lazy(() => import('../pages/backoffice/dashboard'))
const Categories = React.lazy(() => import('../pages/backoffice/categories'))
const Anggota = React.lazy(() => import('../pages/backoffice/anggota'))
const Home = React.lazy(() => import('../pages/backoffice/home'))
const TentangKami = React.lazy(() => import('../pages/backoffice/tentangKami'))
const PublikasiIlmiah = React.lazy(() => import('../pages/backoffice/publikasiIlmiah'))
const Regulasi = React.lazy(() => import('../pages/backoffice/regulasi'))
const Sertifikasi = React.lazy(() => import('../pages/backoffice/sertifikasi'))


const SosialMedia = React.lazy(() => import('../pages/backoffice/sosmed'))
const Galleri = React.lazy(() => import('../pages/backoffice/galleri'))
const WebSettings = React.lazy(() => import('../pages/backoffice/webSettings'))



export interface RoutesProps {
	path: RouteProps['path']
	name?: string
	element?: RouteProps['element']
	route?: any
	exact?: boolean
	icon?: string
	header?: string
	roles?: string[]
	children?: RoutesProps[]
}

// dashboards
const BackOffice: RoutesProps = {
	path: '/dashboard',
	name: 'Dashboard',
	icon: 'home',
	header: 'Navigation',
	children: [
		{
			path: '/',
			name: 'Root',
			element: <Navigate to="/backoffice/dashboard" />,
			route: PrivateRoute,
		},
		{
			path: '/backoffice/dashboard',
			name: 'Dashboard',
			element: <Dashboard />,
			route: PrivateRoute,
		},
        {
			path: '/backoffice/home',
			name: 'Home',
			element: <Home />,
			route: PrivateRoute,
		},
        {
			path: '/backoffice/tentang-kami',
			name: 'Tentang Kami',
			element: <TentangKami />,
			route: PrivateRoute,
		},
          {
			path: '/backoffice/publikasi-ilmiah',
			name: 'Publikasi Ilmiah',
			element: <PublikasiIlmiah />,
			route: PrivateRoute,
		},
         {
			path: '/backoffice/regulasi',
			name: 'Regulasi',
			element: <Regulasi />,
			route: PrivateRoute,
		},
        {
			path: '/backoffice/sertifikasi',
			name: 'Sertifikasi',
			element: <Sertifikasi />,
			route: PrivateRoute,
		},
        {
			path: '/backoffice/list-anggota',
			name: 'anggota',
			element: <Anggota />,
			route: PrivateRoute,
		},
		{
			path: '/backoffice/categories',
			name: 'categories',
			element: <Categories />,
			route: PrivateRoute,
		},
		{
			path: '/backoffice/sosial-media',
			name: 'sosial-media',
			element: <SosialMedia />,
			route: PrivateRoute,
		},
		{
			path: '/backoffice/galleri',
			name: 'galleri',
			element: <Galleri />,
			route: PrivateRoute,
		},
		{
			path: '/backoffice/web-settings',
			name: 'websettings',
			element: <WebSettings />,
			route: PrivateRoute,
		},
	],
}



// auth
const authRoutes: RoutesProps[] = [
	{
		path: '/auth/login',
		name: 'Login',
		element: <Login />,
		route: Route,
	},
	{
		path: '/auth/logout',
		name: 'Logout',
		element: <Logout />,
		route: Route,
	},
]

// public routes
const otherPublicRoutes = [
	{
		path: '*',
		name: 'Error - 404',
		element: <Error404 />,
		route: Route,
	},
	{
		path: '/error-404',
		name: 'Error - 404',
		element: <Error404 />,
		route: Route,
	},
	{
		path: '/error-500',
		name: 'Error - 500',
		element: <Error500 />,
		route: Route,
	},
]

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
	let flatRoutes: RoutesProps[] = []

	routes = routes || []
	routes.forEach((item: RoutesProps) => {
		flatRoutes.push(item)
		if (typeof item.children !== 'undefined') {
			flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]
		}
	})
	return flatRoutes
}

// All routes
const authProtectedRoutes = [BackOffice]
const publicRoutes = [...authRoutes, ...otherPublicRoutes]

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes])
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes])
export { publicRoutes, authProtectedRoutes, authProtectedFlattenRoutes, publicProtectedFlattenRoutes }
