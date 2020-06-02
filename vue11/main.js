new Vue({
	el: '#app',
  data: {
  	isActive: true
  },
  computed: {
  	classObject: function() {
    	return {
      	red: this.isActive,
        'bg-blue': !this.isActive
      }
    }
  }
})