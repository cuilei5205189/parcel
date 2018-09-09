## 极速零配置Web应用打包工具
之前一直觉得webpack的配置很麻烦，这次来尝试一下传说中零配置的parcel。
[文档](https://github.com/parcel-bundler/parcel)
![12ef3682f852920eda58f08727aec2bf.png](evernotecid://B9392C52-41DC-4C50-B389-1CE99869B144/appyinxiangcom/17700536/ENResource/p17390)
默认支持的配置很多，我常用到的sass、pug、vue都已经支持，也就是说你只要安装了parcel，不用任何配置，只需`parcel index.pug`就可以使用，parcel会自己去转义pug、sass等。模块化import、require也是默认支持。同时提供server和热加载。

### import
```javascript
//a.js
var jokes = {
    name: 'cuilei'
}
export default jokes
//或者
export default  {
    name: 'cuilei'
}

//b.js
import jokes from './a'
```

```javascript
//a.js
var joke1 = {
    name: "cuilei"
}
var joke2 = {
    name: "xiaoming"
}

export { joke2, joke1 }

//b.js
import {joke1,joke2} from "./a"
```
### require
```javascript
//a.js
module.exports = {
    name: 'cuilei'
}
//b.js
var joke = require("./a")
```
## 缺点
