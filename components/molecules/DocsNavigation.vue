<template>
  <nav class="bg-blue-50 p-6 min-h-full md:w-1/4 md:min-w-1/4">
    <ul class="text-sm">
      <li v-for="item in items" :key="item.path">
        <span
          class="item flex w-full items-center text-white py-2 uppercase text-xs font-bold opacity-50"
        >
          {{ item.text }}
        </span>
        <ul v-if="item.children">
          <li v-for="subitem in item.children" :key="subitem.path">
            <nuxt-link
              :to="subitem.path"
              class="subitem block text-white py-2 px-6"
            >
              {{ subitem.text }}
            </nuxt-link>
            <ul v-if="subitem.children">
              <li v-for="sub2xitem in subitem.children" :key="sub2xitem.path">
                <nuxt-link
                  :to="sub2xitem.path"
                  class="subitem block text-white py-2 pr-6 pl-12"
                >
                  {{ sub2xitem.text }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export const examples = [
  {
    path: '/docs/examples/nuxt-js-hackernews',
    text: 'Nuxt.js Hacker News',
  },
  {
    path: '/docs/examples/custom-hybrid-app',
    text: 'Custom Hybrid App',
  },
]

export default {
  data() {
    return {
      items: [
        {
          text: 'Welcome',
          children: [
            {
              path: '/docs',
              text: 'Getting Started',
            },
            {
              path: '/docs#contributing',
              text: 'Contributing',
            },
            {
              path: '/docs#community-chat',
              text: 'Community Chat',
            },
            {
              path: '/docs#follow-us',
              text: 'Follow us',
            },
          ],
        },
        {
          text: 'Deployments',
          children: [
            {
              path: '/docs/deployments',
              text: 'How to deploy',
            },
            {
              path: '/docs/deployments/configuration',
              text: 'Configuration',
            },
            {
              path: '/docs/deployments/auto-deployments',
              text: 'Auto deployments',
            },
            {
              path: '/docs/deployments/application-runtime',
              text: 'Application runtime',
            },
            {
              path: '/docs/deployments/outbound-webhooks',
              text: 'Outbound Webhooks',
            },
          ],
        },
        {
          text: 'Features',
          children: [
            {
              path: '/docs/features/multiple-environments',
              text: 'Multiple environments',
            },
            {
              path: '/docs/features/staged-rollouts',
              text: 'Staged rollouts',
            },
            {
              path: '/docs/features/snippets',
              text: 'Snippets',
            },
            {
              path: '/docs/features/redirects-and-path-rewrites',
              text: 'Redirects & path rewrites',
            },
            {
              path: '/docs/features/writing-api',
              text: 'Writing APIs',
            },
          ],
        },
        {
          text: 'Other',
          children: [
            {
              path: '/docs/other/personal-access-token',
              text: 'Personal Access Token',
            },
          ],
        },
      ],
    }
  },
}
</script>
<style scoped>
.subitem.nuxt-link-exact-active {
  @apply rounded;

  background: rgba(62, 96, 132, 0.5);
}
</style>
