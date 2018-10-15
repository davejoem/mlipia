import { Component, OnInit } from '@angular/core';
import { Api } from '../../api.service';
import { IGroup } from '../../interfaces/group';
import { HybridMessage } from '../../models/models';

@Component({
  templateUrl: 'groups.component.html'
  , styleUrls: ['../../app.component.css']
})
export class GroupsComponent implements OnInit {

  public groups: IGroup[]

  constructor(private api: Api) { }

  ngOnInit() {
    this.getUsers()
    this.groups = [
      {
        name: 'Administrators'
        , rights: []
        , users: {
          all: [{
            name: 'Dave Joe M'
            , role: 'admin'
            , username: 'dave'
            , active: true
          }]
          , active: [{
            name: 'Dave Joe M'
            , role: 'admin'
            , username: 'dave'
            , active: true
          }]
          , disabled: []
        }
      }
      , {
        name: 'Managers'
        , rights: []
        , users: {
          all: [{
            name: 'Kelvin Karis'
            , role: 'manager'
            , username: 'kelvin'
            , active: true
          }]
          , active: [{
            name: 'Kelvin Karis'
            , role: 'manager'
            , username: 'kelvin'
            , active: true
          }]
          , disabled: []
        }
      },
      {
        name: 'Approvers'
        , rights: []
        , users: {
          all: [{
            name: 'Anthony M'
            , role: 'approver'
            , username: 'anthony'
            , active: true
          }]
          , active: [{
            name: 'Anthony M'
            , role: 'approver'
            , username: 'anthony'
            , active: true
          }]
          , disabled: []
        }
      },
      {
        name: 'Agents'
        , rights: []
        , users: {
          all: [{
            name: 'Some guy'
            , role: 'agent'
            , username: 'agent'
            , active: true
          }]
          , active: [{
            name: 'Some guy'
            , role: 'agent'
            , username: 'agent'
            , active: true
          }]
          , disabled: []
        }
      },
    ]
  }

  private getUsers() {
    this.api.send(new HybridMessage('/groups/list', 'groups:list', 'get')).subscribe((groups: IGroup[]) => {
      this.groups = groups
    })
  }

}
