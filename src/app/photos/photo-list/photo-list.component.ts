import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];

  constructor(
    private photoService: PhotoService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userName = this.activateRoute.snapshot.params.userName;

    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
