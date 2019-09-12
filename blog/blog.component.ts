import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() postsTitre: string
  @Input() postsMessage: string;
  @Input() postsLoveIts: number;
  @Input() postsDateMessage: Date;

  constructor() { 
  }

  ngOnInit() {
  }

  getMsg(){
  	return this.postsMessage;
  }
  getColor(){
    if(this.postsLoveIts > 0){
    	return 'green';
    } else if(this.postsLoveIts < 0) {
    	return 'red';
    } 
  }

  addLoveIt(){
  	this.postsLoveIts ++;
  }
  lessLoveIt(){
  	this.postsLoveIts --;
  }
}
