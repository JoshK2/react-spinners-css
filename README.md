# React Spinners CSS Loaders
[![npm module](https://badge.fury.io/js/react-spinners-css.svg)](https://www.npmjs.com/package/react-spinners-css)
[![GitHub stars](https://img.shields.io/github/stars/joshk2/react-spinners-css)](https://github.com/JoshK2/react-spinners-css/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JoshK2/react-spinners-css/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/joshkuttler)](https://twitter.com/JoshKuttler)

Amazing collection of pure CSS react spinners components of css spinners for ajax or loading animation based on loading.io.  
  
<p align="center">
  <a href="https://bit.dev/joshk/ng-spinners"><img src="https://i.imagesup.co/images2/010e655fd10abc5621d067f8b8ad33c7cac7d840.gif"></a>
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

## 💻 Installation and Usage Examples
Using [npm](https://www.npmjs.com/package/react-spinners-css) to install react-spinners-css:  

```bash
$ npm i --save react-spinners-css
```  
you can use a random color from [jotils](https://bit.dev/joshk/jotils/get-random-color)  
```javascript
import { Circle, Facebook, Heart } from "react-spinners-css";
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
