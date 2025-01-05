# React Spinners CSS Loaders ([Vue](https://github.com/JoshK2/vue-spinners-css), [Angular](https://github.com/JoshK2/ng-spinners))

[![bit components](https://img.shields.io/badge/bit_components-14-6e3991)](https://bit.cloud/joshk/react-spinners-css)
[![npm version](https://badge.fury.io/js/react-spinners-css.svg)](https://www.npmjs.com/package/react-spinners-css)
[![GitHub stars](https://img.shields.io/github/stars/joshk2/react-spinners-css)](https://github.com/JoshK2/react-spinners-css/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JoshK2/react-spinners-css/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/joshkuttler)](https://twitter.com/JoshKuttler)

<p align="center">
  <a href="https://bit.cloud/joshk/react-spinners-css"><img src="https://i.imagesup.co/images2/1d67baaff0ba984979234d95271099843299dda1.gif"></a>
</p>

Amazing collection of React spinners components with pure css.  
The React spinners are based on loading.io and from all over the web.  
If you want to add your own spinner, please follow the [contributing guidelines](CONTRIBUTING.md).

- 💅 No extra CSS imports
- ✂️ Zero dependencies
- 📦 Spinners can be installing separately

## [Live Demo](https://bit.cloud/joshk/react-spinners-css)

Browse components and explore their props with [Bit](https://bit.cloud/joshk/react-spinners-css).  
Install specific react spinner component with npm, yarn or bit without having to install the whole project.  
[Install components and live demo](https://bit.cloud/joshk/react-spinners-css)  
<a href="https://bit.cloud/joshk/react-spinners-css" target="_blank"><img width="200" height="39" src="https://i.imagesup.co/images2/4a64f008951cd66e56d4f1e0141a27df584a1e94.png"></a>

## 🚀 List of Spinners

Each component accepts a `color` prop, and few accepts also `size` prop.  
The default `color` prop is `#7f58af`.  
Component that accepts `size` prop have a default size in pixel.

| Spinner        | color: string | size: number | className: string | style: object |
| -------------- | ------------- | ------------ | ----------------- | ------------- |
| `<Circle/>`    | `#7f58af`     | `64`         | `""`              | `{}`          |
| `<Default/>`   | `#7f58af`     | `80`         | `""`              | `{}`          |
| `<Ellipsis/>`  | `#7f58af`     | `80`         | `""`              | `{}`          |
| `<DualRing/>`  | `#7f58af`     | `80`         | `""`              | `{}`          |
| `<Facebook/>`  | `#7f58af`     | `80`         | `""`              | `{}`          |
| `<Grid/>`      | `#7f58af`     | `80`         | `""`              | `{}`          |
| `<Heart/>`     | `#7f58af`     | `80`         | `""`              | `{}`          |
| `<Hourglass/>` | `#7f58af`     | `32`         | `""`              | `{}`          |
| `<Ring/>`      | `#7f58af`     | `80`         | `""`              | `{}`          |
| `<Ripple/>`    | `#7f58af`     | `80`         | `""`              | `{}`          |
| `<Roller/>`    | `#7f58af`     | -            | `""`              | `{}`          |
| `<Spinner/>`   | `#7f58af`     | -            | `""`              | `{}`          |
| `<Orbitals/>`  | `#7f58af`     | -            | `""`              | `{}`          |
| `<Ouroboro/>`  | `#7f58af`     | -            | `""`              | `{}`          |

## 📦 Installation

### Using [npm](https://www.npmjs.com/package/react-spinners-css) to install react-spinners-css:

```bash
$ npm i --save react-spinners-css
```

### Play and install react spinners with Bit

Install specific react spinner component with bit, npm or yarn without having to install the whole project.  
Using [bit](https://bit.cloud/joshk/react-spinners-css) to play with live demo, and try the spinners before install.

set npm regisetry config(one time action):

```bash
npm config set @joshk:registry="https://node-registry.bit.cloud"
```

and use your favorite package manager:

```bash
npm i @joshk/react-spinners-css.heart
yarn add @joshk/react-spinners-css.heart
bit install @joshk/react-spinners-css.heart
```

## 💻 Usage Examples

```javascript
//using npm or yarn
import { Circle, Heart } from 'react-spinners-css';
//using bit
import { Facebook } from '@joshk/react-spinners-css.facebook';
...
render() {
   return(
     <div>
       <Circle /> //default color is #7f58af
       <Circle color="red" />
       <Circle color="#be97e8" size={200} /> //size prop is number in pixel
       <Heart />
       <Facebook /> //default color is #7f58af
       <Facebook color="red" />
     </div>
   )
}
```

## 👾 Development

You can see the components locally by cloning this repo and doing the following steps:

- Install [Bit](https://bit.dev/docs/getting-started/installing-bit/installing-bit).
- Run the project using `bit start`.

## 🙌 Contributing

- Pull requests and ⭐ stars are always welcome.
- For bugs and feature requests, please create an issue.
- If you want to add your own spinner, please follow the [contributing guidelines](CONTRIBUTING.md).
- If you want to update or add features to some spinner, please follow the [contributing guidelines](CONTRIBUTING.md).

## 👏🏻 Support my open-source

If you like to support my open-source contributions please star and share this project. 💫

## 📄 License

[MIT](https://github.com/JoshK2/react-spinners-css/blob/master/LICENSE)
