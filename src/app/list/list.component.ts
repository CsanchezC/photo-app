import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Album, Photo } from "../interfaces/models";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // readonly DATA_URL ="https://jsonplaceholder.typicode.com/photos";
  readonly DATA_URL ="assets/data.json";
  albums: Array<Album> = new Array<Album>();

  constructor(private http: HttpClient, private router: Router) { }

  getData(){
    return this.http.get<any[]>(this.DATA_URL);
  }

  ngOnInit(): void {
    this.getData().subscribe((data: Array<Photo>) =>{
      for (let i = 0; i < data.length; i++) {
        if (this.albums.filter(e => e.albumId === data[i].albumId).length == 0){
          let album: Album = {
            albumId: data[i].albumId,
            thumbnailUrl: data[i].thumbnailUrl,
            photos: data.filter(e => e.albumId === data[i].albumId)
          }
          this.albums.push(album);
        }
      }
    });
  }

}
