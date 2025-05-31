import { ServicePortfolio } from './../../models/service-portfolio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent implements OnInit {

  public servicePortfolios: ServicePortfolio[] = [];

  ngOnInit(): void {
    // Aquí normalmente harías una llamada a un servicio para obtener los productos
    // Por ahora, usamos datos de ejemplo:
    this.servicePortfolios = [
      { id: 1, name: 'Mascotas', description: 'Administración de información básica de tus mascotas.', patch: 'mascota' },
      { id: 2, name: 'Revisión de tu mascota', description: 'Gestión de la revisión periódica de tu mascota.', patch: '' }
    ];
  }

  public addressingTo(patch: string): void {
    console.log('patch :', patch);
  }
}
