import NProgress from 'nprogress';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { lazy, useEffect, Suspense, Fragment } from 'react';

import Layout from 'app/layout';
import LoadingScreen from 'app/components/loadingScreen';
import GuestProtect from 'app/components/auth/GuestProtect';
import AuthProtect from 'app/components/auth/AuthProtect';

function RouteProgress(props) {
  NProgress.configure({
    speed: 500,
    showSpinner: false,
  });

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, []);

  return <Route {...props} />;
}

export function renderRoutes(routes) {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          {routes.map((route, i) => {
            const Component = route.component;
            const Guard = route.guard || Fragment;
            const Layout = route.layout || Fragment;

            return (
              <RouteProgress
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <Guard>
                    <Layout>{route.path !== '/' ? <Component {...props} /> : route.component}</Layout>
                  </Guard>
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

const routes = [
  {
    exact: true,
    path: '/',
    component: <Redirect to="/login" />,
  },
  {
    exact: true,
    guard: GuestProtect,
    path: '/login',
    component: lazy(() => import('app/pages/auth')),
  },
  {
    exact: true,
    guard: AuthProtect,
    layout: Layout,
    path: '/schedule',
    component: lazy(() => import('app/pages/schedule')),
  },
  {
    exact: true,
    guard: AuthProtect,
    layout: Layout,
    path: '/leaderboard',
    component: lazy(() => import('app/pages/leaderboard')),
  },
  {
    exact: true,
    path: '/404',
    layout: Layout,
    component: lazy(() => import('app/components/404Page'))
  },
  {
    component: () => <Redirect to="/404" />
  }
];

export default routes;
