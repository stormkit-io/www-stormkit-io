<template>
  <main>
    <sk-header />
    <div class="page min-h-screen px-3 md:px-0">
      <h1 class="text-4xl bold font-light mt-24 text-center">
        Pay as you grow
      </h1>
      <h2 class="text-lg font-light text-center max-w-md m-auto opacity-75">
        Get started right away for free and save money with our flexible
        packages.
      </h2>
      <div class="flex flex-col md:flex-row justify-between mt-24">
        <div
          v-for="p in packages"
          :key="p.key"
          class="price flex flex-col flex-auto shadow-lg border border-gray-80 p-6 bg-white mb-4 md:mb-0"
        >
          <div class="mb-4">
            <span
              class="inline-block py-1 px-4 rounded-lg text-xs text-white"
              :style="`background-color: ${p.color};`"
              >{{ p.name }}</span
            >
          </div>
          <div class="mb-4">
            <b>{{ p.price }}$</b><span class="text-xs">/ month</span>
          </div>
          <ul class="flex-auto">
            <li v-for="f in p.features" :key="f" class="text-sm mb-2">
              <span
                class="material-icons text-xs"
                :style="`color: ${p.color};`"
              >
                check_circle
              </span>
              {{ f }}
            </li>
          </ul>
          <div class="mt-4">
            <sk-button class="w-full" primary>
              <a
                href="https://app.stormkit.io/auth"
                class="block py-4 text-white"
              >
                {{ p.cta || 'Get started' }}
              </a>
            </sk-button>
          </div>
        </div>
      </div>
      <div class="overflow-auto max-w-full">
        <table class="w-full my-12 text-sm">
          <thead>
            <tr>
              <th><!----></th>
              <th v-for="p in packages" :key="p.title" class="py-4 w-1/5">
                {{ p.title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="f in comparison" :key="f.name" class="t-row">
              <td class="border-t border-b border-gray-80 p-4 font-bold">
                {{ f.name }}
              </td>
              <td
                v-for="(v, i) in f.value"
                :key="i"
                class="text-center border-t border-b border-gray-80 p-4"
              >
                <span
                  v-if="typeof v === 'boolean'"
                  class="material-icons"
                  :class="{ 'text-green-50': v, 'text-red-50': !v }"
                  >{{ v ? 'done' : 'close' }}</span
                >
                <span v-else>{{ v }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<script>
import SkHeader from '../../components/molecules/AppHeader'
import SkButton from '../../components/atoms/Button'

export default {
  components: {
    SkHeader,
    SkButton
  },

  data() {
    const features = {
      free: [
        '1 app',
        '1 team seat',
        '1m requests (per app)',
        '50 GB bandwidth (per app)',
        'Unlimited domains',
        'Unlimited deployments',
        'Unlimited environments',
        'TLS certificates included'
      ],
      small: ['Everything in free', '3 apps', '3 team seats'],
      medium: ['Everything in starter', '10 apps', '10 team seats'],
      large: ['Everything in medium', 'Unlimited apps', 'Unlimited team seats']
    }

    return {
      features,
      packages: [
        {
          name: 'free',
          price: 0,
          title: 'Free',
          features: features.free,
          color: '#e4bb17',
          cta: 'Get started for free'
        },
        {
          name: 'starter',
          title: 'Starter',
          price: 9.9,
          features: features.small,
          color: '#4388c7'
        },
        {
          name: 'medium',
          title: 'Medium',
          price: 49.9,
          features: features.medium,
          color: '#50b950'
        },
        {
          name: 'enterprise',
          title: 'Enterprise',
          price: 99.9,
          features: features.large,
          color: '#f55c27'
        }
      ],
      comparison: [
        { name: 'Number of apps', value: [1, 3, 10, 'Unlimited'] },
        { name: 'Number of seats', value: [1, 3, 10, 'Unlimited'] },
        { name: 'Concurrent builds', value: [1, 1, 2, 3] },
        {
          name: 'Each 1m requests',
          value: ['$6', '$6', '$6', 'Volume based']
        },
        {
          name: 'Each 10GB Bandwidth',
          value: ['$1', '$1', '$1', 'Volume based']
        },
        { name: 'Autoscaling', value: [true, true, true, true] },
        { name: 'Multiple environments', value: [true, true, true, true] },
        { name: 'Production-ready', value: [true, true, true, true] },
        { name: 'Deploy previews', value: [true, true, true, true] },
        { name: 'Custom domains', value: [true, true, true, true] },
        { name: 'Deploy hooks', value: [false, false, true, true] },
        { name: 'Cold start prevention', value: [false, false, false, true] },
        { name: 'Premium support', value: [false, false, false, true] }
      ]
    }
  }
}
</script>
<style scoped>
@screen md {
  .price {
    max-width: 24%;
  }
}
.t-row:last-child td {
  border-bottom: none;
}
button.w-full {
  padding: 0;
}
table.w-full {
  overflow: auto;
  min-width: 980px;
}
</style>
