import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/shared/ui/Layout';
import { HomePage } from '@/pages/HomePage';
import { TermsPage } from '@/pages/TermsPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { SupportPage } from '@/pages/SupportPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/terms', element: <TermsPage /> },
      { path: '/privacy', element: <PrivacyPage /> },
      { path: '/support', element: <SupportPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
