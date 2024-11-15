/* -------------------------------------------------------------------------- */
/*                         Portfolio Section Constants                        */
/* -------------------------------------------------------------------------- */

import type { PortfolioData } from '../types';

import { BRAND_IDENTITY_MERCHANDISE_SLIDE } from './brand-identity-merchandise';
import { BRAND_IDENTITY_WEB_DESIGN_SLIDE } from './brand-identity-web-design';
import { BRAND_NAMING_GUIDELINES_SLIDE } from './brand-naming-guidelines';

export const SECTION_ID = 'portfolio-section';

export const PORTFOLIO_DATA: PortfolioData = {
  slides: [
    BRAND_NAMING_GUIDELINES_SLIDE,
    BRAND_IDENTITY_MERCHANDISE_SLIDE,
    BRAND_IDENTITY_WEB_DESIGN_SLIDE,
  ],
};
