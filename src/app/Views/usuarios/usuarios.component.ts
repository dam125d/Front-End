import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import bootstrap from '../../../main.server';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  imports: [CommonModule] 
})
export class UsuariosComponent {

  usuarios = [
    { nombre: 'Daniel Agudelo Mazo', correo: 'dagudelomma@poligran.edu.co', rol: 'Administrador' },
    { nombre: 'Wherrera', correo: 'wherrera@poligran.edu.co', rol: 'Visualizador' },
    { nombre: 'Luis F Arteaga', correo: 'lfarteaga@poligran.edu.co', rol: 'Administrador' }
  ];

}
