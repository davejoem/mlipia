import { Component } from '@angular/core';

@Component({
  templateUrl: 'admin.component.html'
})
export class AdminComponent {

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
