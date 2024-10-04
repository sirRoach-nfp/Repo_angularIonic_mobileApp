import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
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
  {
    path: 'pythondiffpage',
    loadChildren: () => import('./pythondiffpage/pythondiffpage.module').then( m => m.PythondiffpagePageModule)
  },
  {
    path: 'pythondifpage',
    loadChildren: () => import('./ChallengeDifPage/pythondifpage/pythondifpage.module').then( m => m.PythondifpagePageModule)
  },
  {
    path: 'javascriptdiffpage',
    loadChildren: () => import('./ChallengeDifPage/javascriptdiffpage/javascriptdiffpage.module').then( m => m.JavascriptdiffpagePageModule)
  },
  {
    path: 'phpdiffpage',
    loadChildren: () => import('./ChallengeDifPage/phpdiffpage/phpdiffpage.module').then( m => m.PhpdiffpagePageModule)
  },
  {
    path: 'cppdiffpage',
    loadChildren: () => import('./ChallengeDifPage/cppdiffpage/cppdiffpage.module').then( m => m.CppdiffpagePageModule)
  },
  {
    path: 'javadiffpage',
    loadChildren: () => import('./ChallengeDifPage/javadiffpage/javadiffpage.module').then( m => m.JavadiffpagePageModule)
  },

  {
    path: 'py',
    loadChildren: () => import('./py/py.module').then( m => m.PyPageModule)
  },
  {
    path: 'sql',
    loadChildren: () => import('./sql/sql.module').then( m => m.SqlPageModule)
  },
  {
    path: 'sqlintro',
    loadChildren: () => import('./sqlintro/sqlintro.module').then( m => m.SqlintroPageModule)
  },
  {
    path: 'sqlsyntax',
    loadChildren: () => import('./sqlsyntax/sqlsyntax.module').then( m => m.SqlsyntaxPageModule)
  },
  {
    path: 'sqlselect',
    loadChildren: () => import('./sqlselect/sqlselect.module').then( m => m.SqlselectPageModule)
  },
  {
    path: 'sqlinsert',
    loadChildren: () => import('./sqlinsert/sqlinsert.module').then( m => m.SqlinsertPageModule)
  },
  {
    path: 'pyintro',
    loadChildren: () => import('./pyintro/pyintro.module').then( m => m.PyintroPageModule)
  },
  {
    path: 'pygetstarted',
    loadChildren: () => import('./pygetstarted/pygetstarted.module').then( m => m.PygetstartedPageModule)
  },
  {
    path: 'pysyntax',
    loadChildren: () => import('./pysyntax/pysyntax.module').then( m => m.PysyntaxPageModule)
  },
  {
    path: 'pyvariables',
    loadChildren: () => import('./pyvariables/pyvariables.module').then( m => m.PyvariablesPageModule)
  },
  {
    path: 'java',
    loadChildren: () => import('./java/java.module').then( m => m.JavaPageModule)
  },
  {
    path: 'javaintro',
    loadChildren: () => import('./javaintro/javaintro.module').then( m => m.JavaintroPageModule)
  },
  {
    path: 'javagetstarted',
    loadChildren: () => import('./javagetstarted/javagetstarted.module').then( m => m.JavagetstartedPageModule)
  },
  {
    path: 'javasyntax',
    loadChildren: () => import('./javasyntax/javasyntax.module').then( m => m.JavasyntaxPageModule)
  },
  {
    path: 'javavariables',
    loadChildren: () => import('./javavariables/javavariables.module').then( m => m.JavavariablesPageModule)
  },
  {
    path: 'js-output',
    loadChildren: () => import('./js-output/js-output.module').then( m => m.JsOutputPageModule)
  },
  {
    path: 'js-statements',
    loadChildren: () => import('./js-statements/js-statements.module').then( m => m.JsStatementsPageModule)
  },
  {
    path: 'js-whereto',
    loadChildren: () => import('./js-whereto/js-whereto.module').then( m => m.JsWheretoPageModule)
  },
  {
    path: 'php',
    loadChildren: () => import('./php/php.module').then( m => m.PhpPageModule)
  },
  {
    path: 'phpintro',
    loadChildren: () => import('./phpintro/phpintro.module').then( m => m.PhpintroPageModule)
  },
  {
    path: 'phpsyntax',
    loadChildren: () => import('./phpsyntax/phpsyntax.module').then( m => m.PhpsyntaxPageModule)
  },
  {
    path: 'phpvariables',
    loadChildren: () => import('./phpvariables/phpvariables.module').then( m => m.PhpvariablesPageModule)
  },
  {
    path: 'phpecho',
    loadChildren: () => import('./phpecho/phpecho.module').then( m => m.PhpechoPageModule)
  },
  {
    path: 'cpp',
    loadChildren: () => import('./cpp/cpp.module').then( m => m.CppPageModule)
  },
  {
    path: 'cppintro',
    loadChildren: () => import('./cppintro/cppintro.module').then( m => m.CppintroPageModule)
  },
  {
    path: 'cppgetstarted',
    loadChildren: () => import('./cppgetstarted/cppgetstarted.module').then( m => m.CppgetstartedPageModule)
  },

  {
    path: 'search-result-page',
    loadChildren: () => import('./search-result-page/search-result-page.module').then( m => m.SearchResultPagePageModule)
  },
  {
    path: 'searchresultpage',
    loadChildren: () => import('./searchresultpage/searchresultpage.module').then( m => m.SearchresultpagePageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },  {
    path: 'cppsyntax',
    loadChildren: () => import('./cppsyntax/cppsyntax.module').then( m => m.CppsyntaxPageModule)
  },
  {
    path: 'cppoutput',
    loadChildren: () => import('./cppoutput/cppoutput.module').then( m => m.CppoutputPageModule)
  },
  {
    path: 'cppvariables',
    loadChildren: () => import('./cppvariables/cppvariables.module').then( m => m.CppvariablesPageModule)
  },
  {
    path: 'forpass',
    loadChildren: () => import('./forpass/forpass.module').then( m => m.ForpassPageModule)
  },






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
