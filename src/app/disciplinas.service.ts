import { Injectable } from '@angular/core';

interface Disciplinas {
  materia: string;
}

@Injectable()
export class DisciplinasService {
  constructor() {
    this.add('Desenvolvimento para Servidores II | IDS-002');
    this.add('Desenvolvimento para dispositivos móveis I | ISW-011');
    this.add('Inglês V | LIN-500');
    this.add('Negócios e Marketing Eletrônicos | AGM-004');
    this.add('Projeto do trabalho de graduação em Sistemas | TTG-401');
    this.add('Tópicos Especiais em Sistemas para Internet II | ITE-004');
  }

  list: Array<Disciplinas> = [];

  getList() {
    return this.list;
  }

  add(materia: string) {
    this.list.push({ materia });
  }

  add1(t: Disciplinas) {
    this.list.push(t);
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
