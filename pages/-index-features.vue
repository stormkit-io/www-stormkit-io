<template>
  <div>
    <h2 class="text-4xl text-center font-bold">Feature-rich and Easy to Use</h2>
    <h3 class="mb-24 text-center italic">
      Configure your apps easily and get started right away
    </h3>
    <div class="flex-auto flex items-strech p-3 rounded-lg overflow-hidden">
      <ul>
        <li
          v-for="(feature, index) in features"
          :key="feature.title"
          class="feature mb-12 pb-2 transition duration-500 ease-in-out flex flex-col hover:opacity-100"
          :class="{ 'opacity-50': index !== progressIndex }"
        >
          <div
            class="flex items-center cursor-pointer"
            role="button"
            @click="changeActiveFeature(index)"
          >
            <i class="material-icons text-5xl text-green-50">
              {{ feature.icon }}
            </i>
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
        </li>
      </ul>
      <div
        class="ml-12 border border-gray-80 flex rounded-lg overflow-hidden shadow-lg bg-blue-50 w-full flex items-center"
      >
        <component
          :is="currentPreview.component"
          v-if="currentPreview.component"
        />
        <img
          v-if="currentPreview.image"
          :src="currentPreview.image"
          class="rounded-lg"
          alt="Stormkit Preview"
        />
        <video v-if="currentPreview.video" autoplay :src="currentPreview.video">
          <!-- <source :src="currentPreview.video" type="video/webm" /> -->
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>
<script>
import webmMultipleEnvironments from '../assets/images/features/multi-env.webm'
import webmStagedRollouts from '../assets/images/features/staged-rollouts.webm'
import webmRemoteConfig from '../assets/images/features/remote-config.webm'
import webmSnippets from '../assets/images/features/snippets.webm'
import SkDeploymentPreviews from './-index-features-deployment-previews'

export default {
  components: {
    SkDeploymentPreviews
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
          component: 'SkDeploymentPreviews'
        },
        {
          icon: 'settings_input_component',
          title: 'Multiple environments',
          desc: 'Create as many as development environments required.',
          video: webmMultipleEnvironments
        },
        {
          icon: 'code',
          title: 'Staged rollouts',
          desc:
            'Release multiple deployments at the same time to a percentage of your users.',
          video: webmStagedRollouts
        },
        {
          icon: 'settings_remote',
          title: 'Remote configuration',
          desc:
            'Inject variables to your app. Changes are effective instantly - no need to rebuild.',
          video: webmRemoteConfig
        },
        {
          icon: 'code',
          title: 'Inject snippets',
          desc:
            'Manage 3rd party scripts right from the UI. Useful for marketing teams or PMs.',
          video: webmSnippets
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
        this.progressPercentage = this.progressPercentage + 0.15

        if (this.progressPercentage >= 100) {
          this.progressIndex = (this.progressIndex + 1) % this.features.length
          this.progressPercentage = 0
        }
      }, 50)
    }
  }
}
</script>
<style scoped>
.feature {
  width: 350px;
}

.feature:last-child {
  margin-bottom: 0;
}

.svg-terminal {
  animation: show-terminal 3s forwards;
  animation-iteration-count: 1;
}

.svg-terminal,
.svg-deployment-preview,
.svg-sk-logo-wrapper {
  opacity: 0;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes show-terminal {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
</style>
