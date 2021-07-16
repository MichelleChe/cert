
import React, { useContext } from 'react'
import testStore from './test-store'
import userStore from './user-store'

export const storesContext = React.createContext({
  testStore,
  userStore
})

const useStores = () => useContext(storesContext)
export default useStores