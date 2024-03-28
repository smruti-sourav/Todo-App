import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
})
export class TodoComponent implements OnInit {
  tasks: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.todoService.getTasks().subscribe((tasks: any[]) => {
      this.tasks = tasks;
    });
  }

  toggleCompletion(task: any): void {
    this.todoService.updateTasks(task).subscribe(() => {
      this.loadTasks();
    });
  }

  removeTask(taskId: string): void {
    this.todoService.deleteTasks(taskId).subscribe(() => {
      this.loadTasks();
    });
  }
}
