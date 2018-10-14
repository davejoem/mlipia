import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router'
import { Storage as Store } from './storage.service'
import { Api } from './api.service'
import { HybridMessage } from './models/models'
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
export class User implements CanActivate, CanActivateChild, CanLoad {
  private USER_KEY: string = 'user'
  private USER_TOKEN: string = 'token'
  public _user: IUser
  private redirectPath: string = ''

  constructor(
    public api: Api
    , public router: Router
    , public storage: Store
  ) {
    this._user = this.load()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    route.url.map(url => { return url.path }).forEach(part => {
      this.redirectPath += part
    })
    const expectedRole = route.data.expectedRole
    // const token = localStorage.getItem('token')
    // decode the token to get its payload
    // const tokenPayload = decode(token)
    if (this.hasAccess(state.url, expectedRole)) { return true; }
    else {
      this.router.navigateByUrl('/signin');
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    // this will be passed from the route config
    // on the data 
    // Store the attempted URL for redirecting
    this.redirectPath = route.path
    const expectedRole = route.data.expectedRole
    // const token = localStorage.getItem('token');
    // decode the token to get its payload
    // const tokenPayload = decode(token);

    if (this.hasAccess(route.path, expectedRole)) { return true; }
    else {
      this.router.navigateByUrl('/signin');
      return false;
    }

  }

  hasAccess(url: string, role: string): boolean {
    if (this._user.role == role) { return true; }

    // Store the attempted URL for redirecting
    this.redirectPath = url

    // Navigate to the login page with extras
    // this.router.navigate(['/signin'])
    return false;
  }

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
    this.storage.set(this.USER_KEY, null)
    return this.save()
  }

  /**
   * Process a signin/signup response to store user data
   */
  _signedIn(user: IUser) {
    this._user = user;
    return this.save(user)
  }

  save(user?: IUser) {
    return this.storage.set(this.USER_KEY, user ? user : this._user)
  }
}
