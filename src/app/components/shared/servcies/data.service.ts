import { Injectable } from '@angular/core';
import {Lista} from "../models/lista";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listas: Lista[] = [];

  constructor() {
    const lista1: Lista = new Lista('Esta es la lista 1')
    const lista2: Lista = new Lista('Esta es la lista 2')
    const lista3: Lista = new Lista('Esta es la lista 3')
    const lista4: Lista = new Lista('Esta es la lista 4')
    const lista5: Lista = new Lista('Esta es la lista 5')
    const lista6: Lista = new Lista('Esta es la lista 6')
    const lista7: Lista = new Lista('Esta es la lista 7')
    const lista8: Lista = new Lista('Esta es la lista 8')
    const lista9: Lista = new Lista('Esta es la lista 9')
    const lista10: Lista = new Lista('Esta es la lista 10')
    const lista11: Lista = new Lista('Esta es la lista 11')
    const lista12: Lista = new Lista('Esta es la lista 12')
    const lista13: Lista = new Lista('Esta es la lista 13')
    const lista14: Lista = new Lista('Esta es la lista 14')
    const lista15: Lista = new Lista('Esta es la lista 15')
    const lista16: Lista = new Lista('Esta es la lista 16')

    this.listas.push(lista1)
    this.listas.push(lista2)
    this.listas.push(lista3)
    this.listas.push(lista4)
    this.listas.push(lista5)
    this.listas.push(lista6)
    this.listas.push(lista7)
    this.listas.push(lista8)
    this.listas.push(lista9)
    this.listas.push(lista10)
    this.listas.push(lista11)
    this.listas.push(lista12)
    this.listas.push(lista13)
    this.listas.push(lista14)
    this.listas.push(lista15)
    this.listas.push(lista16)




  }

  getAllLists():Lista[]{
    return this.listas;
  }
}
