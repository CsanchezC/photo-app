import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Album, Photo } from "../interfaces/models";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  // readonly DATA_URL ="https://jsonplaceholder.typicode.com/photos";
  readonly DATA_URL ="assets/data.json";

  album: Album;
  id: number;

  getData(){
    return this.http.get<any[]>(this.DATA_URL);
  }

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getData().subscribe((data: Array<Photo>) =>{
        this.album = {
          albumId: this.id,
          thumbnailUrl: data.filter(e => e.albumId === Number(this.id))[0].thumbnailUrl,
          photos: data.filter(e => e.albumId === Number(this.id))
        }});
    });
  }

  goToPhoto(photoId){
    this.router.navigate(['/detail-view'], {queryParams: {id: photoId}});
  }

  goBack(){
    this.router.navigate(['/list-view']);
  }

}
