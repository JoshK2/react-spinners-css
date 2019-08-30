# React Spinners CSS Loaders ([Angular](https://github.com/JoshK2/ng-spinners))
[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Freact-spinners-css)](https://bit.dev/joshk/react-spinners-css)
[![npm version](https://badge.fury.io/js/react-spinners-css.svg)](https://www.npmjs.com/package/react-spinners-css)
[![GitHub stars](https://img.shields.io/github/stars/joshk2/react-spinners-css)](https://github.com/JoshK2/react-spinners-css/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JoshK2/react-spinners-css/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/joshkuttler)](https://twitter.com/JoshKuttler)

Amazing collection of pure CSS react spinners components of css spinners for ajax or loading animation based on loading.io.  
[Install components and live demo](https://bit.dev/joshk/react-spinners-css)
<p align="center">
  <a href="https://bit.dev/joshk/react-spinners-css"><img src="https://i.imagesup.co/images2/010e655fd10abc5621d067f8b8ad33c7cac7d840.gif"></a>
</p>
  
## 🚀 List of components

- `<Circle />`
- `<Default />`
- `<DualRing />`
- `<Ellipsis />`
- `<Facebook />`
- `<Grid />`
- `<Heart />`
- `<Hourglass />`
- `<Ring />`
- `<Ripple />`
- `<Roller />`  
- `<Spinner />`

#### Props

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `color` | `string` | `#7f58af`  |

## 📦 Installation
### Using [npm](https://www.npmjs.com/package/react-spinners-css) to install react-spinners-css:  

```bash
$ npm i --save react-spinners-css
```  

### Play and install react spinners with Bit

Install specific react spinner component with bit, npm or yarn without having to install the whole project.  
Using [bit](https://bit.dev/joshk/react-spinners-css) to play with live demo, and try the spinners before install.

set npm regisetry config(one time action):
```bash
npm config set '@bit:registry' https://node.bit.dev
```
and use your favorite package manager:
```bash
npm i @bit/joshk.react-spinners-css.facebook
yarn add @bit/joshk.react-spinners-css.facebook
bit import joshk.react-spinners-css/facebook 
```  

## 💻 Usage Examples

you can use a random color from [jotils](https://bit.dev/joshk/jotils/get-random-color)  
```javascript
//using npm or yarn
import { Circle, Heart } from 'react-spinners-css';
//using bit
import Facebook from '@bit/joshk.react-spinners-css.facebook';
import { getRandomColor } from '@bit/joshk.jotils.get-random-color'
...
render() {
   return(
     <div>
       <Circle /> //default color is #7f58af
       <Circle color="red" />
       <Heart color={getRandomColor()} />
       <Facebook /> //default color is #7f58af
       <Facebook color="red" />
     </div>
   )
}
```

## 👾 Development
You can see the components locally by cloning this repo and doing the following steps:
- Install dependencies from `package.json`, run: `npm install`.
- Run the app in the development mode, run: `npm run start`.  

## ⌨️ Contributing
- Pull requests and ⭐ stars are always welcome.
- For bugs and feature requests, please create an issue.

## 📄 License
[MIT](https://github.com/JoshK2/react-spinners-css/blob/master/LICENSE)
