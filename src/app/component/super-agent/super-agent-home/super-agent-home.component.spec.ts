import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAgentHomeComponent } from './super-agent-home.component';

describe('SuperAgentHomeComponent', () => {
  let component: SuperAgentHomeComponent;
  let fixture: ComponentFixture<SuperAgentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAgentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAgentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
