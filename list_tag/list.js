// v-for文で配列操作
const vType = Vue.createApp({
  data: () => ({
    arry: [],
    indexSum: 30,
  }),

  mounted: function () {
    this.repeatList();
  },

  methods: {
    repeatList: function () {
      this.arry = Array(this.indexSum).fill();
      let listText = [];
      for (let i = 0; i < this.arry.length; i++) {
        this.arry[i] = "リスト" + (i + 1);
      }
    },
  },
}).mount('#list-style-type');

const vTypeCustom = Vue.createApp({
  data: () => ({
    arry: [],
    indexSum: 35,
  }),

  mounted: function () {
    this.repeatList();
  },

  methods: {
    repeatList: function () {
      this.arry = Array(this.indexSum).fill();
      let listText = [];
      for (let i = 0; i < this.arry.length; i++) {
        this.arry[i] = "リスト" + (i + 1);
      }
    },
  },
}).mount('#list-style-type-custom');