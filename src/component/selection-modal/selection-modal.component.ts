import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-selection-modal',
  templateUrl: './selection-modal.component.html',
  styleUrls: ['./selection-modal.component.scss'],
})
export class SelectionModalComponent  implements OnInit {

  constructor(private modalController: ModalController) { }


  @Input() diff!: string;
  @Input() lang!: string;

  selection: string = `exercise`;



  confirmSelection(){
    this.modalController.dismiss({
      selection: this.selection,
    })
  }

  closeModal(){
    this.modalController.dismiss();
  }

  ngOnInit() {}

}
