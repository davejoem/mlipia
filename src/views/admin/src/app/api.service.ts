import { Injectable } from '@angular/core'
import { Http, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import * as io from 'socket.io-client'
import { Socket } from 'socket.io-client'
import { HybridMessage } from './models/models'

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable({
  providedIn: 'root'
})
export class Api {
  // url: string = 'https://mlipia.herokuapp.com';
  url: string = 'http://127.0.0.1:8000';
  socket: Socket;
  auth_socket: Socket;
  constructor(public http: Http) {
    this.connectSocket()
  }

  connectSocket(domain?: string): Observable<Socket> {
    return Observable.create(observer => {
      if (!domain) {
        this.socket = io(this.url);
        observer.next(this.socket);
      } else {
        switch (domain) {
          case `auth`:
            this.auth_socket = io(this.url + '/auth');
            observer.next(this.socket);
            break
        }
      }
      observer.complete()
    })
  }

  disconnectSocket(): Observable<Socket> {
    return Observable.create(observer => {
      this.socket.disconnect();
      observer.next(this.socket);
      observer.complete()
    })
  }

  socketConnected(): boolean {
    return this.socket.connected
  }

  send(message: HybridMessage): Observable<any> {
    if (this.socket && !this.socket.connected) {
      return Observable.create(observer => {
        this.socket.emit(message.message, message.data, (err, res) => {
          if (err) observer.error(err)
          else observer.next(res)
          observer.complete()
        })
      })
    }
    else {
      switch (message.method) {
        case 'delete':
          return this.delete(message.url, message.opts)
        case 'get':
          return this.get(message.url, message.params, message.opts)
        case 'patch':
          return this.patch(message.url, message.data, message.opts)
        case 'post':
          return this.post(message.url, message.data, message.opts)
        case 'put':
          return this.put(message.url, message.data, message.opts)
      }
    }
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + endpoint, options);
  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return this.http.get(this.url + endpoint, options)
      .map(res => res.json())
      .catch(err => err.json())
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + endpoint, body, options)
      .map(res => res.json())
      .catch(err => err.json())
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(this.url + endpoint, body, options)
      .map(res => res.json())
      .catch(err => err.json())
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + endpoint, body, options)
      .map(res => res.json())
      .catch(err => err.json())
  }
}