import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { UserBarComponent } from './user/bar/bar.component';
import { MessageContainerComponent } from './message/container/container.component';
import { MessageInputBarComponent } from './message/inputBar/inputBar.component';

// Servicios
import { SocketioService } from './socketio.service';
import { MessageService } from './message/message.service';

@NgModule({
	declarations: [
		AppComponent,
		UserBarComponent,
		MessageContainerComponent,
		MessageInputBarComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		SocketioService,
		MessageService
	],
	bootstrap: [AppComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppModule { }
