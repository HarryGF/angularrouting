import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent implements OnInit{

  public numero !: number
  public tabla: any
  constructor(
    private _activeRooute: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {
    this.tabla = []
  }

  ngOnInit(): void {
    this._activeRooute.params.subscribe((parametros: Params) => {
      if (parametros['numero'] != null) {
        this.numero = parseInt(parametros['numero'])
        let aux = []
        for(let i = 1; i <= 10; i++){
          aux.push({
            operacion: this.numero + " * " + i,
            resultado: this.numero*i
          })
        }
        this.tabla = aux
        this._cdr.detectChanges()
      }
    })
  }
}
