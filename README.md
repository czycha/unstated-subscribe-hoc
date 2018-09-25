# unstated-subscribe-hoc

> Use [Unstated](https://npm.im/unstated)'s `<Subscribe />` component as a higher-order component.

## Install

```bash
yarn add unstated-subscribe-hoc
```

```bash
npm i unstated-subscribe-hoc
```

## Usage

```js
import subscribe from 'unstated-subscribe-hoc'

const SubscribedReactComponent = subscribe(
  ReactComponent,
  {
    propName: UnstatedContainerComponent,
    propName2: UnstatedContainerComponent2
  }
)
```

## Example

```js
import React from 'react'
import subscribe from 'unstated-subscribe-hoc'
import CartContainer from './CartContainer'  // Some Unstated.Container
import DisplayContainer from './DisplayContainer'  // Another Unstated.Container

const Example = ({ cart, display }) => (
  <div className={display.state.hideExample && 'hide'}>
    {cart.state.items.length} item{cart.state.items.length === 1 ? '' : 's'} in your cart
  </div>
)

// Subscribe Example to CartContainer (prop 'cart') and DisplayContainer (prop 'display')
export default subscribe(Example, { cart: CartContainer, display: DisplayContainer })
```

**Works with defined instances of `Container` also:**

```js
const cart = new CartContainer({ items: ['A super nice shirt'] })
export default subscribe(Example, { cart, display: DisplayContainer })
```

## Why?

I found myself passing in the containers as props anyway and I figured I'd make a shortcut for it.

## Credits

This is a very small module that could not be made possible without [James Kyle](https://github.com/jamiebuilds)'s [Unstated](https://npm.im/unstated).

## License

MIT &copy; James Anthony Bruno