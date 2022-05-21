const vFilter = Vue.createApp ({
  data: () => ({
    filterFunctions: [
      "blur",
      "brightness",
      "contrast",
      "drop-shadow",
      "grayscale",
      "hue-rotate",
      "invert",
      "opacity",
      "saturate",
      "sepia"
    ],
    selectedValue: "",
    sliderValues: {},
    outputValue: "",
    // output: "",
    // image: "",
    // code: "",
  }),
  created: function () {
    // console.log('created: ');
  },

  mounted: function () {
    // this.selectedValue = this.$refs.select.value;
    // this.sliderValues = {
    //   value: this.$refs.slider.value,
    //   min: this.$refs.slider.min,
    //   max: this.$refs.slider.max,
    //   step: this.$refs.slider.step,
    // };
    // let slider = this.$refs.slider;

    console.log(this.sliderValues);
    console.log(this.sliderValues['value']);
    this.setOutput();

    // this.outputText = this.$refs.output;

    // console.log(output);
    // console.log(output.textContent);
    // let image = this.$refs.image;
    // let code = this.$refs.code;
  },

  beforeUpdated: function () {
    console.log('updated: ');
    // select.addEventListener('change', () => {
    //   setSlider(select.value);
    //   setDiv(select.value);
    //   console.log('updated: ');
    // });
  },
  

  methods: ({

    selectFilterFunction: function () {
      console.log(this.select);
      this.setSlider(this.$refs.select.value);
      this.setOutput();
    },

    // どのフィルター関数でinput[type="range"]を表示させるか
    setSlider: function (filter) {
      if (filter === 'blur') {
        this.sliderValues['value'] = 0;
        this.sliderValues['min'] = 0;
        this.sliderValues['max'] = 30;
        this.sliderValues['value'] = 1;
        this.$refs.slider.setAttribute('data-unit','px');
      } else if (filter === 'brightness' || filter === 'contrast' || filter === 'saturate') {
        slider.value = 1;
        slider.min = 0;
        slider.max = 4;
        slider.step = 0.05;
        slider.setAttribute('data-unit','');
      } else if (filter === 'drop-shadow') {
        slider.value = 0;
        slider.min = -20;
        slider.max = 40;
        slider.step = 1;
        slider.setAttribute('data-unit','px');
      } else if (filter === 'opacity') {
        slider.value = 1;
        slider.min = 0;
        slider.max = 1;
        slider.step = 0.01;
        slider.setAttribute('data-unit','');
      } else if (filter === 'grayscale' || filter === 'invert' || filter === 'sepia') {
        slider.value = 0;
        slider.min = 0;
        slider.max = 1;
        slider.step = 0.01;
        slider.setAttribute('data-unit','');
      } else if (filter === 'hue-rotate') {
        slider.value = 0;
        slider.min = 0;
        slider.max = 360;
        slider.step = 1;
        slider.setAttribute('data-unit','deg');
      }
    },

    setImage: function (filter) {
      if (filter === 'drop-shadow') {
        
      }

      // this.output.textContent = slider.value;
    },

    setOutput: function () {
      this.outputValue = this.sliderValues['value'];
    },

    
  }),
}).mount('#filterFunction');