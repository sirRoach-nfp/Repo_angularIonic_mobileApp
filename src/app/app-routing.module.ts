import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'html',
    loadChildren: () => import('./html/html.module').then( m => m.HtmlPageModule)
  },
  {
    path: 'htmlintro',
    loadChildren: () => import('./htmlintro/htmlintro.module').then( m => m.HtmlintroPageModule)
  },
  {
    path: 'htmlbasic',
    loadChildren: () => import('./htmlbasic/htmlbasic.module').then( m => m.HtmlbasicPageModule)
  },  {
    path: 'languages',
    loadChildren: () => import('./languages/languages.module').then( m => m.LanguagesPageModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./css/css.module').then( m => m.CssPageModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./css/css.module').then( m => m.CssPageModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./css/css.module').then( m => m.CssPageModule)
  },
  {
    path: 'css-intro',
    loadChildren: () => import('./css-intro/css-intro.module').then( m => m.CssIntroPageModule)
  },
  {
    path: 'css-basic',
    loadChildren: () => import('./css-basic/css-basic.module').then( m => m.CssBasicPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
