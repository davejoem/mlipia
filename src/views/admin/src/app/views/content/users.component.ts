import { Component, OnInit } from '@angular/core'
import { IUser } from '../../interfaces/interfaces'
import { Api } from '../../api.service'
import { HybridMessage } from '../../models/models'

@Component({
  templateUrl: 'users.component.html'
  , styleUrls: ['../../app.component.css']
})
export class UsersComponent implements OnInit {
  public users: IUser[]

  constructor(private api: Api) { }

  ngOnInit() {
    this.getUsers()
    this.users = [
      {
        name: 'Dave Joe M'
        , role: 'admin'
        , username: 'dave'
        , active: true
      }
      , {
        name: 'Kelvin Karis'
        , role: 'manager'
        , username: 'kelvin'
        , active: true
      }
      , {
        name: 'Anthony M'
        , role: 'approver'
        , username: 'anthony'
        , active: true
      }
      , {
        name: 'Some guy'
        , role: 'agent'
        , username: 'agent'
        , active: true
      }
    ]
  }

  private getUsers() {
    this.api.send(new HybridMessage('/users/list', 'users:list', 'get')).subscribe((users: IUser[]) => {
      this.users = users
    })
  }
}
