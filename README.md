# react-spinners-css [![npm module](https://badge.fury.io/js/react-spinners-css.svg)](https://www.npmjs.com/package/react-spinners-css) [![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bitsrc.io%2Fscope%2Fjoshk%2Freact-spinners-css)](https://bit.dev/joshk/react-spinners-css)

Amazing css spinner for ajax or loading animation from loading.io.  
What is this project?  
I see that [loadingio pure css](https://loading.io/css/) is only [built](https://github.com/loadingio/css-spinner) for normal HTML website, and I want to use it for some React project, so I decide to take this project and convert it to React components library and add some features like a color option for each spinner.

## Install loading io spinner for React with npm
Run the following command:
```bash
npm install react-spinners-css
```  
## Play and install loading io spinner for React with Bit
Using [bit](https://bit.dev/joshk/react-spinners-css) to play with live demo, and try loading io spinner before install.

<p align="center">
  <a href="https://bit.dev/joshk/react-spinners-css"><img src="https://i.imagesup.co/images2/10c49b59b69fdc976b5b528469cf0acbc52cb44d.gif"></a>
</p>

### Install specific loadingio spinner component with bit using npm or yarn without having to install the whole project

set npm regisetry config(one time action):
```bash
npm config set '@bit:registry' https://node.bit.dev
```
and use your favorite package manager:
```bash
bit import joshk.react-spinners-css/ripple 
npm i @bit/joshk.react-spinners-css.ripple
yarn add @bit/joshk.react-spinners-css.ripple
```  

## API

### Components

- `<Circle/>`
- `<Default/>`
- `<DualRing/>`
- `<Ellipsis/>`
- `<Facebook/>`
- `<Grid/>`
- `<Heart/>`
- `<Hourglass/>`
- `<Ring/>`
- `<Ripple/>`
- `<Roller/>`  
- `<Spinner/>`

#### Props

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `color` | `string` | `#fff`  |

## Usage Examples

Using [npm](https://www.npmjs.com/package/react-spinners-css), [bit](https://bit.dev/joshk/react-spinners-css):
```javascript
import { Roller } from 'react-spinners-css';
import Ripple from '@bit/joshk.react-spinners-css.ripple';
...
render() {
   return(
     <div>
       <Roller /> //default color is white
       <Roller color="black" />
       <Roller color="#000" />
       <Ripple /> //default color is white
       <Ripple color="black" />
       <Ripple color="#000" />
     </div>
   )
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
