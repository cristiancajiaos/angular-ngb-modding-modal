import { ModalComponentComponent } from './../shared/modal-component/modal-component.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit() {
  }

  openTemplateModal(content): void {
    this.modal
      .open(content)
      .result
      .then((resolve) => { console.log(resolve) })
      .catch((reject) => { console.log(reject) });
  }

  openComponentModal(): void {
    this.modal
      .open(ModalComponentComponent)
      .result
      .then((resolve) => { console.log(resolve); })
      .catch((reject) => { console.log(reject) });
  }

}
