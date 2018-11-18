import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  lastUpdate = new Date();

  like = 0;
  unLike = 0;

  constructor() { }

  ngOnInit() {
  }

  onLike (){
    this.like += 1;
    console.log(this.like);
  }

  onUnLike (){
    this.unLike += 1;
    console.log('on aime pas');
  }
}
