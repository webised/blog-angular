import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  posts = [
    {
      title: 'titre test',
      content: 'lorem ipsum',
      loveIts: '',
      created_at: ''
    },
    {
      title: 'titre test2',
      content: 'lorem ipsum',
      loveIts: '',
      created_at: ''
    }
  ];
}
