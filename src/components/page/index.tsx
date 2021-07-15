
import { FC, useEffect } from 'react'
import { observer } from 'mobx-react'

import './index.scss'


const Pages: FC = observer(({ children }) => {

  useEffect(() => {

  })

  return (
    <>
      {children}
    </>
  )
})

export default Pages
