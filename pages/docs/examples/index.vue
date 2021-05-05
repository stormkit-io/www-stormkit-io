<template>
  <main>
    <h1>Examples</h1>
    <section>
      <p>
        Here we have prepared some examples to illustrate how to do certain
        things on Stormkit. Some of them are public repositories, feel free to
        submit pull requests or suggest changes, or contribute yourself.
      </p>
      <ul class="pl-0">
        <li v-for="example in examples" :key="example.path" class="list-none">
          <nuxt-link :to="example.path" class="block">
            {{ example.text }}
          </nuxt-link>
        </li>
      </ul>
    </section>
  </main>
</template>
<script>
import { examples } from '../../../layouts/-docs-navigation'

export default {
  layout: 'docs',

  data() {
    return {
      examples,
    }
  },

  head() {
    return {
      title: 'Stormkit - Examples',
    }
  },
}
</script>
