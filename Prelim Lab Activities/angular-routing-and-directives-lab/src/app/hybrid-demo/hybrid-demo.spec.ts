import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridDemoComponent } from './hybrid-demo';

describe('HybridDemo', () => {
  let component: HybridDemoComponent;
  let fixture: ComponentFixture<HybridDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HybridDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HybridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
