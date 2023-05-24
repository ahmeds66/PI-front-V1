import { Plays } from './../model/plays.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PlaysService {
  //An array of plays
  plays!: Plays[];
  play!: Plays;
  //URL to web api
  apiURl: string = 'http://localhost:8081/theater/api/play';


  constructor(private httpClient: HttpClient) { }

  listPlays(): Observable<Plays[]> {
    return this.httpClient.get<Plays[]>(this.apiURl+"/all");
  }

  getPlay(idPlay: number): Observable<Plays> {
    return this.httpClient.get<Plays>(this.apiURl + "/getbyid" + idPlay);
  }

  createPlay(play: Plays): Observable<Plays> {
    return this.httpClient.post<Plays>(this.apiURl + "/addplay" , play, httpOptions);
  }

  updatePlay(play: Plays): Observable<Plays> {
    return this.httpClient.put<Plays>(this.apiURl + "/updateplay/" + play.idPlay, play, httpOptions);
  }

  deletePlay(idPlay: number): Observable<Plays> {
    return this.httpClient.delete<Plays>(this.apiURl + "/deleteplay/" + idPlay);
  }
}
