import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TasklistPage } from '../pages/tasklist/tasklist';
import { MytasksPage } from '../pages/mytasks/mytasks';
import { HomePage } from '../pages/home/home';
import { MessagesPage } from '../pages/messages/messages';
import { TabsPage } from '../pages/tabs/tabs';
import { TaskPreviewComponent } from '../components/task-preview/task-preview';

@NgModule({
  declarations: [
    MyApp,
    TasklistPage,
    MytasksPage,
    HomePage,
    MessagesPage,
    TabsPage,
    TaskPreviewComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TasklistPage,
    MytasksPage,
    HomePage,
    MessagesPage,
    TabsPage,
    TaskPreviewComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
