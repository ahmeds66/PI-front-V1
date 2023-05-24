import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plays } from 'src/app/model/plays.model';
import { PlaysService } from 'src/app/Service/plays.service';

@Component({
  selector: 'app-addplay',
  templateUrl: './addplay.component.html',
  styleUrls: ['./addplay.component.css']
})
export class AddplayComponent {

newplay = new Plays();

newIdPlay!: number;

 constructor(private playsService: PlaysService,
            private router : Router) { }

ngOnInit(): void {

}

addPlay() {
  this.playsService.createPlay(this.newplay).subscribe(
    play => {
      this.router.navigateByUrl("/plays");
    }
  );
}

}
