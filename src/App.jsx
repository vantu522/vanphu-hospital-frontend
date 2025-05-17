import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route 
            key={index}
            path={route.path}
            element={route.element}
          >
            {route.children?.map((child, idx) => (
              <Route 
                key={idx}
                index={child.index}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
