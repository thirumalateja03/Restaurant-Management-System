import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuheroComponent } from './menuhero.component';

describe('MenuheroComponent', () => {
  let component: MenuheroComponent;
  let fixture: ComponentFixture<MenuheroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuheroComponent]
    });
    fixture = TestBed.createComponent(MenuheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
