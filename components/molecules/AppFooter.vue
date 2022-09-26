<template>
  <footer class="relative text-sm">
    <sk-background bottom-none />
    <div
      class="page flex flex-col md:flex-row items-between pt-16 md:pt-24 pb-12 px-6 md:px-0"
    >
      <div class="flex-grow-0 mb-12 md:mb-0">
        <div><sk-logo :size="8" icon-only /></div>
        <div class="flex items-center mt-4">
          <span
            class="inline-flex items-center justify-center bg-blue-50 rounded-full w-8 h-8 mr-4"
          >
            <span class="material-icons text-white text-base"> email </span>
          </span>
          <a href="mailto:hello@stormkit.io" class="text-blue-50"
            >hello@stormkit.io</a
          >
        </div>
        <div class="flex items-center mt-4">
          <span
            class="inline-flex items-center justify-center bg-blue-50 rounded-full w-8 h-8 mr-4"
          >
            <span class="material-icons text-white text-base">
              location_on
            </span>
          </span>
          Made with ❤️<br />
          Zurich, Switzerland.
        </div>
      </div>
      <div class="flex flex-auto flex-col md:flex-row items-between md:pl-40">
        <ul class="flex-auto mb-6 md:mb-0">
          <li class="font-bold mb-4">Company &amp; Legal</li>
          <li class="mb-2">
            <nuxt-link to="/#about-us" class="text-blue-50">About us</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/partners" class="text-blue-50">Partners</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/pricing" class="text-blue-50">Pricing</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/policies/privacy" class="text-blue-50"
              >Privacy Policy</nuxt-link
            >
          </li>
          <li class="mb-2">
            <nuxt-link to="/policies/terms" class="text-blue-50"
              >Terms</nuxt-link
            >
          </li>
        </ul>
        <ul class="flex-auto mb-6 md:mb-0">
          <li class="font-bold mb-4">Resources</li>
          <li class="mb-2">
            <nuxt-link to="/docs" class="text-blue-50">Docs</nuxt-link>
          </li>
          <li class="mb-2">
            <a
              href="https://github.com/stormkit-io/www-stormkit-io"
              class="text-blue-50"
              target="_blank"
              rel="noreferrer noopener"
              >Contribute</a
            >
          </li>
          <li class="mb-2">
            <a
              href="https://stormkit-io.github.io/stormkit-status/"
              class="text-blue-50"
              target="_blank"
              rel="noreferrer noopener"
              >Status</a
            >
          </li>
        </ul>
        <ul class="flex-auto">
          <li class="font-bold mb-4">Connect with us</li>
          <li class="mb-2">
            <a
              href="https://twitter.com/stormkitio"
              class="text-blue-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sk-twitter class="inline-block mr-1" />Twitter</a
            >
          </li>
          <li class="mb-2">
            <a
              href="https://www.linkedin.com/company/stormkit"
              class="inline-flex items-center text-blue-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sk-linkedin class="inline-block mr-1" />LinkedIn</a
            >
          </li>
          <li class="mb-2">
            <a
              href="https://github.com/stormkit-io/www-stormkit-io"
              class="text-blue-50"
              target="_blank"
              rel="noopener noreferrer"
              ><sk-github class="inline-block mr-1" />Github</a
            >
          </li>
          <li>
            <a
              href="https://discord.gg/6yQWhyY"
              class="text-blue-50"
              target="_blank"
              rel="noopener noreferrer"
              ><sk-discord class="inline-block mr-1" />Discord</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="py-4 bg-blue-50 text-white">
      <div class="page px-6 md:px-0">
        Copyright &copy; {{ new Date().getFullYear() }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
<script>
import SkLogo from '../atoms/Logo'
import SkBackground from '../atoms/Background'
import SkLinkedin from '../atoms/social/LinkedIn'
import SkTwitter from '../atoms/social/Twitter'
import SkGithub from '../atoms/social/Github'
import SkDiscord from '../atoms/social/Discord'

export default {
  components: {
    SkLogo,
    SkBackground,
    SkLinkedin,
    SkTwitter,
    SkGithub,
    SkDiscord,
  },
}
</script>
