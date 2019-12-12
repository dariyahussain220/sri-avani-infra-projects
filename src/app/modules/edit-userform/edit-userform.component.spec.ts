import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserformComponent } from './edit-userform.component';

describe('EditUserformComponent', () => {
  let component: EditUserformComponent;
  let fixture: ComponentFixture<EditUserformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
