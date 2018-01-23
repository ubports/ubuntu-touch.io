var BASE_URL = "https://devices.ubports.com/api/"

var get = {
  devices: function(t) {
    return t.$http.get(BASE_URL + "devices")
  }
}
