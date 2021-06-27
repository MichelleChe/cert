
import { observable } from 'mobx'
import { testApi } from '../api/test-api'

const testStore = observable({
  // observable state
  counter:<number> 0,
  multiple:<number> 2,
  requestRes:<{
    userId?: number
    title?: string
  }> {},

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
  async testRequest() {
    const data = await testApi()
    this.requestRes = data
    console.log(data)
  },

  // computeds
  get result() {
    return this.counter * this.multiple
  }
})

export default testStore