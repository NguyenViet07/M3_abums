import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  photoList: Photo[] = [];
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhoto().subscribe(result => {
      this.photoList = result;
    });
  }

}
