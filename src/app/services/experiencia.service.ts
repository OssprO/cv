import { Injectable } from '@angular/core';
import { Educacion } from '../interfaces/educacion.interface';
import { Freelance } from '../interfaces/freelance.interface';
import { Trabajo } from '../interfaces/trabajo.interface';

@Injectable()
export class ExperienciaService {

  private experienciaObj = {
      educacion: [
        {
            escuela: "CBTIS 130",
            lugar: "Durango, Dgo. México",
            titulo: "Técnico en Computación",
            cedula: "5183946",
            inicio: "01-01-2005",
            final: "12-01-2005",
            color: "#000000"
        },
        {
            escuela: "Instituto Tecnológico de Durango",
            lugar: "Durango, Dgo. México",
            titulo: "Ingeniería en Sistemas Computacionales",
            cedula: "8500626",
            inicio: "01-01-2006",
            final: "06-01-2010",
            color: "#000000"
        }
      ],
      freelance: [
        {
            nombre: "Brewer Map",
            lugar: "CDMX, México",
            descripcion: "Proyecto personal. Desarrollo multiplataroma. Diseño, creación y mantenimiento de blog WordPress, app MEAN stack, redes sociales y contenidos.",
            inicio: "03-01-2016",
            final: "01-01-2018",
            color: "#776E5C",
            tecnologias: ["Angular", "NodeJS/Restify/Express", "MongoDB/Mongoose"]
        },
        {
            nombre: "CONAGUA",
            lugar: "CDMX, México",
            descripcion: "Diseño y programación de sistema de búsqueda de documentos de la Comisión Nacional del Agua (Flex/AIR/SQLLite).",
            inicio: "03-01-2012",
            final: "01-01-2013",
            color: "#F7E4BE",
            tecnologias: ["AS3/Flex/AIR"]
        },
        {
            nombre: "YEAL/Artefacto",
            lugar: "Durango, Dgo. México",
            descripcion: "Prácticas profesionales, desarrollo y diseño del juego ‘PokTaPok’ para iPhone y iPod Touch.  Subcontrato de la empresa de creación multimedia Artefacto Studio.",
            inicio: "01-01-2010",
            final: "07-01-2010",
            color: "#B7A98D",
            tecnologias: ["Photoshop", "Unity3D"]
        },
        {
            nombre: "OptimusTEC",
            lugar: "Durango, Dgo. México",
            descripcion: "Fundador, diseñador y encargado de maquetación de la revista estudiantíl OptimusTEC, diseño de logotipo, diseño de lonas, fotógrafo y edición fotográfica, redacción de artículos, gestor de promoción y diseñador del sitio oficial de la revista.",
            inicio: "08-01-2006",
            final: "12-01-2009",
            color: "#776E5C",
            tecnologias: ["InDesing","Photoshop"]
        }
      ],
      trabajo: [
        {
            nombre: "Apernet S.A. / Minimalist Technology",
            puesto: "Desarrollador Front-End",
            lugar: "CDMX, México",
            descripcion: "Desarrollo Smart TV, administrador y creador de contenido de la comunidad de desarrolladores Samsung Smart TV. Desarrollo y diseño web, creación de temas y plugins para WordPress. Desarrollo Mobile Ionic y Phonegaph. Desarrollo MEAN Stack.",
            inicio: "09-01-2013",
            final: "01-02-2018",
            color: "#EEBC9E",
            tecnologias: ["AS3/Flex/AIR", "Ionic", "WordPress", ]
        },
        {
            nombre: "Denumeris Interactive",
            puesto: "Desarrollador Interactivo",
            lugar: "CDMX, México",
            descripcion: "Desarrollo multimedia, programación de interfaces multitouch para muros y pantallas interactivas , así como aplicaciones móviles. Creación de sitios web y aplicaciones de escritorio Flash/ActionScript/Flex. Programación del modulo interactivo Periscopio en el Museo de Arte Contemporaneo de la UNAM.",
            inicio: "10-01-2010",
            final: "08-01-2013",
            color: "#B38184",
            tecnologias: ["AS3/Flex/AIR", "Swift"]
        },
        {
            nombre: "Departamento de Desarrollo de Sistemas y Administración de Información Secretaría de Educación, Estado de Durango.",
            puesto: "Desarrollador",
            lugar: "Durango, Dgo. México",
            descripcion: "Desarrollo y diseño de aplicaciones y sistemas administrativos para control y mantenimiento de bases de datos.",
            inicio: "01-01-2010",
            final: "09-01-2010",
            color: "#786573",
            tecnologias: ["PHP"]
        },
        {
            nombre: "Oficina de Asesoría en Modernización y Tecnologías de Información Gobierno Municipal de Durango",
            puesto: "Desarrollador/Diseñador Web",
            lugar: "Durango, Dgo. México",
            descripcion: "Realización de presentaciones multimedia para diversas dependencias de gobierno, video streaming, contenido interactivo Flash en el sitio, diseño gráfico y maquetación, fotografía y edición fotográfica, diseño de elementos para diversos sistemas de información.",
            inicio: "11-01-2007",
            final: "11-01-2008",
            color: "#49414E",
            tecnologias: ["AS3/Flex/AIR", "Illustrator", "Photoshop"]
        },
      ],
    };

  constructor() { }

  getExperiencia():object {
    return this.experienciaObj;
  }

  getEducacion():Educacion[] {
    return this.experienciaObj.educacion;
  }

  getFreelances():Freelance[] {
    return this.experienciaObj.freelance;
  }

  getExperienciaLaboral():Trabajo[] {
    return this.experienciaObj.trabajo;
  }

}
