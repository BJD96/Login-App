import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../models/login';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { pop} from '../animations';
import { fade} from '../animations';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [pop(), fade()],
  host: {'[@pop]': '',
'[@fade]': ''}
})
export class LoginFormComponent implements OnInit {

  type: string = "password";
  rForm: FormGroup;
  loading = false;
  returnUrl: string;
  model : Login={
    username:null,
    password:null};
  show: boolean = false;


  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
    this.createForm();

  }

  ngOnInit() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  createForm() {
    this.rForm = this.fb.group({
      'userName': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }




  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}





  showPassword() {
    this.show = !this.show;
    this.show == true ? this.type = "text" : this.type = "password";
  }
}
