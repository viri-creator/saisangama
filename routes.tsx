import type { RouteConfig } from '@react-router/dev/routes';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SpecialtyDetailPage } from './pages/SpecialtyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { BookingPage } from './pages/BookingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const routes: RouteConfig = [
  { path: '/', Component: HomePage },
  { path: '/about', Component: AboutPage },
  { path: '/services', Component: ServicesPage },
  { path: '/services/:specialtyId', Component: SpecialtyDetailPage },
  { path: '/doctors', Component: DoctorsPage },
  { path: '/book-appointment', Component: BookingPage },
  { path: '/privacy', Component: PrivacyPage },
  { path: '/terms', Component: TermsPage },
  { path: '*', Component: NotFoundPage },
];
