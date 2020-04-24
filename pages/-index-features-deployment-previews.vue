<template>
  <div class="flex w-full flex-col p-6">
    <div
      class="swing-group bg-black flex-auto rounded-lg shadow-lg border border-gray-30 overflow-hidden"
    >
      <div class="bg-gray-30">
        <span
          v-for="color in ['red-50', 'yellow-50', 'green-50']"
          :key="color"
          :class="`bg-${color}`"
          class="rounded-full w-3 h-3 inline-block ml-2"
        ></span>
      </div>
      <div class="font-mono text-white text-xs p-3 leading-relaxed">
        <div>$ git push</div>
        <div>
          <div>Counting objects: 2, done</div>
          <div>Upload my-organisation/my-repo.git</div>
          <div>+ 42788b4...a3ee24d master -&gt; master</div>
        </div>
      </div>
    </div>
    <div class="m-6 flex flex-col items-center">
      <div class="h-16 w-1 bg-pink-50 rounded shadow-lg"></div>
      <img :src="skLogo" alt="Stormkit Logo" class="my-2 sk-logo" />
      <div class="h-16 w-1 bg-pink-50 rounded shadow-lg"></div>
    </div>
    <div
      class="swing-group bg-white flex-auto rounded-lg shadow-lg border border-gray-70 overflow-hidden"
    >
      <div class="bg-gray-90 h-10 w-full"></div>
      <div class="font-mono text-xs p-3 leading-relaxed">
        <div class="font-bold">Deployment completed</div>
        <div class="mt-2">
          Your commit has been built succesfully on
          <a class="text-link font-bold" href="https://www.stormkit.io">
            Stormkit</a
          >. You can click the following link to preview it.
        </div>
        <div class="border-l-4 border-gray-80 pl-2 mt-2">
          <a
            class="text-link font-bold"
            href="https://hn-nuxt.stormkit.dev/news"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://hn-nuxt.stormkit.dev/news
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import skLogo from '../assets/images/stormkit-logo.svg'

export default {
  data() {
    return {
      skLogo
    }
  }
}
</script>
<style scoped>
.swing-group {
  animation: swing 2s infinite;
}

.sk-logo {
  animation: spin 4.5s infinite;
}

@keyframes spin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes swing {
  0% {
    transform: translate(0, -0.5rem);
  }
  50% {
    transform: translate(0, 0.5rem);
  }
  100% {
    transform: translate(0, -0.5rem);
  }
}
</style>
