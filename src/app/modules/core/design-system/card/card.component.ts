import { Component, OnInit } from '@angular/core';
import { ServicePortfolio } from '../../models/service-portfolio';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  public servicePortfolios: ServicePortfolio[] = [];

  constructor(private router: Router) { } // Inyecta Router

  ngOnInit(): void {
    // Aquí normalmente harías una llamada a un servicio para obtener los productos
    // Por ahora, usamos datos de ejemplo:
    this.servicePortfolios = [
      { id: 1, name: 'Mascotas', description: 'Administración de información básica de tus mascotas.', patch: 'home/mascota' },
      { id: 2, name: 'Revisión de tu mascota', description: 'Gestión de la revisión periódica de tu mascota.', patch: 'home/revision' }
    ];
  }

  public addressingTo(patch: string): void {
    this.router.navigate([patch]);
  }
}
