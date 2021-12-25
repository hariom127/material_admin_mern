import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// routes
import Router from './routes';
import AdminRoute from './adminRoute';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
// -----------------------------------------------

export default function App() {
  const auth = useSelector((state) => state.authState);
  console.log(auth, auth.authenticate, 'auth form app.js');
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.authenticate) {
      navigate('/login');
    }
  }, [auth]);

  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
      {auth && auth.authenticate ? <AdminRoute /> : ''}
    </ThemeConfig>
  );
}
