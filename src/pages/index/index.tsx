import { Component } from 'react'
import { observer } from 'mobx-react'
import { View, Text } from '@tarojs/components'
import Router from 'tarojs-router-next'
import { AtButton } from 'taro-ui'

import useStore from '../../store/index'
import Pages from '../../components/page'

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

const Index = observer(() => {
  const { testStore } = useStore()
  const { counter, result, requestRes } = testStore

  const onRoute = () => {
    Router.toPersonal()
  }
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary' onClick={()=> testStore.incrementAsync()}>counterText</AtButton>
      <Text>{counter}</Text>
      <View>{result}</View>
      <AtButton type='primary' onClick={()=> testStore.testRequest()}>requestTest</AtButton>
      <View>{requestRes?.userId}</View>
      <View>{requestRes?.title}</View>
      <Pages>pages</Pages>
      <AtButton onClick={onRoute}>路由</AtButton>
    </View>
  )
})

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>fff</AtButton>
        <Text>dddd</Text>
      </View>
    )
  }
}
