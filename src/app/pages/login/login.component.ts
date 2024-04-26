import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, ButtonModule]
})
export class LoginComponent implements OnInit {
  users: any = [];
  username: string = '';
  password: string = '';

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.clearUser();
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  login() {
    const user = this.users.find((u: { nombre: string; password: string; }) => u.nombre === this.username && u.password === this.password);
    if (user) {
      console.log('Inicio de sesión exitoso');
      console.log('User Type:', user.userType);
      this.userService.setUser(user); // Establecer el usuario actual
      this.router.navigate(['login-home']);
    } else {
      console.log('Nombre de usuario o contraseña incorrectos');
    }
  }
}
