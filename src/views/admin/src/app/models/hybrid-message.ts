import { RequestOptions } from '@angular/http'
import { IHybridMessage } from '../interfaces/interfaces'

export class HybridMessage implements IHybridMessage {
    constructor(
        public url
        , public message
        , public method
        , public data?: any
        , public params?: any
        , public opts?: RequestOptions
    ) { }
}