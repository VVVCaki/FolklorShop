import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolklorshoppocetnaComponent } from './folklorshoppocetna.component';

describe('FolklorshoppocetnaComponent', () => {
  let component: FolklorshoppocetnaComponent;
  let fixture: ComponentFixture<FolklorshoppocetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolklorshoppocetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolklorshoppocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
