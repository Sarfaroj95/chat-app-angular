import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattBodyComponent } from './chatt-body.component';

describe('ChattBodyComponent', () => {
  let component: ChattBodyComponent;
  let fixture: ComponentFixture<ChattBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChattBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChattBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
