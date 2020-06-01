new Vue({
	el: '#app',
  data: {
  	number: 0,
    x: 0,
    y: 0,
  },
  methods: {
  	countUp: function(times) {
    	this.number += 1 * times
    },
    changeMousePosition: function(divideNumber, event) {
    	this.x = event.clientX / divideNumber;
    	this.y = event.clientY / divideNumber;
    }
  }
})