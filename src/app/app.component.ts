import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon Premier Post',
      content: 'Contenue 1',
      like: '1'

    },
    {
      title: 'Mon second Post',
      content: 'Contenue 2',
      unLike: '1'

    },
    {
      title: 'Encore un post',
      content: 'Contenue 3',
      like: '4'
    },

  ];

}
