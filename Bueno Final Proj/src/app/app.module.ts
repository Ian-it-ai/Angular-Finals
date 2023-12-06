import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: '', redirectTo: 'post-list', pathMatch: 'full' },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-add', component: PostEditComponent },
  { path: 'authentication', component: AuthComponent },
  { path: 'post-edit/:index', component: PostEditComponent },
  { path: 'login', component: LoginComponent }, // Add this line
  { path: 'register', component: RegisterComponent }, // Add this line
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    PostComponent,
    PostListComponent,
    PostEditComponent,
    LoginComponent,
    RegisterComponent,
  
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB6BVF4a8U13WQ8nrasWBPI9sHLZz72ugQ",
      authDomain: "gutierrez-firebase.firebaseapp.com",
      databaseURL: "https://gutierrez-firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "gutierrez-firebase",
      storageBucket: "gutierrez-firebase.appspot.com",
      messagingSenderId: "485807502694",
      appId: "1:485807502694:web:e5bdce9d310c11127c84a7"
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }