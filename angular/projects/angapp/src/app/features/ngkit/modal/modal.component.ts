import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VdsModalService } from '@app/lib/vades-ngkit/modal/vds-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {
  title = 'Modal window';
  constructor(
    private titleService: Title,
    private modalService: VdsModalService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
