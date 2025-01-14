import { Router, RouterProvider, Route, RootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { ThesisPapers } from './pages/ThesisPapers';
import { AcademicProjects } from './pages/AcademicProjects';
import { SupervisorInfo } from './pages/SupervisorInfo';
import { Profile } from './pages/Profile';
import Login from './pages/Login';


// Create the root route
const rootRoute = new RootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  ),
});

// Create individual routes
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Login,
});
const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
});
const thesisRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/thesis',
  component: ThesisPapers,
});

const projectsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: AcademicProjects,
});

const supervisorsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/supervisors',
  component: SupervisorInfo,
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: Profile,
});

// Create and export the router
const routeTree = rootRoute.addChildren([
  indexRoute,
  thesisRoute,
  projectsRoute,
  supervisorsRoute,
  profileRoute,
  dashboardRoute,
]);

const router = new Router({ routeTree });

// App component
export default function App() {
  return <RouterProvider router={router} />;
}