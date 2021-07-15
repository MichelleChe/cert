import { useRouter } from "@tarojs/taro"
import { useEffect } from "react"

// 获取URL中的参数
export const useQuery = () => {
  const { params } = useRouter()
  return params
}

export function useMount(cb) {
  useEffect(cb, [])
}