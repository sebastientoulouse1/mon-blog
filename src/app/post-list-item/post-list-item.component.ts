import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

@Input() PostTitle: string;

@Input() content: string;

loveIts: number=0;

Created_at = new Date();


  constructor() { }

  ngOnInit() {
  }

  //création des fonctions likes et dislikes
  
Like() {
    return this.loveIts++;
}
DisLike() {
    return this.loveIts--;
}
}
