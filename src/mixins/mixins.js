let myMixin = {
  created: function () {
    this.sayHello()
  },
  methods: {
    sayHello: function () {
      console.log('hello myMixin')
    }
  }
}

export default myMixin