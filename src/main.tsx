import React from 'react'
import 'daisyui/dist/full.css';
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.tsx';
import { store } from './redux/store.ts'
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store} >
        <RouterProvider router={router} />
        <ToastContainer />
        <Toaster position="top-right"/>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
