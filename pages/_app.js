import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MediaContextProvider } from '../lib/Media';

function MyApp({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <Component {...pageProps} />
    </MediaContextProvider>
  );
}

export default MyApp;
