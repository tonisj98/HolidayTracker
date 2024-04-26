import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentUser$: Observable<any> = this.currentUserSubject.asObservable();

  getUsers() {
    const users = [
      { nombre: 'John Doe', rol: 'Empleado', userType: 'employee', password: '1234' },
      { nombre: 'a', rol: 'Empleado', userType: 'a', password: 'a' },
      { nombre: 'b', rol: 'Empleado', userType: 'b', password: 'b' },
      { nombre: 'Jane Smith', rol: 'Jefe', userType: 'boss', password: 'abcd' }
    ];
    return of(users);
  }

  setUser(user: any) {
    this.currentUserSubject.next(user);
    console.log(this.currentUserSubject.value);

  }
  clearUser() {
    this.currentUserSubject.next(null);
  }
}
