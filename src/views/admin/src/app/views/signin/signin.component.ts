import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/debounceTime'
import { Api } from '../../api.service'
import { Storage } from '../../storage.service'
import { IUser } from '../../interfaces/interfaces'
import { User } from '../../user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit, OnDestroy {
  public action: any
  public signIn: FormGroup
  public validationMessages: any
  public signInErrors: any

  public managed: boolean
  constructor(
    private api: Api
    , private fb: FormBuilder
    , private router: Router
    , private storage: Storage
    , private user: User
  ) {
    this.buildSignInForm()
  }

  ngOnInit() {
    this.user.signOut()
    this.signInErrors = {
      'username': ''
      , 'password': ''
    }
    this.validationMessages = {
      'username': {
        'required': 'Username is required.'
        , 'minlength': 'Username must be at least 4 characters long.'
        , 'maxlength': 'Username cannot be more than 10 characters long.'
      }
      , 'password': {
        'maxlength': 'Confirmation password must be at most 20 characters long.'
        , 'minlength': 'Password must be at least 4 characters long.'
        , 'required': 'Password is required.'
      }
    }
  }

  buildSignInForm() {
    this.signIn = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
      , password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    })
    this.signIn.valueChanges
      .debounceTime(1000)
      .subscribe(() => this.signInValueChanges())
  }

  changedView(action: string) {
    this.action = action
  }

  checkKey(ev: KeyboardEvent) {
    if (ev.which === 13) this.doSign()
  }

  doSign() {
    this.user.signIn(this.signIn.value).subscribe(
      (user: IUser) => {
        this.user._signedIn(user)
        switch (user.role) {
          case 'admin':
            this.router.navigateByUrl('/admin')
            break
          case 'manager':
            this.router.navigateByUrl('/manager')
            break
          case 'approver':
            this.router.navigateByUrl('/approver')
            break
          case 'agent':
            this.router.navigateByUrl('/agent')
            break
        }
      },
      (err: { message: string }) => {
        this.signInErrors.username = err.message
      })
  }

  signInValueChanges() {
    if (!this.signIn) { return; }
    for (const field in this.signInErrors) {
      this.signInErrors[field] = ''
      const control: any = this.signIn.get(field)
      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          this.signInErrors[field] += this.validationMessages[field][key] + ' '
        }
      }
    }
  }

  ngOnDestroy() {

  }
}
