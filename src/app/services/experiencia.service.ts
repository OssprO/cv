import { Injectable } from '@angular/core';
import { Educacion } from '../interfaces/educacion.interface';
import { Freelance } from '../interfaces/freelance.interface';
import { Trabajo } from '../interfaces/trabajo.interface';

@Injectable()
export class ExperienciaService {


/**
 *
 * Nota: Las fechas se expresan en formato gringo: MM/dd/YYYY
 * @private
 * @memberof ExperienciaService
 */
private experienciaObj = {
      educacion: [
        {
            escuela: 'Instituto Tecnológico de Durango',
            lugar: 'Durango, Dgo. México',
            titulo: 'Ingeniería en Sistemas Computacionales',
            cedula: '8500626',
            inicio: '2006-01-01T00:00:00Z',
            final: '2010-06-01T00:00:00Z',
            color: '#000000'
        },
        {
            escuela: 'CBTIS 130',
            lugar: 'Durango, Dgo. México',
            titulo: 'Técnico en Computación',
            cedula: '5183946',
            inicio: '2005-01-01T00:00:00Z',
            final: '2005-12-01T00:00:00Z',
            color: '#000000'
        }
      ],
      freelance: [
        {
            nombre: 'Brewer Map',
            lugar: 'CDMX, México',
            descripcion: 'Proyecto personal. Desarrollo multiplataroma. Diseño, creación y mantenimiento de blog WordPress, app MEAN stack, redes sociales y contenidos.',
            inicio: '2017-07-01T00:00:00Z',
            final: '2018-08-01T00:00:00Z',
            color: '#776E5C',
            tecnologias: ['Angular', 'NodeJS/Restify/Express', 'MongoDB/Mongoose']
        },
        {
            nombre: 'GICSA',
            lugar: 'CDMX, México',
            descripcion: 'Maquetación y adaptación resposiva de GICSA MagazINe.',
            inicio: '2017-04-01T00:00:00Z',
            final: '2017-06-01T00:00:00Z',
            color: '#C3A15C',
            tecnologias: ['SCSS']
        },
        {
            nombre: 'Mercedes Trophy',
            lugar: 'CDMX, México',
            descripcion: 'Maquetación, adaptación resposiva y posterior adaptación a theme de WordPress para sitio Mercedes Trophy México 2016.',
            inicio: '2016-04-01T00:00:00Z',
            final: '2016-06-01T00:00:00Z',
            color: '#E0C4A1',
            tecnologias: ['WordPress', 'SCSS']
        },
        {
            nombre: 'CONAGUA',
            lugar: 'CDMX, México',
            descripcion: 'Diseño y programación de sistema de búsqueda de documentos de la Comisión Nacional del Agua (Flex/AIR/SQLLite).',
            inicio: '2012-03-01T00:00:00Z',
            final: '2013-01-01T00:00:00Z',
            color: '#F7E4BE',
            tecnologias: ['AS3/Flex/AIR']
        },
        {
            nombre: 'YEAL/Artefacto',
            lugar: 'Durango, Dgo. México',
            descripcion: 'Prácticas profesionales, desarrollo y diseño del juego ‘PokTaPok’ para iPhone y iPod Touch.  Subcontrato de la empresa de creación multimedia Artefacto Studio.',
            inicio: '2010-01-01T00:00:00Z',
            final: '2010-07-01T00:00:00Z',
            color: '#B7A98D',
            tecnologias: ['Photoshop', 'Unity3D']
        },
        {
            nombre: 'OptimusTEC',
            lugar: 'Durango, Dgo. México',
            descripcion: 'Fundador, diseñador y encargado de maquetación de la revista estudiantíl OptimusTEC, diseño de logotipo, diseño de lonas, fotógrafo y edición fotográfica, redacción de artículos, gestor de promoción y diseñador del sitio oficial de la revista.',
            inicio: '2006-08-01T00:00:00Z',
            final: '2009-12-01T00:00:00Z',
            color: '#776E5C',
            tecnologias: ['InDesing', 'Photoshop']
        }
      ],
      trabajo: [
        {
            nombre: 'GFT México',
            puesto: 'Líder Front-End / Desarrollador Front-End ',
            lugar: 'CDMX, México',
            descripcion: 'Líder técnico Front-End para proyecto Santander Móvil, al frente de 6 células de trabajo y responsable de integración y despliegue de una app híbrida para iOS y Android. Desarrollo front-end de plataforma iBrain. Proyecto Cells BBVBA Bancomer.',
            inicio: '2018-03-05T00:00:00Z',
            final: '2019-08-01T00:00:00Z',
            color: '#A1755B',
            tecnologias: ['Angular', 'SCSS']
        },
        {
            nombre: 'Apernet S.A. / Minimalist Technology',
            puesto: 'Desarrollador Front-End',
            lugar: 'CDMX, México',
            descripcion: 'Desarrollo Smart TV, administrador y creador de contenido de la comunidad de desarrolladores Samsung Smart TV. Desarrollo y diseño web, creación de temas y plugins para WordPress. Desarrollo Mobile Ionic y Phonegaph. Desarrollo MEAN Stack.',
            inicio: '2013-09-01T00:00:00Z',
            final: '2018-02-28T00:00:00Z',
            color: '#EEBC9E',
            tecnologias: ['AS3/Flex/AIR', 'Ionic', 'WordPress' ]
        },
        {
            nombre: 'Denumeris Interactive',
            puesto: 'Desarrollador Interactivo',
            lugar: 'CDMX, México',
            descripcion: 'Desarrollo multimedia, programación de interfaces multitouch para muros y pantallas interactivas , así como aplicaciones móviles. Creación de sitios web y aplicaciones de escritorio Flash/ActionScript/Flex. Programación del modulo interactivo Periscopio en el Museo de Arte Contemporaneo de la UNAM.',
            inicio: '2010-10-01T00:00:00Z',
            final: '2013-08-01T00:00:00Z',
            color: '#B38184',
            tecnologias: ['AS3/Flex/AIR', 'Swift']
        },
        {
            nombre: 'Departamento de Desarrollo de Sistemas y Administración de Información Secretaría de Educación, Estado de Durango.',
            puesto: 'Desarrollador',
            lugar: 'Durango, Dgo. México',
            descripcion: 'Desarrollo y diseño de aplicaciones y sistemas administrativos para control y mantenimiento de bases de datos.',
            inicio: '2010-01-01T00:00:00Z',
            final: '2010-09-01T00:00:00Z',
            color: '#786573',
            tecnologias: ['PHP']
        },
        {
            nombre: 'Oficina de Asesoría en Modernización y Tecnologías de Información Gobierno Municipal de Durango',
            puesto: 'Desarrollador/Diseñador Web',
            lugar: 'Durango, Dgo. México',
            descripcion: 'Realización de presentaciones multimedia para diversas dependencias de gobierno, video streaming, contenido interactivo Flash en el sitio, diseño gráfico y maquetación, fotografía y edición fotográfica, diseño de elementos para diversos sistemas de información.',
            inicio: '2007-11-01T00:00:00Z',
            final: '2008-11-01T00:00:00Z',
            color: '#49414E',
            tecnologias: ['AS3/Flex/AIR', 'Illustrator', 'Photoshop']
        },
      ],
    };

  constructor() { }

  getExperiencia(): object {
    return this.experienciaObj;
  }

  getEducacion(): Educacion[] {
    return this.experienciaObj.educacion;
  }

  getFreelances(): Freelance[] {
    return this.experienciaObj.freelance;
  }

  getExperienciaLaboral(): Trabajo[] {
    return this.experienciaObj.trabajo;
  }

}
