<template>
  <div class="page md:relative px-3 md:px-0">
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
              class="bg-pink-50 inset-0 absolute z-8"
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
        class="ml-12 border border-gray-80 rounded-lg overflow-hidden shadow-lg bg-blue-50 w-full items-center hidden md:flex relative"
      >
        <sk-feature-preview :current-preview="currentPreview" />
      </div>
    </div>
    <div class="flex justify-center w-full mt-12">
      <sk-button
        class="inline-flex items-center"
        primary
        to="https://youtu.be/RHP6AOnGTAY"
      >
        Watch our quick intro
        <span class="material-icons ml-2">
          exit_to_app
        </span>
      </sk-button>
    </div>
  </div>
</template>
<script>
import SkFeaturePreview from './-index-features-preview'
import SkButton from '~/components/atoms/Button'
import mp4MultipleEnvironments from '~/assets/images/features/multi-env.mp4'
import mp4StagedRollouts from '~/assets/images/features/staged-rollouts.mp4'
import mp4RemoteConfig from '~/assets/images/features/remote-config.mp4'
import mp4Snippets from '~/assets/images/features/snippets.mp4'
import gifMultipleEnvironments from '~/assets/images/features/multi-env.gif'
import gifStagedRollouts from '~/assets/images/features/staged-rollouts.gif'
import gifRemoteConfig from '~/assets/images/features/remote-config.gif'
import gifSnippets from '~/assets/images/features/snippets.gif'

const SPEED_8X = 1
const SPEED_3X = 0.375
const SPEED_2X = 0.25
const SPEED_X = 0.125

export default {
  components: {
    SkFeaturePreview,
    SkButton
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
          video: mp4MultipleEnvironments,
          image: gifMultipleEnvironments,
          speed: SPEED_2X
        },
        {
          icon: 'code',
          title: 'Staged rollouts',
          desc:
            'Release multiple deployments at the same time to a percentage of your users.',
          video: mp4StagedRollouts,
          image: gifStagedRollouts,
          speed: SPEED_3X
        },
        {
          icon: 'settings_remote',
          title: 'Remote configuration',
          desc:
            'Inject variables to your app. Changes are effective instantly - no need to rebuild.',
          video: mp4RemoteConfig,
          image: gifRemoteConfig,
          speed: SPEED_2X
        },
        {
          icon: 'code',
          title: 'Inject snippets',
          desc:
            'Manage 3rd party scripts right from the UI. Useful for marketing teams or PMs.',
          video: mp4Snippets,
          image: gifSnippets,
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
