import { Component } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise(
  	(resolve, reject) => {
  		const date = new Date();
  		setTimeout(
  			()=>{
  				resolve(date);
  			}, 2000
  		);
  	}
  )

  datNow = new Date();

  appareils=[
	  {
	  	name: "Machine à Laver",
	  	status : "éteint"
	  },
	  {
	  	name: "Télévision",
	  	status : "Allumée"
	  },
	  {
	  	name: "Ordinateur",
	  	status : "éteint"
	  }
  ];

  posts=[
  	{
  		titre: "Mon premier post",
  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      loveits: "2",
  		created_at : this.datNow
  	},  	
  	{
  		titre: "Mon deuxième post",
  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      loveits: "-1",
  		created_at : this.datNow
  	},
  	{
  		titre: "Encore un  post",
  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      loveits: "0",
  		created_at : this.datNow
  	}
  ]


  constructor() {
    
  }
  onAllumer(){
  	console.log('On allume tout !');
  }
}