import React from 'react'
import { Subscribe } from 'unstated'

const subscribe = (Component, to) => (props) => (
  <Subscribe to={[...Object.values(to)]}>
    {(...values) => {
      const stores = Object.keys(to).reduce((acc, key, i) => {
        acc[key] = values[i]
        return acc
      }, {})
      return <Component {...props} {...stores} />
    }}
  </Subscribe>
)

export default subscribe
