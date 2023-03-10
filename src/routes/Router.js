import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Seeting from 'src/views/seeting/Seeting';
import Formation from 'src/views/formation/Formation'
import Loadable from '../layouts/full/shared/loadable/Loadable';
import Dossier from 'src/views/Dossier/Dossier';
import Centre from 'src/views/Centre/Centre';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },{

    path:'/seeting',
    element : <FullLayout />,
    children:[
      { 
        path: '/seeting', exact: true, element: <Seeting />
       },
    ]


  },{

    path:'/dossier',
    element : <FullLayout />,
    children:[
      { 
        path: '/dossier', exact: true, element: <Dossier />
       },
    ]
  },{

    path:'/formation',
    element : <FullLayout />,
    children:[
      { 
        path: '/formation', exact: true, element: <Formation />
       },
    ]


  },{

    path:'/centre',
    element : <FullLayout />,
    children:[
      { 
        path: '/centre', exact: true, element: <Centre />
       },
    ]


  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  
];

export default Router;
