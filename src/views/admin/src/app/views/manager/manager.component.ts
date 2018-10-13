import { Component } from '@angular/core';

@Component({
  templateUrl: 'manager.component.html'
})
export class ManagerComponent {

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
