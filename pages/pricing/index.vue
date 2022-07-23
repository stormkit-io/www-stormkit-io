<template>
  <main>
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
            <sk-button
              class="w-full py-3 text-center"
              to="https://app.stormkit.io/auth"
              primary
            >
              {{ p.cta || 'Get started' }}
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
import {
  featuresV1,
  featuresV2,
  packagesV1,
  packagesV2,
  comparisonV1,
  comparisonV2,
} from './features'
import SkButton from '~/components/atoms/Button'

export default {
  components: {
    SkButton,
  },

  data() {
    const isV2 = global?.sk?.features?.pricingV2 || false
    const features = isV2 ? featuresV2 : featuresV1
    const packages = isV2 ? packagesV2 : packagesV1
    const comparison = isV2 ? comparisonV2 : comparisonV1

    return {
      features,
      packages,
      comparison,
    }
  },

  head() {
    return {
      title: 'Stormkit - Pricing',
    }
  },
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

table.w-full {
  overflow: auto;
  min-width: 980px;
}
</style>
