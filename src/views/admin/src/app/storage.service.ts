import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class Storage {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {

  }

  public get(key: string): any {
    return this.storage.get(key)
  }

  public set(key: string, value: any) {
    return this.storage.set(key, value)
  }
}
