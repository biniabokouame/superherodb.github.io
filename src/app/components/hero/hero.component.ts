import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  hero: any;

  constructor(private myDataService: MyDataService, private router: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const heroId = this.router.snapshot.paramMap.get('id');

    this.myDataService
    .getHeroes()
    .subscribe((data) => {
      this.hero = data.find((h:any) => h.id == heroId);
      console.log(this.hero);
    })
  }

  goBack(): void {
    this.location.back();
  }
}
