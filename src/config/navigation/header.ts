import { STATIC_ROUTES, type StaticRoutes } from '../routes';

type NavLink = {
  path: StaticRoutes;
  label: string;
  variant: 'link' | 'button';
};

export const NAV_LINKS: NavLink[] = [
  {
    path: STATIC_ROUTES.ABOUT,
    label: 'About',
    variant: 'link',
  },
  {
    path: STATIC_ROUTES.SERVICE,
    label: 'Service',
    variant: 'link',
  },
  {
    path: STATIC_ROUTES.PROJECTS,
    label: 'Projects',
    variant: 'link',
  },
  {
    path: STATIC_ROUTES.SCHEDULE_CALL,
    label: 'Schedule a Call',
    variant: 'button',
  },
];

type NavLinks = typeof NAV_LINKS;

export type { NavLink, NavLinks };
