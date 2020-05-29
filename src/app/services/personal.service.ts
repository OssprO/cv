import { Injectable } from '@angular/core';
import { Personal } from '../interfaces/personal.inteface';

@Injectable()
export class PersonalService {

    private personalObj: Personal =
        {
            nombre: 'Jesús Osiel Hernández González',
            nacimiento: '1987-03-05T03:15:00Z',
            puesto: 'Desarrollador Front-End',
            telefono: '5532291215',
            residencia: 'Ciudad de México',
            email: 'ossprodiseno@gmail.com',
            // tslint:disable-next-line: max-line-length
            presentacion: 'Programador con amplia experiencia en desarrollo Front-End, especializado en Angular. Tengo experiencia en desarrollo de aplicaciones móviles híbridas y PWAs. Así mismo cuento con conocimientos generales de bases de datos, servidores y algunas tecnologías backend.',
            // tslint:disable-next-line: max-line-length
            resumen: 'Me gusta el rock progresivo, la ciencia ficción, el futbol, las artes plásticas y visuales además de la cinematrografía. Me apasiona la astronomía y los avances científicos y tecnológicos. Se hacer cerveza a nivel profesional, tengo título como Técnico Cervecero.',
            social: [
                {
                    id: '',
                    link: ''
                }
            ],
            idiomas: [
                {
                    nombre: 'Inglés',
                    nivel: 'Medio'
                },
                {
                    nombre: 'Español',
                    nivel: 'Nativo'
                }
            ]
        };

    constructor() { }

    getPersonalInfo() {
        return this.personalObj;
    }

}
