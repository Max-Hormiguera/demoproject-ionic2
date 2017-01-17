import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class Project {
  name: string;
  desc: string;
 
  constructor(name: string, desc: string) {
    this.name = name;
		this.desc = desc;
  }
}


@Injectable()
export class ProjService {
	
	// public setProjectList() {
		// projects = JSON.parse(localStorage.getItem('projects')) || [];
	// }
	
	public addProject(newproject, projects) {
		if (newproject.name === null) {
			return Observable.throw("Please insert credentials");			
		} else {
			return Observable.create(observer => {
				// At this point make a request to your backend to make a real check!
        let access = (newproject.name);
        // this.currentUser = new User(credentials.email, credentials.password);
				
				
				// projects.push({ name: newproject.name, desc: newproject.desc });
				
				var a = [];
				// Parse the serialized data back into an aray of objects
				a = JSON.parse(localStorage.getItem('projects'));
				console.log('tp',a);
				// Push the new data (whether it be an object or anything else) onto the array
				a.push(newproject);
				// Alert the array value
				alert(a);  // Should be something like [Object array]
				// Re-serialize the array back into a string and store it in localStorage
				localStorage.setItem('projects', JSON.stringify(a));
				
				console.log('tp',a);
				console.log('np',newproject);
			
				
				// JSON.parse(localStorage.getItem('projects')).forEach(function(i) {
					// console.log('o', i, newproject.name, newproject.desc);
				// });
				
				// for (i = 0; i < JSON.parse(localStorage.getItem('projects')).length; i++) {
					// console.log('o', i, newproject.name, newproject.desc);
				// }
				newproject.name = '';
				newproject.desc = '';
				projects = JSON.parse(localStorage.getItem('projects')) || []	;
				
				
				
				
        observer.next(access);
        observer.complete();
				});
			
		}
	}
	

	
  constructor(public http: Http) {
    console.log('Hello ProjService Provider');
  }

}
