import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyDataService } from 'src/app/services/my-data.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let mockDataService: jasmine.SpyObj<MyDataService>;

  const HEROES = [
    { id: 1, name: 'Deadman', images: { md: '' }, powerstats: {}, biography: {}, appearance: {}, work: {}, connections: {} },
    { id: 2, name: 'Multiple Man', images: { md: '' }, powerstats: {}, biography: {}, appearance: {}, work: {}, connections: {} },
    { id: 3, name: 'One Punch Man', images: { md: '' }, powerstats: {}, biography: {}, appearance: {}, work: {}, connections: {} },
  ];


  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('MyDataService', ['getHeroes']);

    await TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeaderComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule, 
      ],
      providers: [{ provide: MyDataService, useValue: mockDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    mockDataService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all heroes initially', () => {
    const heroElements = fixture.debugElement.queryAll(By.css('.hero-card'));
    expect(heroElements.length).toBe(3);
  });

  it('should filter heroes when searching "dead"', () => {
    component.onSearch({ target: { value: 'dead' } } as unknown as Event);
    fixture.detectChanges();

    const heroElements = fixture.debugElement.queryAll(By.css('.hero-card'));
    expect(heroElements.length).toBe(1);
  });


  it('should return no results for a non-matching search', () => {
    component.onSearch({ target: { value: '&' } } as unknown as Event);
    fixture.detectChanges();

    const heroElements = fixture.debugElement.queryAll(By.css('.hero-card'));
    expect(heroElements.length).toBe(0);
  });

  it('should reset results when the search input is empty', () => {
    component.onSearch({ target: { value: '' } } as unknown as Event);
    fixture.detectChanges();

    const heroElements = fixture.debugElement.queryAll(By.css('.hero-card'));
    expect(heroElements.length).toBe(3);
  });

  it('should be case insensitive when searching "DEAD"', () => {
    component.onSearch({ target: { value: 'DEAD' } } as unknown as Event);
    fixture.detectChanges();

    const heroElements = fixture.debugElement.queryAll(By.css('.hero-card'));
    expect(heroElements.length).toBe(1);
  });
});
