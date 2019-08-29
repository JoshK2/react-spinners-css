# react-spinners-css 
[![npm module](https://badge.fury.io/js/react-spinners-css.svg)](https://www.npmjs.com/package/react-spinners-css)
[![GitHub stars](https://img.shields.io/github/stars/joshk2/react-spinners-css)](https://github.com/JoshK2/react-spinners-css/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JoshK2/react-spinners-css/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/joshkuttler)](https://twitter.com/JoshKuttler)

Amazing collection of react spinners components of css spinners for ajax or loading animation based on loading.io.  

## List of components

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

## Installation
Using [npm](https://www.npmjs.com/package/react-spinners-css) to install react-spinners-css:  

```bash
$ npm i --save react-spinners-css
```  

## Usage Examples

Using [npm](https://www.npmjs.com/package/react-spinners-css):
```javascript
import { Circle, Facebook } from "react-spinners-css";
...
render() {
   return(
     <div>
       <Circle /> //default color is #7f58af
       <Circle color="red" />
       <Facebook /> //default color is #7f58af
       <Facebook color="red" />
     </div>
   )
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

**Steps to contribute**

1) Fork the project and clone.
2) Create spinner folder in this [folder](https://github.com/JoshK2/react-spinners-css/tree/master/src/components), name the folder with upper case, and create index file and css file.
See example of naming in this folder [folder](https://github.com/JoshK2/react-spinners-css/tree/master/src/components/Circle).
3) The spinner need to be exported with index file inside the spinner folder, so create index.js file to export your spinner.
3) Add the spinner in index.js file inside components folder.
4) Run `npm run build` to generate the build folder folder.
5) Share with the community by submitting a PR.

## License
[MIT](https://github.com/JoshK2/react-spinners-css/blob/master/LICENSE)
