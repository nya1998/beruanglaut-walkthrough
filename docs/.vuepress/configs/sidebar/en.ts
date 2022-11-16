import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/page.md',
        '/guide/markdown.md',
        '/guide/assets.md',
        '/guide/i18n.md',
        '/guide/deployment.md',
        '/guide/theme.md',
        '/guide/plugin.md',
        '/guide/bundler.md',
        '/guide/migration.md',
      ],
    },
  ],
  '/advanced/': [
    {
      text: 'Advanced',
      children: [
        '/advanced/architecture.md',
        '/advanced/plugin.md',
        '/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/advanced/cookbook/README.md',
        '/advanced/cookbook/usage-of-client-config.md',
        '/advanced/cookbook/adding-extra-pages.md',
        '/advanced/cookbook/making-a-theme-extendable.md',
        '/advanced/cookbook/passing-data-to-client-code.md',
        '/advanced/cookbook/markdown-and-vue-sfc.md',
      ],
    },
  ],
  '/walkthrough-harvest-moon-btn': [
    {
      text: 'Harvest Moon Back to Nature',
      collapsible: true,
      children: [
          { text: 'Sekilas Mengenai Game', link: '/walkthrough-harvest-moon-btn/sekilas-mengenai-game.html', },
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
}
