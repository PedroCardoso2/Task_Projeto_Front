import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RouteElement, routes } from './routes/routes';
import RotaPrivada from './routes/RotaPrivada';
import { RouthPath } from './routes/route-path';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to={RouthPath.LOGIN} />} />
      {routes.map((route: RouteElement, idx: number) => (
        <Route
          key={idx}
          path={route.path}
          element={
            route.private ? <RotaPrivada element={route.element} /> : route.element
          }
        />
      ))}
    </Routes>
  );
}

export default App;
