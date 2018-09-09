import axios from "axios"

export default {
    getOne() {
        fetch("http://api.icndb.com/jokes/random")
            .then(x => {
                console.dir(x)
                var b = x.json()
                return b
            })
            .then(y => {
                console.log(y)
                return y
            })
    },
    xhrOne() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.open("get", "http://api.icndb.com/jokes/random")
            xhr.send()
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var b = JSON.parse(xhr.response)
                    resolve(b)
                }
            }
        })
    },
    xhrOne1(callback) {
        var xhr = new XMLHttpRequest()
        xhr.open("get", "http://api.icndb.com/jokes/random")
        xhr.send()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var b = JSON.parse(xhr.response)
                callback(b)
            }
        }
    },
    axiosOne() {
        return new Promise((resolve, reject) => {
            axios.get("http://api.icndb.com/jokes/random").then(x => {
                resolve(x.data.value.joke)
            })
        })
    }
}
