import { Component } from '@angular/core';
import { IonicApp, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
// import * as ProjectService from '../../services/projectservice';
import { ProjService } from '../../providers/proj-service';



@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
	styles: [`
		.item-note {
			font-size: smaller;
		}
	`]
})


export class ProjectsPage {
	loading: Loading;
	navParams: NavParams;
  selectedItem: any;
	
	// projects: Array<{name: string, desc: string}>;
	projects: [{name: string, desc: string}];
	newproject = {name: '', desc: ''};
	
  constructor(app:IonicApp, private proj: ProjService, public nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
		this.projects = JSON.parse(localStorage.getItem('projects'));	
		
		
  }
	
	public buildStorage() {
		console.log('entered buildStorage()');
		this.selectedItem = this.navParams.get('projects');	

		window.localStorage['projects'] = JSON.stringify([{
				name: 'newproject.name',
				desc: 'newproject.desc'
		}]);
		
		console.log(JSON.parse(localStorage.getItem('projects')));
		//Initialize localStorage with default values
		var a = [];
		a.push(JSON.parse(localStorage.getItem('projects')));
		localStorage.setItem('projects', JSON.stringify(a));
	}
	
	public addProject() {
		console.log('entered addProject()');
		if(localStorage.getItem('projects') === null || JSON.parse(localStorage.getItem('projects')).length == 0) {
			this.buildStorage();
		}
			this.proj.addProject(this.newproject, this.projects).subscribe(allowed => {
      if (allowed) {
				
        setTimeout(() => {
        // this.loading.dismiss();
        this.nav.setRoot(ProjectsPage)
        });
      } else {
        this.showError("Access Denied");
      }
    },
    error => {
      this.showError(error);
    });
	}
		
	// showLoading() {
    // this.loading = this.loadingCtrl.create({
      // content: 'Please wait...'
    // });
    // this.loading.present();
  // }
	
	showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
	
	clearStorage() {
		console.log('clearing storage');
		window.localStorage.clear();
	}
	
	// clearKeys() {
    // this.storage.clear().then(() => {
      // console.log('Keys have been cleared');
    // });
  // }
	
	// search(event, key) {
        // ProjectService.findByName(event.target.value).then(projects => this.projects = projects);
	// }

  // itemTapped(event, project) {
    // this.navCtrl.push(ProjectsPage, {
      // project: project
    // });
  // }
}


