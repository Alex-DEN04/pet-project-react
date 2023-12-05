import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import { SharedLayout } from './components/SharedLayout/SharedLayout'

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/Projects/ProjectsPage'));
const TeamPage = lazy(() => import('./pages/Team/TeamPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="projects" element={<ProjectsPage />}></Route>
        <Route path="team" element={<TeamPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  )
}

export default App
