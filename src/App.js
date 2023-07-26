import { Routes, Route } from 'react-router-dom'
import Home from "./routes/home/home";
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout'
import SearchResult from './components/search-results/search-results';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
      <Route path='search-results' element={<SearchResult />} />
    </Routes>
  );
};

export default App;