var coreList = new Vue({
  el: '#coreList',
  data: {
    devices: [{}]
  },
  created: function() {
    this.get();
  },
  methods: {
    go: function(device) {
      window.location.href = '/device/'+device;
    },
    get: function() {
      get.devices(this).then(function(response) {
        console.log(response.body)
        this.devices = response.body;
      });
    }
  }
})

var communityList = new Vue({
  el: '#communetyList',
  data: {
    devices: [{}]
  },
  created: function() {
    this.get();
  },
  methods: {
    go: function(device) {
      window.location.href = '/device/'+device;
    },
    get: function() {
      get.communityCevices(this).then(function(response) {
        console.log(response.body)
        this.devices = response.body;
      });
    }
  }
})
