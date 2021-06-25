
import { observer } from 'mobx-react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import useStore from '../../store/index'

import './index.scss'


const Index = observer(() => {
  const { testStore } = useStore()
  const { counter, result } = testStore

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary' onClick={()=> testStore.incrementAsync()}>fff</AtButton>
      <Text>{counter}</Text>
      <View>{result}</View>
    </View>
  )
})

export default Index
