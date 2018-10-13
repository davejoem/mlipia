import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { User } from '../../user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  constructor(private user: User) {
    switch (this.user._user.role) {
      case `admin`:
        break
      case `manager`:
        this.navItems.splice(0, 1)
        break
      case `approver`:
        this.navItems.splice(0, 2)
        break
      case `agent`:
        this.navItems.splice(0, 3)
        break
    }
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = true || document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });

    switch (this.user._user.role) {
      case `admin`:
        break
      case `manager`:
        this.navItems.splice(0, 1)
        break
      case `approver`:
        this.navItems.splice(0, 2)
        break
      case `agent`:
        this.navItems.splice(0, 3)
        break
    }
  }
}
