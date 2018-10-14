import { RequestOptions } from "@angular/http";

export interface IHybridMessage {
    data?: any
    message: string
    method: string
    opts?: RequestOptions
    params?: any
    url: string
}