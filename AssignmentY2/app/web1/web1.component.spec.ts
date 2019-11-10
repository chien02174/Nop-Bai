import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Web1Component } from './web1.component';

describe('Web1Component', () => {
  let component: Web1Component;
  let fixture: ComponentFixture<Web1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Web1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Web1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
