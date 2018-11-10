import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() dateCreate ;
  @Input() like = 0;

  constructor() {
      this.dateCreate = new Date();

  }

  ngOnInit() {
  }
  likeIt(value) {
    if ( value === true )
    this.like = this.like+1;
    if ( value === false )
      this.like = this.like-1;
    console.log( this.like );
  }
}
