import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { Api } from '../../api.service'
import { ITransaction } from '../../interfaces/interfaces'
import { HybridMessage } from '../../models/models'

@Component({
  templateUrl: 'transactions.component.html'
  , styleUrls: ['../../app.component.css']
})
export class TransactionsComponent implements OnInit {
  private selected: string
  public transactions: ITransaction[]

  constructor(
    private api: Api
    , private router: Router
    , private route: ActivatedRoute,
  ) {
    this.selected = 'all'
    this.transactions = []
  }

  ngOnInit() {
    this.getTransactions()
  }

  private getTransactions() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.send(
          new HybridMessage(
            '/transactions/list'
            , 'transactions:list'
            , 'post'
            , { select: this.selected ? this.selected : params.get('select') }
          )
        )
      )
    ).subscribe((transactions: ITransaction[]) => {
      this.transactions = transactions
      console.log(transactions)
    })
  }

}
