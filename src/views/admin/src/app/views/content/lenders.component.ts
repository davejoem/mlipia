import { Component } from '@angular/core'
import { Api } from '../../api.service'
import { ILender } from '../../interfaces/lender'
import { HybridMessage } from '../../models/models'

@Component({
  templateUrl: 'lenders.component.html'
  , styleUrls: ['../../app.component.css']
})
export class LendersComponent {
  public lenders: ILender[]

  constructor(private api: Api) { }

  ngOnInit() {
    this.getUsers()
    this.lenders = [
      { name: `Tala` }, { name: `Branch` }, { name: `Timiza` }
    ]
  }

  private getUsers() {
    this.api.send(new HybridMessage('/lenders/list', 'lenders:list', 'get')).subscribe((lenders: ILender[]) => {
      this.lenders = lenders
    })
  }

}
