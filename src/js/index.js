import joke from "./joke"
import $ from "jquery"

var getOne = joke.xhrOne1
var callback = function(x) {
    let joke = x.value.joke
    $(".joke .content").text(joke)
}
getOne(callback)

// joke.axiosOne().then(x => $(".joke .content").text(x))
