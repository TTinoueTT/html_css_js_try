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
    // outputValue: "",
    selectedValue: "",
    sliderValues: {},
  }),
  created: function () {
  },

  mounted: function () {
    this.setSlider(this.$refs.select.value);
    this.setImage(this.$refs.select.value);
  },

  beforeUpdated: function () {
    
  },
  

  methods: ({

    clickHandler: function () {
      console.log(`${this.$refs.image.style}`);
      console.log(this.$refs.image.style);
      console.log(this.$refs.select.value);

      this.$refs.image.style.filter = this.$refs.select.value + 
      '(' + this.$refs.slider.value + this.$refs.slider.getAttribute('data-unit') + ')' ;
    },

    selectFilterFunction: function () {
      this.setSlider(this.$refs.select.value);
      this.setImage(this.$refs.select.value);
    },

    setFunctionValue: function () {
      this.setImage(this.$refs.select.value);
    },

    // どのフィルター関数でinput[type="range"]を表示させるか
    setSlider: function (filter) {
      if (filter === 'blur') {
        this.$refs.slider.value = 0;
        this.$refs.slider.min = 0;
        this.$refs.slider.max = 30;
        this.$refs.slider.step = 1;
        this.$refs.slider.setAttribute('data-unit','px');

      //基準値が1のグループ
      } else if (filter === 'brightness' || filter === 'contrast' || filter === 'saturate') {
        this.$refs.slider.value = 1;
        this.$refs.slider.min = 0;
        this.$refs.slider.max = 4;
        this.$refs.slider.step = 0.05;
        this.$refs.slider.setAttribute('data-unit','');

      // 基準を1とした 0 ~ 1の範囲で指定
      } else if (filter === 'opacity') {
        this.$refs.slider.value = 1;
        this.$refs.slider.min = 0;
        this.$refs.slider.max = 1;
        this.$refs.slider.step = 0.01;
        this.$refs.slider.setAttribute('data-unit','');

      // 基準を0とした 0 ~ 1の範囲で指定
      } else if (filter === 'grayscale' || filter === 'invert' || filter === 'sepia') {
        this.$refs.slider.value = 0;
        this.$refs.slider.min = 0;
        this.$refs.slider.max = 1;
        this.$refs.slider.step = 0.01;
        this.$refs.slider.setAttribute('data-unit','');

      //それ以外のグループ
      } else if (filter === 'drop-shadow') {
        this.$refs.slider.value = 0;
        this.$refs.slider.min = -20;
        this.$refs.slider.max = 40;
        this.$refs.slider.step = 1;
        this.$refs.slider.setAttribute('data-unit','px');
      } else if (filter === 'hue-rotate') {
        this.$refs.slider.value = 0;
        this.$refs.slider.min = 0;
        this.$refs.slider.max = 360;
        this.$refs.slider.step = 1;
        this.$refs.slider.setAttribute('data-unit','deg');
      }
    },

    setImage: function (filter) {
      // imageにfilterプロパティの設定
      // filter: xxxx; の xxxx を 宣言する、 例. filter: blur(8px);
      if (filter === 'drop-shadow') {
        
        // console.log("shadow");
        console.log(this.$refs.image.style.filter);
        this.$refs.image.style.filter = this.$refs.select.value +
        '(' + Math.round(this.$refs.slider.value) + this.$refs.slider.getAttribute('data-unit') + ' ' +
        Math.round(this.$refs.slider.value) + this.$refs.slider.getAttribute('data-unit') + ' ' +
        Math.round(Math.abs(this.$refs.slider.value/2)) + this.$refs.slider.getAttribute('data-unit') + ')';
      } else {
        this.$refs.image.style.filter = this.$refs.select.value + 
      '(' + this.$refs.slider.value + this.$refs.slider.getAttribute('data-unit') + ')' ;
        // this.$refs.image.style.filter = `${this.$refs.select.value}
        // (${this.$refs.slider.value}${this.$refs.slider.getAttribute('data-unit')})`;
      }

      this.updateOutput();
      this.updateCode();
      //// this.output.textContent = slider.value;
    },

    updateOutput: function() {
      this.$refs.output.textContent = this.$refs.slider.value;
    },

    updateCode: function() {
      this.$refs.code.textContent = `filter: ${this.$refs.image.style.filter}`;
    }

    
  }),
}).mount('#filterFunction');