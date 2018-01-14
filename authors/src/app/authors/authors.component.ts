import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  title;
  listAuthors;

  constructor(service: AuthorsService) { 
    this.title = service.getTitle();
    this.listAuthors = service.getListAuthors();
  }

}
