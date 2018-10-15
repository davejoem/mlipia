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
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  private accessors: string[]

  constructor(
    private router: Router
    , private user: User
  ) {
    this.navItems = []

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
    this.navItems = this.user.createShortcuts()
  }
}
