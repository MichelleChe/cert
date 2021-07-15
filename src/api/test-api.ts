import http, { BaseResponse } from '../util/request'

export type Evalution = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export function testApi() {
  return http.get<BaseResponse<Evalution>>(`todos/1`).then((res) => res.data)
}

