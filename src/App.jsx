import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
     <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
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
