
if (!window.fbControls) window.fbControls = []
window.fbControls.push(function(controlClass) {
  /**
   * Range Slider class
   * @extends control
   */
  class controlRangeSlider extends controlClass {
    /**
     * Class configuration - return the icon & label related to this control
     * @return {Object} definition object
     */
    static get definition() {
      return {
        icon: '🎚️', 
        i18n: {
          default: 'Range Slider',
        },
      }
    }

    /**
     * Build a range slider DOM element
     * @return {HTMLElement[]} Array containing the input and a span element
     */
    build() {
      this.input = this.markup('input', null, {
        ...this.config,
        type: 'range',
        min: 0, 
        max: 100, 
        step: 1, 
      })
      this.field = this.markup('span')
      return [this.input, this.field]
    }

    onRender() {
      const input = $(this.input)
      input.val(this.config.value || 50) 
      input.on('input', () => {
        $(this.field).text(input.val()) 
      })
    }
  }

  controlClass.register('rangeSlider', controlRangeSlider)
  return controlRangeSlider
})
