<template>
  <nav class="bg-blue-50 p-6 min-h-full">
    <ul class="text-sm">
      <li v-for="item in items" :key="item.path">
        <span
          class="item block flex w-full items-center text-white py-2 uppercase text-xs font-bold opacity-50"
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
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Welcome',
          children: [
            {
              path: '/docs',
              text: 'Getting Started'
            },
            {
              path: '/docs#why-stormkit',
              text: 'Why Stormkit'
            },
            {
              path: '/docs#when-stormkit',
              text: 'When Stormkit'
            },
            {
              path: '/docs#contributing',
              text: 'Contributing'
            },
            {
              path: '/docs#community-chat',
              text: 'Community Chat'
            }
          ]
        },
        {
          text: 'Deployments',
          children: [
            {
              path: '/docs/deployments',
              text: 'Introduction'
            },
            {
              path: '/docs/deployments/configuration',
              text: 'Configuration'
            },
            {
              path: '/docs/deployments/single-page-applications',
              text: 'Single page applications'
            },
            {
              path: '/docs/deployments/hybrid-applications',
              text: 'Hybrid applications'
            },
            {
              path: '/docs/deployments/auto-deployments',
              text: 'Auto deployments'
            },
            {
              path: '/docs/deployments/application-runtime',
              text: 'Application runtime'
            },
            {
              path: '/docs/deployments/deploy-hooks',
              text: 'Deploy Hooks'
            }
          ]
        },
        {
          text: 'Features',
          children: [
            {
              path: '/docs/features/multiple-environments',
              text: 'Multiple environments'
            },
            {
              path: '/docs/features/remote-config',
              text: 'Remote config'
            },
            {
              path: '/docs/features/staged-rollouts',
              text: 'Staged rollouts'
            },
            {
              path: '/docs/features/snippets',
              text: 'Snippets'
            },
            {
              path: '/docs/features/redirects-and-path-rewrites',
              text: 'Redirects & path rewrites'
            }
          ]
        },
        {
          text: 'Examples',
          children: [
            {
              path: '/docs/examples/nuxt-js-hackernews',
              text: 'Nuxt.js Hacker News'
            },
            {
              path: '/docs/examples/custom-hybrid-app',
              text: 'Custom Hybrid App'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
.subitem.nuxt-link-exact-active {
  @apply rounded;
  background: rgba(62, 96, 132, 0.5);
}
</style>
