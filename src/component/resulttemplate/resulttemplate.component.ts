import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resulttemplate',
  templateUrl: './resulttemplate.component.html',
  styleUrls: ['./resulttemplate.component.scss'],
})
export class ResulttemplateComponent  implements OnInit {


  @Input() title: String = "";
  @Input() cover: String = "";

  constructor() { }

  ngOnInit() {}

}
