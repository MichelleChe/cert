import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'

import './index.scss'

const Personal = observer(() => {
  return (
    <View className='index'>
      <Text>个人中心</Text>
    </View>
  )
})

export default Personal
