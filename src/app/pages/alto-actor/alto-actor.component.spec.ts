import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltoActorComponent } from './alto-actor.component';

describe('AltoActorComponent', () => {
  let component: AltoActorComponent;
  let fixture: ComponentFixture<AltoActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltoActorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltoActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
