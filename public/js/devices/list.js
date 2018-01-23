var coreList = new Vue({
  el: '#coreList',
  data: {
    devices: [{}]
  },
  created: function() {
    this.get();
  },
  methods: {
    get: function() {
      get.devices(this).then(function(response) {
        console.log(response.body.devices.active)
        this.devices = response.body.devices.active;
      });
    }
  }
})

var coreList = new Vue({
  el: '#communetyList',
  data: {
    devices: [{}]
  },
  created: function() {
    this.get();
  },
  methods: {
    get: function() {
      get.devices(this).then(function(response) {
        console.log(response.body.devices.vote)
        this.devices = response.body.devices.vote;
      });
    }
  }
})

var coreList = new Vue({
  el: '#legList',
  data: {
    devices: [{}]
  },
  created: function() {
    this.get();
  },
  methods: {
    get: function() {
      get.devices(this).then(function(response) {
        console.log(response.body.devices.progress)
        this.devices = response.body.devices.progress;
      });
    }
  }
})
