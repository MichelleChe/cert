
import React, { useContext } from 'react'
import testStore from './test-store'

export const storesContext = React.createContext({
  testStore,
})

const useStores = () => useContext(storesContext)
export default useStores