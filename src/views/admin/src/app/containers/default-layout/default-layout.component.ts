import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { navItems } from './../../_nav'
import { User } from '../../user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  // public navItems = navItems;
  public navItems: any[]
  public defaultNavItems: any[]
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  private accessors: string[]

  constructor(
    private router: Router
    , private user: User
  ) {
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
        }
        , accessors: ['admin', 'manager']
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
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = true || document.body.classList.contains('sidebar-minimized')
    })

    this.changes.observe(<Element>this.element, {
      attributes: true
    })
  }

  ngOnInit() {
    this.loadShortCuts()
    // this.autoFilterNavItems()
  }

  private loadShortCuts(): void {
    switch (this.user._user.role) {
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
  }

  private signout(): void {
    this.user.signOut()
    this.router.navigateByUrl('/signin')
  }

  private registerAdminShortcuts(): void {
    let navs: any[] = this.defaultNavItems
    navs.forEach((navItem: any) => {
      if (navItem.url) navItem.url = `/home/admin${navItem.url}`
      if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
        if (child.url) child.url = `/home/admin${child.url}`
      })
      delete navItem.accessors
    })
    this.navItems = navs
  }

  private registerManagerShortcuts(): void {
    let navs: any[] = this.defaultNavItems
    navs.forEach((navItem: any, index: number) => {
      if ('manager' in navItem.accessors) {
        if (navItem.url) navItem.url = `/home/manager${navItem.url}`
        if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
          if (child.url) child.url = `/home/manager${child.url}`
        })
        delete navItem.accessors
      } else {
        navs.splice(index, 1)
      }
    })
    this.navItems = navs
  }

  private registerApproverShortcuts() {
    let navs: any[] = this.defaultNavItems
    navs.forEach((navItem: any, index: number) => {
      if ('approver' in navItem.accessors) {
        if (navItem.url) navItem.url = `/home/approver${navItem.url}`
        if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
          if (child.url) child.url = `/home/approver${child.url}`
        })
        delete navItem.accessors
      } else {
        navs.splice(index, 1)
      }
    })
    this.navItems = navs
  }

  private registerAgentShortcuts() {
    let navs: any[] = this.defaultNavItems
    navs.forEach((navItem: any, index: number) => {
      if ('agent' in navItem.accessors) {
        if (navItem.url) navItem.url = `/home/agent${navItem.url}`
        if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
          if (child.url) child.url = `/home/agent${child.url}`
        })
        delete navItem.accessors
      } else {
        navs.splice(index, 1)
      }
    })
    this.navItems = navs
  }

  private autoFilterNavItems() {
    let navs: any[] = this.defaultNavItems
    this.accessors.forEach(accessor => {
      // console.log('checking', accessor)
      navs.forEach((navItem: any, index: number) => {
        // console.log(`${accessor} in ${navItem.accessors.toString()}: `, accessor in navItem.accessors)
        if (accessor in navItem.accessors) {
          if (navItem.url) navItem.url = `/home/${accessor}/${navItem.url}`
          if (navItem.children && navItem.children.length) navItem.children.forEach((child: any) => {
            if (child.url) child.url = `/home/${accessor}/${child.url}`
          })
          delete navItem.accessors
        } else {
          navs.splice(index, 1)
        }
      })
    })
    this.navItems = navs
    console.log('auto-sorted', this.navItems)
  }
}
