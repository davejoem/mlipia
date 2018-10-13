import { Component } from '@angular/core';

@Component({
  templateUrl: 'agent.component.html'
})
export class AgentComponent {

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
