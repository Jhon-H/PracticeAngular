import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageButtonsComponent } from './language-buttons.component';

describe('LanguageButtonsComponent', () => {
  let component: LanguageButtonsComponent;
  let fixture: ComponentFixture<LanguageButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
