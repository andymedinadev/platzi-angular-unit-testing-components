import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { PersonComponent } from './person.component';
import { By } from '@angular/platform-browser';

fdescribe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <h3> element with text: "Hola, PersonComponent"', () => {
    const personDebugElement: DebugElement = fixture.debugElement;
    const headingDebug: DebugElement = personDebugElement.query(By.css('h3'));
    const headingElement: HTMLElement = headingDebug.nativeElement;

    expect(headingElement.textContent).toEqual('Hola, PersonComponent');
  });

  it('should have <p> element with text: "Soy un parrafo"', () => {
    const personDebugElement: DebugElement = fixture.debugElement;
    const paragraphDebug: DebugElement = personDebugElement.query(By.css('p'));
    const paragraphElement: HTMLElement = paragraphDebug.nativeElement;

    expect(paragraphElement.textContent).toEqual('Soy un parrafo');
  });
});
