import { PlaysService } from './../Service/plays.service';
import { Plays } from './../model/plays.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})
export class PlaysComponent implements OnInit{

  plays!: Plays[];//table of plays

  constructor(private playsService: PlaysService) { }

  

  ngOnInit(): void {
    this.playsService.listPlays().subscribe(
      plays => this.plays = plays
    );
  }

  deletePlay(p : Plays) {
    let conf = confirm('Are you sure you want to delete this play?');
    if (conf) {
      this.playsService.deletePlay(p.idPlay!).subscribe(
        () => this.plays = this.plays.filter(pl => pl.idPlay != p.idPlay)
      );
    }
  }

  

}
