import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UserBarComponent } from './user/bar/bar.component';
import { MessageContainerComponent } from './message/container/container.component';
import { MessageInputBarComponent } from './message/inputBar/inputBar.component';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
		UserBarComponent,
	],
	imports: [
		AppComponent,
		BrowserModule,
		FormsModule,
		MessageContainerComponent,
		MessageInputBarComponent
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  /*it(`should have as title 'chatTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('chatTest');
  });*/

  it('should render title nav a', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav a.nav-brand').textContent).toContain('Bienvenido');
  });
});
