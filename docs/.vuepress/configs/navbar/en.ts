import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Walkthrough Harvest Moon',
    children: [
      {
        text: 'Harvest Moon Back to Nature',
        children: [
          {
            text: 'Sekilas Mengenai Game',
            link: '/walkthrough-harvest-moon-btn/sekilas-mengenai-game.html',
          },
          '/walkthrough-harvest-moon-btn/crop.md',
          '/walkthrough-harvest-moon-btn/animals.md',
          '/walkthrough-harvest-moon-btn/mining.md',
          '/walkthrough-harvest-moon-btn/fishing.md',
          '/walkthrough-harvest-moon-btn/tools.md',
          '/walkthrough-harvest-moon-btn/girls.md',
          '/walkthrough-harvest-moon-btn/characters.md',
          '/walkthrough-harvest-moon-btn/festivals.md',
          '/walkthrough-harvest-moon-btn/shops.md',
          '/walkthrough-harvest-moon-btn/cooking.md',
          '/walkthrough-harvest-moon-btn/berries.md',
          '/walkthrough-harvest-moon-btn/secrets.md',
          '/walkthrough-harvest-moon-btn/shipping-list.md',
          '/walkthrough-harvest-moon-btn/misc.md',
        ],
      },
    ],
  },
]
