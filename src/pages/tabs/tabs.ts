import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TasklistPage } from '../tasklist/tasklist';
import { MytasksPage } from '../mytasks/mytasks';
import { MessagesPage } from '../messages/messages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = TasklistPage;
  tab3Root: any = MytasksPage;
  tab4Root: any = MessagesPage;

  constructor() {

  }
}
