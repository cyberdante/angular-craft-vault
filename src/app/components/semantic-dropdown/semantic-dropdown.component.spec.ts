import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticDropdownComponent } from './semantic-dropdown.component';

describe('SemanticDropdownComponent', () => {
  let component: SemanticDropdownComponent;
  let fixture: ComponentFixture<SemanticDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
