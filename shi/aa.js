var app = new Vue({
  el: "#app",
  data: {
    message: ''
  },
  methods: {
    submit: function (eve) {
      if (this.todo == "") { return; }
      this.list.push({
        title: this.todo,
        isComplete: false
      });
      this.todo = "";
    }
  }
});