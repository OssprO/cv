import { Injectable } from '@angular/core';

@Injectable()
export class PersonalService {

    private personalObj = [
        {
            nombre: 'Jesús Osiel Hernández González',
            nacimiento: '1987-03-05T03:15:09.045Z',
            puesto: 'Desarrollador Front-End',
            telefono: 'tel:5215532291215',
            residencia: 'Ciudad de México',
            email: 'ossprodiseno@gmail.com',
            resumen: `Me gusta el rock progresivo, la ciencia ficción, el futbol, 
                las artes plásticas y visuales además de la cinematrografía. 
                Me apasiona la astronomía y los avances científicos y tecnológicos.
                Se hacer cerveza a nivel profesional, tengo título como Técnico Cervecero.`,
            social: [
                {
                    id: '',
                    link: ''
                }
            ],
            idiomas: [
                {
                    idioma: 'Inglés',
                    nivel: 'Medio'
                },
                {
                    idioma: 'Español',
                    nivel: 'Nativo'
                }
            ]
        }
    ];

    constructor() { }

    getPersonalInfo() {
        return this.personalObj;
    }

}
