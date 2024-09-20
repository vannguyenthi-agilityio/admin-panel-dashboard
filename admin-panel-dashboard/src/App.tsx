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
const AnalyticsPage = lazy(() => import('@/pages/Analytics'));
const MessagesPage = lazy(() => import('@/pages/Messages'));
const SettingPage = lazy(() => import('@/pages/Setting'));
const HelpCentrePage = lazy(() => import('@/pages/HelpCentre'));
const DetailPage = lazy(() => import('@/pages/Customers/Detail'));
const ListPage = lazy(() => import('@/pages/Customers/List'));
const CustomerEditPage = lazy(() => import('@/pages/Customers/Edit'));
const CustomerCreatePage = lazy(() => import('@/pages/Customers/Create'));
import Layout from './pages/Layout';
import ErrorPage from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <ToastProvider>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path='*'
              element= {<ErrorPage />}
            />
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
              path={ROUTES.ANALYTICS}
              element= {
                <Suspense fallback={
                  <Loading
                    additionalClass="flex justify-center items-center min-h-[calc(100vh)]"
                    isFullWidth={false}
                  />
                }>
                  <AnalyticsPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.MESSAGES}
              element= {
                <Suspense fallback={
                  <Loading
                    additionalClass="flex justify-center items-center min-h-[calc(100vh)]"
                    isFullWidth={false}
                  />
                }>
                  <MessagesPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.SETTINGS}
              element= {
                <Suspense fallback={
                  <Loading
                    additionalClass="flex justify-center items-center min-h-[calc(100vh)]"
                    isFullWidth={false}
                  />
                }>
                  <SettingPage />
                </Suspense>
              }
            />
            <Route
              path={ROUTES.HELP_CENTRE}
              element= {
                <Suspense fallback={
                  <Loading
                    additionalClass="flex justify-center items-center min-h-[calc(100vh)]"
                    isFullWidth={false}
                  />
                }>
                  <HelpCentrePage />
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
