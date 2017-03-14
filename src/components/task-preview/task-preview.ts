import { Component } from '@angular/core';

/*
  Generated class for the TaskPreview component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'task-preview',
  templateUrl: 'task-preview.html'
})
export class TaskPreviewComponent {

  task: any;

  constructor() {
    console.log('Hello TaskPreview Component');
    this.task = {};
  }

}
