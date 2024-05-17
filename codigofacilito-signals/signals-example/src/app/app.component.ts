import {Component, computed, effect, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";
import {toObservable} from "@angular/core/rxjs-interop";
import {map, take} from "rxjs";

interface Task{
  name: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'signals-example';

  name = signal('Grimaldo');
  description = signal('LOREM').asReadonly();
  tasks = signal<Task[]>([{
    name: 'Ver Curso Signals', isCompleted: false
  }]);

  taskLength = computed(() => this.tasks().length);

  opinion = signal('');
  tasks$ = toObservable(this.tasks);

constructor() {
  effect(() => {
    if(this.tasks().length > 3 ) alert("Hey, tienes muchas tareas");
  });
}

ngOnInit(): void {
  this.tasks$
    .pipe(
      map(res =>{
        const newTasks = res.map((task) => ({
          ...task,
          creationDate: new Date(),
        }));
        return newTasks;
      })
    )
    .subscribe((res) => console.log(res));
}

  toggleName(){
    this.name.set('Soto');
  }

  addRandomTask(){
    this.tasks.update((tasks) => {
      return [...tasks,{name: 'Practicar mucho', isCompleted: false}];
    });
  }

  markTaskAsComplete(){
    /** In Angular 17 the method mutate has been removed **/
//    this.tasks.mutate(task => {
//      const taskToUpdate = this.tasks()[0];
//      if(taskToUpdate){
//        task.name = "Practicar mucho Signals";
//        taskToUpdate.isCompleted = true;
//        }
//    });
    this.tasks.update((oldTasks: Task[]) => {
      const newTask = [...oldTasks];
      const taskToUpdate = newTask[0];
      if(taskToUpdate){
        taskToUpdate.name = "Practicar mucho Signals!!";
        taskToUpdate.isCompleted = true;
      }
      return newTask;
    });
  }
}
