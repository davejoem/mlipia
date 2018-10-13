import { RequestOptions } from '@angular/http'

export interface HybridMessageInterface {
    data?: any
    message: string
    method: string
    opts?: RequestOptions
    params?: any
    url: string
}

export class HybridMessage implements HybridMessageInterface {
    constructor(
        public url
        , public message
        , public method
        , public data?: any
        , public params?: any
        , public opts?: RequestOptions
    ) { }
}