import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent implements OnInit {

  constructor(private _router: Router) { }

  goGallery(): void {
    this._router.navigate(['/gallery'])
  }

  ngOnInit() {
  }

}
