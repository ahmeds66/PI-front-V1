import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plays } from 'src/app/model/plays.model';
import { PlaysService } from 'src/app/Service/plays.service';

@Component({
  selector: 'app-update-play',
  templateUrl: './update-play.component.html',
  styleUrls: ['./update-play.component.css']
})
export class UpdatePlayComponent {
  currentPlay = new Plays();

  constructor(private playsService: PlaysService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.playsService.getPlay(
          this.activatedRoute.snapshot.params['idPlay']
        ).subscribe(
          play => this.currentPlay = play
        );
      }
    );
  }

  updatePlay() {
    this.playsService.updatePlay(this.currentPlay).subscribe(
      () => this.router.navigateByUrl("/plays")
    );
  }

}
