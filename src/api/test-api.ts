import http, { BaseResponse } from '../util/request'

export type Evalution = {
  content?: string[]
  title?: string
  subTitle?: string
  status?: boolean
  grade?: number
  id?: number
  currentScore?: number
  targetScore?: number
  fullScore?: string
}
// axios
//   .get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(res => {
//     console.log(res.data)
//   })
// 获取是否评测
export function test(courseId) {
  return http.get<BaseResponse<Evalution>>(`/v1/course/improve/get_status/${courseId}`).then((res) => res.data)
}

