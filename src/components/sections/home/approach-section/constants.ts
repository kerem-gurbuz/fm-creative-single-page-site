/* -------------------------------------------------------------------------- */
/*                         Approach Section Constants                         */
/* -------------------------------------------------------------------------- */

import type { ApproachData } from './types';

export const SECTION_ID = 'approach-section';
export const SECTION_HEADING_ID = 'approach-heading';

export const APPROACH_DATA: ApproachData = {
  steps: [
    {
      id: 'brand-strategy',
      number: 1,
      title: 'Brand Strategy',
      description:
        'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.',
    },
    {
      id: 'brand-design',
      number: 2,
      title: 'Brand Design',
      description:
        "Keeping the brand design unique and meaningful helps in communicating the brand's timeless value effectively.",
    },
    {
      id: 'web-design',
      number: 3,
      title: 'Web Design',
      description:
        'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.',
    },
  ],
};
