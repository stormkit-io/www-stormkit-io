<script>
export default {
  props: {
    href: { type: String, required: true },
    ariaLabel: { type: String, required: true },
    title: { type: String, required: true },
    dataIcon: { type: String, required: false, default: 'octicon-star' },
    dataSize: { type: String, required: false, default: 'large' },
    dataShowCount: { type: Boolean, required: false, default: false },
    dataText: { type: String, required: false, default: '' },
    dataColorScheme: { type: String, required: false, default: undefined },
  },
  mounted() {
    this.paint()
  },
  beforeUpdate() {
    this.reset()
  },
  updated() {
    this.paint()
  },
  beforeDestroy() {
    this.reset()
  },
  methods: {
    paint() {
      const _ = this.$el.appendChild(document.createElement('span'))
      const _this = this
      import(/* webpackMode: "eager" */ 'github-buttons').then(function (
        module
      ) {
        module.render(_.appendChild(_this.$refs._), function (el) {
          try {
            _.parentNode.replaceChild(el, _)
          } catch (_) {
            // do nothing here
          }
        })
      })
    },
    reset() {
      this.$el.replaceChild(this.$refs._, this.$el.lastChild)
    },
  },
  render(h) {
    return h('span', [
      h(
        'a',
        {
          attrs: {
            href: this.href,
            'aria-label': this.ariaLabel,
            title: this.title,
            'data-icon': this.dataIcon,
            'data-color-scheme': this.dataColorScheme,
            'data-size': this.dataSize,
            'data-show-count': this.dataShowCount,
            'data-text': this.dataText,
          },
          ref: '_',
        },
        this.$slots.default
      ),
    ])
  },
}
</script>
