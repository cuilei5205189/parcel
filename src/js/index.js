import joke from './joke'
import $ from 'jquery'
require('./sum')
// console.log(sum)

var getOne = joke.xhrOne1
var callback = function(x) {
  let joke = x.value.joke
  $('.joke .content').text(joke)
}
getOne(callback)

// joke.axiosOne().then(x => $(".joke .content").text(x))
