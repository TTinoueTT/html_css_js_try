
const pseudoElement = Vue.createApp({
  data: () => ({

  }),

  methods: ({
    transitionStateToggle: function (event) {
      console.log(event.target);
    },

    dialogToggle: function () {
      console.log(this.$refs.dialog);
      if (this.$refs.dialog.hasAttribute("open")) {
        this.$refs.dialog.removeAttribute("open");
      } else {
        // this.$refs.dialog.setAttribute("open", "");
        this.$refs.dialog.showModal();
      }
    }

  }),
}).mount("#pseudoElement")