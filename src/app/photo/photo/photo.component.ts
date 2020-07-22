import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  description = 'Grêmio';
  url = 'https://www.gazetaesportiva.com/wp-content/uploads/imagem/2017/12/01/38735664791_f625e06c5b_k-1024x683.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
