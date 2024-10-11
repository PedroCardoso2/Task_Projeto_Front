import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { RouteElement, routes } from './routes/routes';

function App() {


  return (
    
    <Router>
    <Routes>
      {
        routes.map((route: RouteElement , idx: number) => {
          return <Route key={idx} path={route.path} element={route.element}/>
        })
      }
    </Routes>
  </Router>
  )
}

export default App
