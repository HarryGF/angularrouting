import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-tabla-multiplicar',
  standalone: false,
  styleUrl: './menu-tabla-multiplicar.css',
  templateUrl: './menu-tabla-multiplicar.html',
})
export class MenuTablaMultiplicar {
  public numeros !: Array<number>

  constructor(
    private _activeRooute: ActivatedRoute,
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {
    this.numeros = new Array<number>()
    for (let i = 1; i <= 5; i++) {
      let random = Math.floor((Math.random() * 100) + 1)
      this.numeros.push(random)
    }
    
  }

  redirect(num: number): void {
    this._router.navigate(["/tabla", num])
  }
}
