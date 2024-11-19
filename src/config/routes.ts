/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

export const STATIC_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICE: '/service',
  PROJECTS: '/projects',
  SCHEDULE_CALL: '/schedule-call',
} as const;

export const DYNAMIC_ROUTES = {
  SERVICE_CATEGORY: (category: string) => `/service/${category}` as const,
  PROJECT_DETAIL: (id: string) => `/projects/${id}` as const,
} as const;

export const ROUTES = {
  ...STATIC_ROUTES,
  ...DYNAMIC_ROUTES,
} as const;

type StaticRoutes = (typeof STATIC_ROUTES)[keyof typeof STATIC_ROUTES];
type DynamicRoutesFn = (typeof DYNAMIC_ROUTES)[keyof typeof DYNAMIC_ROUTES];
type DynamicRoutes = ReturnType<DynamicRoutesFn>;
type AppRoutes = StaticRoutes | DynamicRoutes;

export type { AppRoutes, DynamicRoutes, StaticRoutes };
