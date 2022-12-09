import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
