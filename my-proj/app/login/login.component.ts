import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/authservice';
import {User} from '../login/user';
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms'; 
import {Message} from 'primeng/primeng';

@Component({
    moduleId:module.id,
    selector:'login',
    templateUrl:'login.html',
    providers:[AuthService]
})
export class LoginComponent  implements OnInit{
    model: any = {};
    msgs: Message[] = [];    
    userform: FormGroup;    
    submitted: boolean;  
        
     constructor(private authenticationService: AuthService, private router: Router,private _fb: FormBuilder) {
            console.log('constructor login');
//     //called first time before the ngOnInit()
    }
    ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
    // reset login status
        this.authenticationService.logout();
            console.log('login coponent ngonit logout login');

        this.userform = this._fb.group({
            'cusername': new FormControl('', Validators.required),
            'cpassword': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))
        });
 }
  login() {
    console.log('model    ', this.model.username);
        console.log('model   password  ', this.model.password);
        this.authenticationService.authenticateNow(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                     console.log('login successful    ', this.model.username);
                    this.router.navigate(['/dashboard']);
                } else {
                    // login failed
                    this.msgs.push({severity:'warn', summary:'Failed', detail:'Username or password is incorrect'});
                }
            });
  }
}


