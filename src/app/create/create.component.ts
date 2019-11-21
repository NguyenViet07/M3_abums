import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  messageSuccess = '';
  messageError = '';
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  add(photo: Photo) {
    this.photoService.create(photo).subscribe(() => {
      this.messageSuccess = 'Add success';
    }, error => {
      this.messageError = 'Add error';
    });
  }

}
