
  var app = new Vue({
    el: '.contanier',

    data: {
      show_input: true,
      verify_code: [],
    },

    methods: {
      moveToNextField(value, index) {
        let code = this.verify_code;
        let newValue = code[index -1] = value;
        let test = code.filter( v => v !== '');

          if(test.length < 4) {
              this.$refs.input[index].focus(); 
          }else {
              this.show_input = false;
        }
      },
    },

});

