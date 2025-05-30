import { Component, OnInit } from '@angular/core';
import { ServicePortfolio } from '../models/service-portfolio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public servicePortfolios: ServicePortfolio[] = [];

  constructor() { }

  ngOnInit(): void {
    // Aquí normalmente harías una llamada a un servicio para obtener los productos
    // Por ahora, usamos datos de ejemplo:
    this.servicePortfolios = [
      { id: 1, name: 'Mascotas', description: 'Administración de información básica de tus mascotas.' },
      { id: 2, name: 'Auriculares Inalámbricos', description: 'Sonido de alta calidad y batería de larga duración.' },
      { id: 3, name: 'Cámara Compacta 4K', description: 'Graba tus recuerdos en impresionante resolución 4K.' },
      { id: 4, name: 'Teclado Mecánico RGB', description: 'Experiencia de escritura superior con retroiluminación RGB.' },
      { id: 5, name: 'Monitor Ultrawide', description: 'Maximiza tu productividad y entretenimiento.' },
      { id: 6, name: 'Ratón Gaming Inalámbrico', description: 'Precisión y velocidad para tus sesiones de juego.' },
    ];
  }
}
