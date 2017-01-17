import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class User {
  email: string;
  password: string;
 
  constructor(email: string, password: string) {
    this.email = email;
		this.password = password;
  }
}


@Injectable()
export class AuthService {
	
	currentUser: User;
	public login(credentials) {
		if (credentials.email === null || credentials.password === null) {
			return Observable.throw("Please insert credentials");
		} if(!this.validateEmail(credentials.email) || credentials.email.length < 4) {
			return Observable.throw("Please insert valid email");			
		} if(credentials.password.length < 4) {
			return Observable.throw("Please insert a longer password");			
		}	else {
			return Observable.create(observer => {
				// At this point make a request to your backend to make a real check!
        let access = (credentials.email && credentials.password);
        this.currentUser = new User(credentials.email, credentials.password);
				console.log(credentials.email, credentials.password)
        observer.next(access);
        observer.complete();
				});
		}
	}
	
	validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	}
	
	
	
		
  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

}
