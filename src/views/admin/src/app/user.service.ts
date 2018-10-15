import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
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
  public navItems: any[]
  public defaultNavItems: any[]
  public accessors: string[]
  private res: any[]

  constructor(
    public api: Api
    , private http: Http
    , public router: Router
    , public storage: Store
  ) {
    this._user = this.load()
    this.accessors = ['admin', 'manager', 'approver', 'agent']
    this.navItems = []
    this.defaultNavItems = [
      {
        name: 'Quick Links',
        title: true,
        icon: 'icon-speedometer',
        accessors: ['admin', 'manager', 'approver', 'agent']
      },
      {
        name: 'Groups',
        url: '/groups',
        icon: 'icon-people',
        accessors: ['admin']
      },
      {
        name: 'Users',
        url: '/users',
        icon: 'icon-people',
        accessors: ['admin'],
        children: [
          {
            name: 'All',
            url: '/users/all',
            icon: 'icon-list'
          },
          {
            name: 'Administrators',
            url: '/users/administrators',
            icon: 'icon-puzzle'
          },
          {
            name: 'Managers',
            url: '/users/managers',
            icon: 'icon-puzzle'
          },
          {
            name: 'Approvers',
            url: '/users/approvers',
            icon: 'icon-puzzle'
          },
          {
            name: 'Agents',
            url: '/users/agents',
            icon: 'icon-puzzle'
          }
        ]
      },
      {
        name: 'Accounts',
        url: '/accounts',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: '3'
        },
        accessors: ['admin', 'manager']
      },
      {
        name: 'Lenders',
        url: '/lenders',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: '3'
        },
        accessors: ['admin', 'manager']
      },
      {
        name: 'Transactions',
        url: '/transactions',
        icon: 'icon-pie-chart',
        accessors: ['admin', 'manager', 'approver'],
        children: [
          {
            name: 'All',
            url: '/transactions/all',
            icon: 'icon-list'
          },
          {
            name: 'Successful',
            url: '/transactions/successful',
            icon: 'icon-list'
          },
          {
            name: 'Failed',
            url: '/transactions/failed',
            icon: 'icon-list'
          }
        ]
      },
      {
        name: 'Clients',
        url: '/clients',
        icon: 'icon-pie-chart',
        accessors: ['admin', 'manager', 'approver', 'agent']
      }
    ]
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

  public createShortcuts(): any[] {
    switch (this._user.role) {
      case `admin`:
        this.registerAdminShortcuts()
        break
      case `manager`:
        this.registerManagerShortcuts()
        break
      case `approver`:
        this.registerApproverShortcuts()
        break
      case `agent`:
        this.registerAgentShortcuts()
        break
    }
    return this.navItems
  }

  private registerAdminShortcuts(): void {
    let navs: any[] = this.defaultNavItems
    navs.forEach((navItem: any) => {
      if (navItem.url) {
        let path: string = <string>navItem.name
        this.countBadge(path.toLowerCase(), (count: number) => {
          if (count != null && count > 0) navItem.badge = { variant: 'info', text: count }
          else delete navItem.badge
        })
        navItem.url = `/home/admin${navItem.url}`
      }
      if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
        if (child.url) child.url = `/home/admin${child.url}`
      })
      delete navItem.accessors
    })
    this.navItems = navs
  }

  private registerManagerShortcuts(): void {
    this.defaultNavItems.forEach((navItem: any, index: number) => {
      console.log(navItem, navItem.accessors.indexOf('manager') >= 0)
      if (navItem.accessors.indexOf('manager') >= 0) {
        if (navItem.url) {
          let path: string = <string>navItem.name
          this.countBadge(path.toLowerCase(), (count: number) => {
            if (count != null && count > 0) navItem.badge = { variant: 'info', text: count }
            else delete navItem.badge
          })
          navItem.url = `/home/manager${navItem.url}`
        }
        if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
          if (child.url) child.url = `/home/manager${child.url}`
        })
        delete navItem.accessors
        this.navItems.push(navItem)
      }
    })
  }

  private registerApproverShortcuts() {
    this.defaultNavItems.forEach((navItem: any, index: number) => {
      if (navItem.accessors.indexOf('approver') >= 0) {
        if (navItem.url) {
          let path: string = <string>navItem.name
          this.countBadge(path.toLowerCase(), (count: number) => {
            if (count != null && count > 0) navItem.badge = { variant: 'info', text: count }
            else delete navItem.badge
          })
          navItem.url = `/home/approver${navItem.url}`
        }
        if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
          if (child.url) child.url = `/home/approver${child.url}`
        })
        delete navItem.accessors
        this.navItems.push(navItem)
      }
    })
  }

  private registerAgentShortcuts() {
    this.defaultNavItems.forEach((navItem: any, index: number) => {
      if (navItem.accessors.indexOf('agent') >= 0) {
        if (navItem.url) {
          let path: string = <string>navItem.name
          this.countBadge(path.toLowerCase(), (count: number) => {
            if (count != null && count > 0) navItem.badge = { variant: 'info', text: count }
            else delete navItem.badge
          })
          navItem.url = `/home/agent${navItem.url}`
        }
        if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
          if (child.url) child.url = `/home/agent${child.url}`
        })
        delete navItem.accessors
        this.navItems.push(navItem)
      }
    })
  }

  private autoFilterNavItems() {
    this.accessors.forEach(accessor => {
      // console.log('checking', accessor)
      this.defaultNavItems.forEach((navItem: any, index: number) => {
        // console.log(`${accessor} in ${navItem.accessors.toString()}: `, accessor in navItem.accessors)
        if (navItem.accessors.indexOf(accessor) >= 0) {
          if (navItem.url) {
            let path: string = <string>navItem.name
            this.countBadge(path.toLowerCase(), (count: number) => {
              navItem.badge = {
                variant: 'info',
                text: count
              }
            })
            navItem.url = `/home/${accessor}/${navItem.url}`
          }
          if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
            if (child.url) child.url = `/home/${accessor}/${child.url}`
          })
          delete navItem.accessors
          this.navItems.push(navItem)
        }
      })
    })
  }

  public countBadge(type: string, cb: Function): void {
    // this.api.send(new HybridMessage(`/${type}/list`, `${type}:list`, ``)).subscribe((res: any[]) => {
    //   cb(res.length)
    // })
    this.http.get(`${this.api.url}/${type}/list`)
      .map(res => res.json()).subscribe((res: any[]) => {
        cb(res.length)
      }, (err: any) => {
        cb(0)
      })
  }
}
