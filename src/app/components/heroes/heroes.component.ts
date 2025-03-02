import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, tap } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  myHero: any;
  myHeroes$: Observable<any[]> | undefined;
  filteredHeroes$: any;
  private searchTerm$ = new BehaviorSubject<string>('');
  
  constructor(private myDataService: MyDataService, private router: Router) { }

  ngOnInit(): void {
    this.myHeroes$ = this.myDataService
      .getHeroes()
      .pipe(tap(data => this.myHero = data));

    this.filteredHeroes$ = combineLatest([this.myHeroes$, this.searchTerm$]).pipe(
      map(([heroes, searchTerm]) =>
        heroes.filter(hero =>
          hero.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  onSearch(event: Event): void {
    this.searchTerm$.next((event.target as HTMLInputElement)!.value.trim());
  }
  

  goToHero(id: string) {
    this.router.navigate(['/hero', id]);
  }
  
  
}
