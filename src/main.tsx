import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from '@/providers/Providers';
import App from '@/App';
import '@/global_style/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
