import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewTaskService } from '@modules/task/services/new-task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  newTask: FormGroup = new FormGroup({});

  showModal$ = this.newTaskService.showModal$;

  formItemsGroup$ = this.newTaskService.itemsFormGroup$;

  constructor(private newTaskService: NewTaskService) {}

  ngOnInit(): void {
    this.newTask = new FormGroup({
      order: new FormControl(''),
      item: new FormArray(this.initItemsGroup()),
    });
  }

  initItemsGroup(): any {
    const items = [
      new FormGroup({
        key: new FormControl('Precio'),
        value: new FormControl(''),
      }),
      new FormGroup({
        key: new FormControl('Observacion'),
        value: new FormControl(''),
      }),
    ];
    this.newTaskService.setFormGroup(items);
    return items;
  }

  saveTask(): void {
    const body = this.newTask.value
    this.newTaskService.saveTask(body)
    .subscribe((response) => {
      this.newTaskService.setShow(false)
      console.log('la tarea se guardo!!')
    })
  }
  cancel(): void {
    this.newTaskService.setShow(false);
  }
}

