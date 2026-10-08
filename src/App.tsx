import { Route, Routes } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Quote from './pages/Quote';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
