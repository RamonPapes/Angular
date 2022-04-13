import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AnimeService {
  query: any = '';
  url = 'https://graphql.anilist.co';



  constructor(private httpClient: HttpClient) { }

}
