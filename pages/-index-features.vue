<template>
  <div class="md:relative">
    <div class="flex-auto flex items-strech rounded-lg overflow-hidden">
      <ul class="flex-auto">
        <li
          v-for="(feature, index) in features"
          :key="feature.title"
          class="pb-2 transition duration-500 ease-in-out flex flex-col hover:opacity-100"
          :class="{
            'opacity-50': index !== progressIndex,
            'mb-12': index !== features.length - 1,
            'mb-0': index === features.length - 1
          }"
        >
          <div
            class="flex items-center cursor-pointer"
            role="button"
            @click="changeActiveFeature(index)"
          >
            <i class="material-icons text-5xl text-green-50">{{
              feature.icon
            }}</i>
            <div class="ml-12">
              <h2
                class="font-bold"
                :class="{ 'text-pink-50': index === progressIndex }"
              >
                {{ feature.title }}
              </h2>
              <span class="text-xs text-gray-40">{{ feature.desc }}</span>
            </div>
          </div>
          <div class="bg-blue-90 relative h-px p-px mt-8 rounded-full">
            <div
              v-if="index === progressIndex"
              ref="progress"
              :style="{ width: `${progressPercentage}%` }"
              class="bg-pink-50 inset-0 absolute z-10"
            ></div>
          </div>
          <div
            v-if="index === progressIndex"
            class="mt-8 border border-gray-80 rounded-lg overflow-hidden shadow-lg bg-blue-50 w-full flex items-center flex md:hidden"
          >
            <sk-feature-preview :current-preview="currentPreview" />
          </div>
        </li>
      </ul>
      <div
        class="ml-12 border border-gray-80 rounded-lg overflow-hidden shadow-lg bg-blue-50 w-full items-center hidden md:flex"
      >
        <sk-feature-preview :current-preview="currentPreview" />
      </div>
    </div>
  </div>
</template>
<script>
import webmMultipleEnvironments from '../assets/images/features/multi-env.webm'
import webmStagedRollouts from '../assets/images/features/staged-rollouts.webm'
import webmRemoteConfig from '../assets/images/features/remote-config.webm'
import webmSnippets from '../assets/images/features/snippets.webm'
import SkFeaturePreview from './-index-features-preview'

const SPEED_8X = 1
const SPEED_3X = 0.375
const SPEED_2X = 0.25
const SPEED_X = 0.125

export default {
  components: {
    SkFeaturePreview
  },

  data() {
    return {
      progressIndex: 0,
      progressPercentage: 0,
      progressInterval: 0,
      features: [
        {
          icon: 'perm_media',
          title: 'Deployment previews',
          desc: 'Preview your deployments right from your pull/merge requests.',
          component: 'SkDeploymentPreviews',
          speed: SPEED_8X
        },
        {
          icon: 'settings_input_component',
          title: 'Multiple environments',
          desc: 'Create as many development environments as required.',
          video: webmMultipleEnvironments,
          speed: SPEED_2X
        },
        {
          icon: 'code',
          title: 'Staged rollouts',
          desc:
            'Release multiple deployments at the same time to a percentage of your users.',
          video: webmStagedRollouts,
          speed: SPEED_3X
        },
        {
          icon: 'settings_remote',
          title: 'Remote configuration',
          desc:
            'Inject variables to your app. Changes are effective instantly - no need to rebuild.',
          video: webmRemoteConfig,
          speed: SPEED_2X
        },
        {
          icon: 'code',
          title: 'Inject snippets',
          desc:
            'Manage 3rd party scripts right from the UI. Useful for marketing teams or PMs.',
          video: webmSnippets,
          speed: SPEED_2X
        }
      ]
    }
  },
  computed: {
    currentPreview() {
      return this.features[this.progressIndex]
    }
  },
  mounted() {
    this.changeActiveFeature(0)
  },
  beforeDestroy() {
    clearInterval(this.progressInterval)
  },
  methods: {
    changeActiveFeature(featureIndex) {
      clearInterval(this.progressInterval)
      this.progressPercentage = 0
      this.progressIndex = featureIndex
      this.progressInterval = setInterval(() => {
        this.progressPercentage =
          this.progressPercentage + (this.currentPreview.speed || SPEED_X)

        if (this.progressPercentage >= 100) {
          this.progressIndex = (this.progressIndex + 1) % this.features.length
          this.progressPercentage = 0
        }
      }, 50)
    }
  }
}
</script>
