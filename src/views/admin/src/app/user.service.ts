import { Injectable } from '@angular/core'
import { Storage as Store } from './storage.service'
import { Api } from './api.service'
import { HybridMessage } from './models/hybrid-message'
import { IUser } from './interfaces/interfaces'

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable({
  providedIn: 'root'
})
export class User {
  private USER_KEY: string = 'user'
  private USER_TOKEN: string = 'token'
  public _user: IUser

  constructor(
    public api: Api
    , public storage: Store
  ) { }


  /**
   * Send a POST request to our code generation endpoint with the data
   * the user entered on the form.
   */
  genToken(username: any) {
    return this.api.post(`/auth/token`, username)
  }

  /**
   * Fetch user from storage
   */
  load() {
    return this.storage.get(this.USER_KEY)
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  signIn(details: { password; string, username: string }) {
    return this.api.send(new HybridMessage('/auth/signin', 'auth:signin', 'post', details))
  }

  /**
   * Sign the user out, which forgets the session
   */
  signOut() {
    this._user = null;
    return this.save()
  }

  /**
   * Process a signin/signup response to store user data
   */
  _signedIn(user: IUser) {
    this._user = user;
  }

  save(user?: IUser) {
    return this.storage.set(this.USER_KEY, user ? user : this._user)
  }
}
