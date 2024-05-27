
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Cryptocurrencies from './components/Cryptocurrencies';


function App() {

  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Body />
    },
    {
      path: "/cryptocurrencies",
      element: <Cryptocurrencies />
    }


  ])

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
