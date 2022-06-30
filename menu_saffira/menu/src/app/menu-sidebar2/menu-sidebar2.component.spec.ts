import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSidebar2Component } from './menu-sidebar2.component';

describe('MenuSidebar2Component', () => {
  let component: MenuSidebar2Component;
  let fixture: ComponentFixture<MenuSidebar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSidebar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
