
import { observer } from 'mobx-react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import useStore from '../../store/index'

import './index.scss'


const Index = observer(() => {
  const { testStore } = useStore()
  const { counter, result, requestRes } = testStore

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary' onClick={()=> testStore.incrementAsync()}>counterText</AtButton>
      <Text>{counter}</Text>
      <View>{result}</View>
      <AtButton type='primary' onClick={()=> testStore.testRequest()}>requestTest</AtButton>
      <View>{requestRes?.userId}</View>
      <View>{requestRes?.title}</View>
    </View>
  )
})

export default Index
