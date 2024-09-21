import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { SelectionModalComponent } from 'src/component/selection-modal/selection-modal.component';

@Component({
  selector: 'app-javadiffpage',
  templateUrl: './javadiffpage.page.html',
  styleUrls: ['./javadiffpage.page.scss'],
})
export class JavadiffpagePage implements OnInit {

  constructor(private router: Router,private modalController: ModalController,private navCtrl: NavController) { }

  ngOnInit() {
  }


  navigateToExercise(diff: string,lang: string){
    this.router.navigate([`/exercise-page`],{queryParams:{diff,lang}})
  }


  navigateToSelector(){
    this.router.navigate(['/exercise-selector'])
  }

  goBack() {
    this.navCtrl.back(); 
  }
  async presentModal(diff: string, lang: string) {
    const modal = await this.modalController.create({
      component: SelectionModalComponent,
      componentProps: { diff, lang },
      cssClass: 'centered-modal',
    
    });

    await modal.present();

    // Handling the result from the modal
    const { data } = await modal.onWillDismiss();
    if (data && data.selection) {
      if (data.selection === 'exercise') {
        this.router.navigate([`/review-page`], { queryParams: { diff, lang } });
      } else if (data.selection === 'quiz') {
        this.router.navigate([`/exercise-page`], { queryParams: { diff, lang } });
      }
    }
  }

}
