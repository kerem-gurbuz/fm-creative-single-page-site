import { STATIC_ROUTES, type StaticRoutes } from '../routes';

type NavLink = {
  path: StaticRoutes;
  label: string;
  variant?: 'button';
};

export const NAV_LINKS = [
  {
    path: STATIC_ROUTES.ABOUT,
    label: 'About',
  },
  {
    path: STATIC_ROUTES.SERVICE,
    label: 'Service',
  },
  {
    path: STATIC_ROUTES.PROJECTS,
    label: 'Projects',
  },
  {
    path: STATIC_ROUTES.SCHEDULE_CALL,
    label: 'Schedule a Call',
    variant: 'button',
  },
] as const;

type NavLinks = typeof NAV_LINKS;

/* 
  Note: Add more navigation-specific types if needed.
  ------------------------------------------------------------------------
  export type NavLinkVariant = 'button' | 'link' | 'dropdown';

  export type NavLinkWithIcon = NavLink & {
    icon?: string;
  };
 */

export type { NavLink, NavLinks };
