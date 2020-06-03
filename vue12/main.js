var data = {
	message: 'Hello',
  name: 'tanaka',
}

var vm = new Vue({
	el: '#app',
  data: data,
  computed: {
  	myData: function() {
    	return this.$data
    }
  }
})

new Vue({
	el: '#app2',
  data: {
  	name: 'Suzuki'
  },
  template: '<h1>Hello,{{name}}</h1>'
})


new Vue({
	el: '#app3',
  data: {
  	name: 'Suzuki'
  },
  render: function(createElement) {
  	return createElement('h1', 'Hi,' + this.name)
  }
})