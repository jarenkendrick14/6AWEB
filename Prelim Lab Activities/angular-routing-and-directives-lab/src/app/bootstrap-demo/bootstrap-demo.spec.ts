import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDemo } from './bootstrap-demo';

describe('BootstrapDemo', () => {
  let component: BootstrapDemo;
  let fixture: ComponentFixture<BootstrapDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
