import './App.css';
import { Routes, Route } from 'react-router-dom';
import { RouteElement, routes } from './routes/routes';
import RotaPrivada from './routes/RotaPrivada';

function App() {
  return (
    <Routes>
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
