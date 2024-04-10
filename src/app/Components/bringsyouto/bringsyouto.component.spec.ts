import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BringsyoutoComponent } from './bringsyouto.component';

describe('BringsyoutoComponent', () => {
  let component: BringsyoutoComponent;
  let fixture: ComponentFixture<BringsyoutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BringsyoutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BringsyoutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
