import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})

export class CrudComponent implements OnInit {
  private id;
  nombre: string;
  opinion: string;
  resenyas = new Map();
  isEdit = false;

  constructor() {}

  ngOnInit() {
  }

  newID() {
    this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line:one-variable-per-declaration no-bitwise
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  setResenya = () => {
    this.resenyas.set(
      this.id,
      {nombre: this.nombre, opinion: this.opinion}
    );
    this.newID();
    this.opinion = '';
    this.isEdit = false;
  }

  edit = (id, nombre, opinion) => {
    this.id = id;
    this.isEdit = true;
    this.nombre = nombre;
    this.opinion = opinion;
  }
}
