
import { observable } from 'mobx'

const userStore = observable({
  // observable state
  userinfo: {},

  // actions
  increment() {
    console.log(this)
    this.counter++
  },

  // computeds
  get result() {
    return this.counter * this.multiple
  }
})

export default userStore