import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  photo: Photo;
  messageSuccess = '';
  messageError = '';
  sub: Subscription;
  constructor(private photoService: PhotoService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.photoService.getById(id).subscribe(next => {
        this.photo = next;
      }, error => {
        this.messageSuccess = error.toString();
      });
    });
  }

  delete() {
    this.photoService.delete(this.photo.id).subscribe(() => {
      this.messageSuccess = 'Delete Success';
    }, () => {
      this.messageError = 'Delete Error';
    });
  }
}
