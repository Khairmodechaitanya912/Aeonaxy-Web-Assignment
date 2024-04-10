import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatprofileComponent } from './creatprofile.component';

describe('CreatprofileComponent', () => {
  let component: CreatprofileComponent;
  let fixture: ComponentFixture<CreatprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
