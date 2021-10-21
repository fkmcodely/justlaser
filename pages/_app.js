import '../styles/globals.css';
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Provider as ProviderSession } from 'next-auth/client';
import HeaderJustLaserCut from '../components/Header/HeaderJustLaserCut';
import '../styles/styles.scss';

function VisualApp({ Component, pageProps }) {
  return (
    <ProviderSession session={pageProps.session}>
      <Provider store={store}>
        <HeaderJustLaserCut />
        <Component {...pageProps} />
      </Provider>
    </ProviderSession>
  )
}

export default VisualApp
