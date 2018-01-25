var BASE_URL = "http://localhost:3001/v1/"

var get = {
  devices: function(t) {
    return t.$http.get(BASE_URL + "devices")
  },
  communityCevices: function(t) {
    return t.$http.get(BASE_URL + "community/devices")
  },
}
