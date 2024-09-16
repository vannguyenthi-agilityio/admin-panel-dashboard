import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Constants
import { ROUTES } from './constants';

// Components
import { ErrorBoundary } from './components';

// Context
import ToastProvider from "@/context/toast";

// Components
import { Loading } from '@/components';

// Pages
const HomePage = lazy(() => import('@/pages/Home'));
const DetailPage = lazy(() => import('@/pages/Detail'));
const ListPage = lazy(() => import('@/pages/List'));
const CustomerEditPage = lazy(() => import('@/pages/Edit'));
const CustomerCreatePage = lazy(() => import('@/pages/Create'));
import Layout from './pages/Layout';

const App = () => (
  <BrowserRouter>
    <ToastProvider>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path={ROUTES.HOME}
              element= {
                <Suspense fallback={
                  <Loading
                    additionalClass="flex justify-center items-center min-h-[calc(100vh)]"
                    isFullWidth={false}
                  />
                }>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.CUSTOMERS}
              element={
                <Suspense fallback={
                  <Loading
                    additionalClass="flex justify-center items-center min-h-[calc(100vh)]"
                    isFullWidth={false}
                  />
                }>
                  <ListPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.DETAIL}
              element={
                <Suspense fallback={
                  <Loading
                    additionalClass="flex justify-center items-center min-h-[calc(100vh)]"
                    isFullWidth={false}
                  />
                }>
                  <DetailPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.EDIT}
              element={
                <Suspense fallback={
                  <Loading
                    additionalClass="flex justify-center items-center min-h-[calc(100vh)]"
                    isFullWidth={false}
                  />
                }>
                  <CustomerEditPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.CREATE}
              element={
                <Suspense fallback={
                  <Loading
                    additionalClass="flex justify-center items-center min-h-[calc(100vh)]"
                    isFullWidth={false}
                  />
                }>
                  <CustomerCreatePage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </ErrorBoundary>
    </ToastProvider>
  </BrowserRouter>
);

export default App;
