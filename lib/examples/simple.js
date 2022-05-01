#!/usr/bin/env node

import { lorem } from '../lib/util.js'

// https://codepen.io/anon/pen/JOOBxg

// child element inherits the parent height if:
// - parent is changed from `grid` to `flex`
// - aspect-square` is removed

const Simple = () => (
  <div className="grid grid-rows-5 bg-blue-700 h-screen">
    <div className="grid grid-rows-3 items-center bg-green-200 col-span-2 col-start-2">
      <div className="bg-teal-600 col-span-1 col-start-2 " />
    </div>
  </div>
)

export default Simple
