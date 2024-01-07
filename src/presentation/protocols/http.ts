export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  statusCode(statusCode: any): unknown
  body?: any
}
