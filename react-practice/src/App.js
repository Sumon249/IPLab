import './App.css';
import Navigation from './components/Navigation/Navigation';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Dinner from './components/Dinner/Dinner';
import Snacks from './components/Snacks/Snacks'
import Lunch from './components/Lunch/Lunch'
import Breakfast from './components/Breakfast/Breakfast'
import Root from './components/Root/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element:<Breakfast />
        },
        {
          path: '/Lunch',
          element: <Lunch></Lunch>
        },
        {
          path: '/Dinner',
          element: <Dinner></Dinner>
        },
        {
          path: '/Snacks',
          element: <Snacks></Snacks>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router = {router}></RouterProvider>
    </>
  );
}

export default App;
