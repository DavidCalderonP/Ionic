export class Actividad {
  descripcion: string;
  completado: boolean

  constructor(descripcion: string){
    this.descripcion = descripcion;
    this.completado = false;
  }
}

export class Lista{

  id: number;
  titulo: string;
  creadaEn: Date;
  terminadaEn: Date;
  terminada: boolean;
  actividades: Actividad[]

  constructor(titulo: string) {
    this.titulo = titulo;
    this.creadaEn = new Date();
    this.terminada = false;
    this.actividades = [];
    this.id = new Date().getTime();
  }
}
