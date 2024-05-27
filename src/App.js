
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Cryptocurrencies from './components/Cryptocurrencies';
import { Provider } from 'react-redux';
import appstore from './utils/store';
import Coin from './components/Coin';
import CoinDetails from './components/CoinDetails';

function App() {

  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Body />
    },
    {
      path: "/cryptocurrencies",
      element: <Cryptocurrencies />
    },
    {
      path:"/coin",
      element:<Coin/>
    },
    {
      path:"/coinDetail/:id",
      element:<CoinDetails/>
    }


  ])

  return (
    <Provider store={appstore}>
    <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
