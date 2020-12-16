
  var app = new Vue({
    el: '.contanier',

    data: {
      show_input: true,
      verify_code: [],
    },

    methods: {
      moveToNextField(value, index) {
        this.verify_code.push(value);
          if(index < 4) {
            this.$refs.input[index].focus()
          }else {(index == 4)
            this.show_input = false;
          }
        }
    },

});

