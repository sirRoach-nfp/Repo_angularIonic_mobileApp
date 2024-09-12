import { Component, OnInit } from '@angular/core';
import { Route, Router,ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-exercise-selector',
  templateUrl: './exercise-selector.page.html',
  styleUrls: ['./exercise-selector.page.scss'],
})
export class ExerciseSelectorPage implements OnInit {

  constructor(private route: ActivatedRoute, private navCtrl: NavController,private router: Router) { }

  goBack() {
    this.navCtrl.back(); 
  }


  navigateToHome(){
    this.router.navigate(['/home'])
  }
  ngOnInit() {


  }

}
