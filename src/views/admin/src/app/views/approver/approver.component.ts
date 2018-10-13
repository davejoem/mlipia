import { Component } from '@angular/core';

@Component({
  templateUrl: 'approver.component.html'
})
export class ApproverComponent {

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
