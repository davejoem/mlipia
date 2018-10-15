import { Component, OnInit } from '@angular/core'
import { ModalDirective } from 'ngx-bootstrap/modal'
import { IClient } from '../../interfaces/interfaces'
import { Api } from '../../api.service'
import { HybridMessage } from '../../models/models'

@Component({
  templateUrl: 'clients.component.html'
  , styleUrls: ['../../app.component.css']
})
export class ClientsComponent implements OnInit {

  public clients: IClient[]
  public infoModal
  public selected_client: IClient
  /**
   *
   */
  constructor(private api: Api) { }

  /**
   *@description run on application start
   *@access public
   * @memberof ClientsComponent
   */
  ngOnInit() {
    this.getClients()
    this.clients = [
      {
        name: 'Dave Joe M'
        , rating: 1500
        , mlipia_balance: 20000
      }
      , {
        name: 'Kelvin Karis'
        , rating: 1500
        , mlipia_balance: 1600
      }
      , {
        name: 'Anthony M'
        , rating: 1500
        , mlipia_balance: 33333
      }
      , {
        name: 'Some guy'
        , rating: 400
        , mlipia_balance: 20000
      }
    ]
  }

  private getClients() {
    this.api.send(new HybridMessage('/clients/list', 'clients:list', 'get')).subscribe((clients: IClient[]) => {
      this.clients = clients
    })
  }

  public selectClient(client: IClient) {
    this.selected_client = client
  }

}
