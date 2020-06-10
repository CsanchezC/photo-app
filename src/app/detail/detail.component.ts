import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Photo } from "../interfaces/models";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  // readonly DATA_URL ="https://jsonplaceholder.typicode.com/photos";
  readonly DATA_URL ="assets/data.json";

  id: number;
  photo: Photo;

  getData(){
    return this.http.get<any[]>(this.DATA_URL);
  }

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getData().subscribe((data: Array<Photo>) =>{
        this.photo = data.filter(e => e.id === Number(this.id))[0];
        });
    });
  }

  goToPhoto(photoId){
    this.router.navigate(['/detail-view'], {queryParams: {id: photoId}});
  }

  goBack(albumId){
    this.router.navigate(['/grid-view'], {queryParams: {id: albumId}});
  }

}
