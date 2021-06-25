
import { observable } from 'mobx'

console.log(process.env.A)
const testStore = observable({
  // observable state
  counter: 0,
  multiple: 2,

  // actions
  increment() {
    console.log(this)
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  },

  // computeds
  get result() {
    return this.counter * this.multiple
  }
})

export default testStore