import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo-model';

@Injectable({ providedIn: 'root' })
export class TodoService {
    url = 'http://localhost:6600/tasks';
    constructor(private http: HttpClient) { }
    getTasks(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.url);
    }

    addTasks(data: Todo) {
        return this.http.post<any>(this.url, data);
    }

    deleteTasks(id: string): Observable<any> {
        return this.http.delete<any>(this.url + '/' + id);
    }

    updateTasks(todo: Todo): Observable<any> {
        return this.http.put<any>(this.url + '/' + todo._id, todo);
    }
}