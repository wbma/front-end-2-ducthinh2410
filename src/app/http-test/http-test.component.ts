import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Image, Thumbnail } from '../model/image';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  // Task A
  data: any

  // Task B
  imageURL: string;

  baseURL: string = "http://media.mw.metropolia.fi/wbma/";
  upload: string = "uploads/";
  media: string = "media/":
  fileId: string = "1";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getTsConfigFile(): void {
    this.http.get('../assets/data.json').subscribe(res => this.data = res);
  }

  getMedia() {
    this.http.get<Image>(`${this.baseURL}${this.media}${this.fileId}`).subscribe(image => this.imageURL = `${this.baseURL}${this.upload}${image.thumbnails["640"]}`);
  }

}
