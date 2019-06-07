//import requireAuth from './hoc/requireAuth';
import App from './App';
import Home from './pages/home'

export default [
  {
    component: App,
    routes: [
      {
        component: Home,
        path: '/',
        auth: true,
        exact: true
      }
    ]
  }
];
