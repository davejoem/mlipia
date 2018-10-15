import { Component, OnInit } from '@angular/core';
import { Api } from '../../api.service'
import { HybridMessage } from '../../models/models';
import { IAccount } from '../../interfaces/account';
@Component({
  templateUrl: 'accounts.component.html'
  , styleUrls: ['../../app.component.css']
})
export class AccountsComponent implements OnInit {
  private accounts: IAccount[]

  constructor(private api: Api) { }

  ngOnInit() {
    this.getAccounts()
    this.accounts = [
      {
        name: `Equity`
        , balance: 1000000
        , apiEnd: `http://www.equity.co.ke/deduct/account`
      }
      , {
        name: `KCB`
        , balance: 1500000
        , apiEnd: `http://www.kcb.co.ke/deduct/account`
      }
      , {
        name: `Co-operative`
        , balance: 600000
        , apiEnd: `http://www.coop.co.ke/deduct/account`
      }
      , {
        name: `Consolidated`
        , balance: 120000
        , apiEnd: `http://www.consolidated.co.ke/deduct/account`
      }
    ]
  }

  private getAccounts() {
    this.api.send(new HybridMessage('/accounts/list', 'accounts:list', 'get')).subscribe((accounts: IAccount[]) => {
      this.accounts = accounts
    })
  }

}
