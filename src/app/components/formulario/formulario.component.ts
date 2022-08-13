import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'AR';
  categorias: any [] = [
    {
      value: 'general', nombre: 'General'
    },
    {
      value: 'bussines', nombre: 'Negocios'
    }
  ];

  paises: any[] = [
    {
      value: 'AR', nombre: 'Argentina'
    },
    {
      value: 'BR', nombre: 'Brasil'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }
}
