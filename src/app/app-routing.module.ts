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
  },
  {
    path: 'htmlelement',
    loadChildren: () => import('./htmlelement/htmlelement.module').then( m => m.HtmlelementPageModule)
  },
  {
    path: 'htmlattri',
    loadChildren: () => import('./htmlattri/htmlattri.module').then( m => m.HtmlattriPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./languages/languages.module').then( m => m.LanguagesPageModule)
  },
  {
    path: 'page-test',
    loadChildren: () => import('./page-test/page-test.module').then( m => m.PageTestPageModule)
  },
  {
    path: 'test-topic-selector',
    loadChildren: () => import('./test-topic-selector/test-topic-selector.module').then( m => m.TestTopicSelectorPageModule)
  },
  {
    path: 'exercise-page',
    loadChildren: () => import('./exercise-page/exercise-page.module').then( m => m.ExercisePagePageModule)
  },
  {
    path: 'exercise-selector',
    loadChildren: () => import('./exercise-selector/exercise-selector.module').then( m => m.ExerciseSelectorPageModule)
  },
  {
    path: 'htmldiffpage',
    loadChildren: () => import('./ChallengeDifPage/htmldiffpage/htmldiffpage.module').then( m => m.HTMLdiffpagePageModule)
  },
  {
    path: 'cssdiffpage',
    loadChildren: () => import('./ChallengeDifPage/cssdiffpage/cssdiffpage.module').then( m => m.CSSdiffpagePageModule)
  },
  {
    path: 'review-page',
    loadChildren: () => import('./review-page/review-page.module').then( m => m.ReviewPagePageModule)
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
    path: 'htmlelement',
    loadChildren: () => import('./htmlelement/htmlelement.module').then( m => m.HtmlelementPageModule)
  },
  {
    path: 'htmlattri',
    loadChildren: () => import('./htmlattri/htmlattri.module').then( m => m.HtmlattriPageModule)
  },
  {
    path: 'css-basic',
    loadChildren: () => import('./css-basic/css-basic.module').then( m => m.CssBasicPageModule)
  },
  {
    path: 'css-element',
    loadChildren: () => import('./css-element/css-element.module').then( m => m.CssElementPageModule)
  },
  {
    path: 'css-attributes',
    loadChildren: () => import('./css-attributes/css-attributes.module').then( m => m.CssAttributesPageModule)
  },
  {
    path: 'js',
    loadChildren: () => import('./js/js.module').then( m => m.JsPageModule)
  },
  {
    path: 'js-intro',
    loadChildren: () => import('./js-intro/js-intro.module').then( m => m.JsIntroPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
