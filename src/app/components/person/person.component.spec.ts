import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { PersonComponent } from './person.component';
import { Person } from 'src/app/models';

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

  it('should the name be "Tester"', () => {
    component.person = new Person('Tester', 'LastTest', 20, 100, 1.7);
    expect(component.person.name).toEqual('Tester');
  });

  it('should have <h3> element with text: "Hello, {person.name}"', () => {
    // Arrange
    component.person = new Person('Tester', 'LastTest', 20, 100, 1.7);

    const expectedMsg = 'Hello, Tester';

    const personDebugElement: DebugElement = fixture.debugElement;
    const headingDebug: DebugElement = personDebugElement.query(By.css('h3'));
    const headingElement: HTMLElement = headingDebug.nativeElement;

    // Act
    fixture.detectChanges();

    // Assert
    expect(headingElement.textContent).toEqual(expectedMsg);
  });

  it('should have <p> element with text: "My height is: {person.height}"', () => {
    // Arrange
    component.person = new Person('Tester', 'LastTest', 20, 100, 1.7);
    const expectedMsg = 'My height is: 1.7';

    const personDebugElement: DebugElement = fixture.debugElement;
    const paragraphDebug: DebugElement = personDebugElement.query(By.css('p'));
    const paragraphElement: HTMLElement = paragraphDebug.nativeElement;

    // Act
    fixture.detectChanges();

    // Assert
    expect(paragraphElement.textContent).toEqual(expectedMsg);
  });

  it('should display a text with IMC when calcIMC is called', () => {
    // Arrange
    component.person = new Person('Tester', 'LastTest', 20, 120, 1.65);
    const expectedMsg = 'overweight level 3';

    const personDebugElement: DebugElement = fixture.debugElement;
    const buttonDebug: DebugElement = personDebugElement.query(
      By.css('.btn-imc')
    );
    const buttonElement: HTMLElement = buttonDebug.nativeElement;

    // Act
    component.calcIMC();
    fixture.detectChanges();

    // Assert
    expect(buttonElement.textContent).toContain(expectedMsg);
  });

  it('should display a text with IMC when do click', () => {
    // Arrange
    component.person = new Person('Tester', 'LastTest', 20, 120, 1.65);
    const expectedMsg = 'overweight level 3';

    const personDebugElement: DebugElement = fixture.debugElement;
    const buttonDebug: DebugElement = personDebugElement.query(
      By.css('.btn-imc')
    );
    const buttonElement: HTMLElement = buttonDebug.nativeElement;

    // Act
    buttonDebug.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    expect(buttonElement.textContent).toContain(expectedMsg);
  });
});
