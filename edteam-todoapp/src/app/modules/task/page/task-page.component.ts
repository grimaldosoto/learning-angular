import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent implements OnInit, OnDestroy {
  groups: Array<any> = [];
  // groups$:Observable<any> = new Observable;
  groups$:Observable<any> = this.taskService.getTask();
  listObservables$: Array<Subscription> = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this.taskService.getTask().subscribe((response) => {
    //   const {data} = response;
    //   this.groups = data;
    //   console.log('--->', response);
    // });
  }

  ngOnDestroy(): void {
    console.log('me voy a destruir');
    this.listObservables$.forEach((subscription) => subscription.unsubscribe());
  }
}
