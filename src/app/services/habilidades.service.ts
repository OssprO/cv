import { Injectable } from '@angular/core';
import { Habilidad } from '../interfaces/habilidad.interface';

@Injectable()
export class HabilidadesService {

  private skillsObj:Habilidad[] = [
        {
          nombre: 'Lenguajes y frameworks',
          skills: [
              {
                nombre: 'HTML/HTML5',
                porcentaje: 85
              },
              {
                nombre: 'CSS3',
                porcentaje: 85,
                skills: [
                  {
                    nombre: 'Bootstrap 3/4',
                    porcentaje: 90
                  }
                ]
              },
              {
                nombre: 'Javascript',
                porcentaje: 60,
                skills: [
                  {
                    nombre: 'jQuery',
                    porcentaje: 80
                  },
                  {
                    nombre: 'AngularJS',
                    porcentaje: 80
                  },
                  {
                    nombre: 'Angular 2+',
                    porcentaje: 50
                  },
                  {
                    nombre: 'Node/Restify/Express',
                    porcentaje: 30
                  },
                  {
                    nombre: 'React',
                    porcentaje: 10
                  }
                ]
              },
              {
                nombre: 'AS3/Flex/AIR',
                porcentaje: 90
              },
              {
                nombre: 'PHP',
                porcentaje: 60,
                skills: [
                  {
                    nombre: 'WordPress',
                    porcentaje: 90,
                  }
                ]
              },
              {
                nombre: 'Mobile',
                porcentaje: 0,
                skills: [
                  {
                    nombre: 'Ionic',
                    porcentaje: 75
                  },
                  {
                    nombre: 'Ionic 2',
                    porcentaje: 50
                  },
                  {
                    nombre: 'Swift',
                    porcentaje: 25
                  }
                ]
              }
            ]
        },
        {
          nombre: 'Bases de Datos',
          skills: [
            {
              nombre: 'MySQL',
              porcentaje: 85
            },
            {
              nombre: 'SQL Server',
              porcentaje: 30
            },
            {
              nombre: 'SQL Lite',
              porcentaje: 80
            },
            {
              nombre: 'MongoDB / Mongoose',
              porcentaje: 70
            }
          ]
        },
        {
          nombre: "Diseño",
          skills: [
            {
              nombre: 'Photoshop',
              porcentaje: 90
            },
            {
              nombre: 'Illustrator',
              porcentaje: 85
            },
            {
              nombre: 'InDesign',
              porcentaje: 85
            }
          ]
        },
        {
          nombre: "Herramientas",
          skills: [
            {
              nombre: 'Typescript',
              porcentaje: 0
            },
            {
              nombre: 'Grunt / Gulp / Webpack',
              porcentaje: 0
            },
            {
              nombre: 'Bower / NPM',
              porcentaje: 0
            },
            {
              nombre: 'SASS / LESS',
              porcentaje: 0
            },
            {
              nombre: 'Git / Github / SVN',
              porcentaje: 0
            },
            {
              nombre: 'Yeoman',
              porcentaje: 0
            },
            {
              nombre: 'Sublime Text / Atom',
              porcentaje: 0
            }
          ]
        },
        {
          nombre: "Plataformas y Tecnologías",
          skills: [
            {
              nombre: "Samsung Smart TV: Tizen",
              porcentaje: 0
            },
            {
              nombre: "Interfaces Multitouch: Displax, PQLabs",
              porcentaje: 0
            },
            {
              nombre: "Arduino",
              porcentaje: 0
            },
            {
              nombre: "Docker",
              porcentaje: 0
            },
            {
              nombre: "Mac OS X / Linux Ubuntu / Windows",
              porcentaje: 0
            }
          ]
        },
        {
          nombre: "Otros",
          skills: [
            {
              nombre: "Paquetería Office / iWork",
              porcentaje: 0
            },
            {
              nombre: "Maquetación y envío de Newsletters",
              porcentaje: 0
            },
            {
              nombre: "Google Analytics",
              porcentaje: 0
            },
            {
              nombre: "API Google Maps",
              porcentaje: 0
            },
            {
              nombre: "Configuración de Servidores (SSH, FTP, DNS, EmailServer, Usuarios, Permisos)",
              porcentaje: 0
            },
            {
              nombre: "Facebook Pages",
              porcentaje: 0
            },
            {
              nombre: "Edición de Video y Audio (After Effects, Audition)",
              porcentaje: 0
            }
          ]
        }
    ];

  constructor() { }

  getHabilidades() {
    return this.skillsObj;
  }

}
