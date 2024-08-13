export interface Idioma {
    nombre: string;
    nivel: string;
}
export interface Personal {
    nombre: string;
    nacimiento: string;
    puesto: string;
    telefono: string;
    residencia: string;
    email: string;
    presentacion: string;
    resumen: string;
    social: {
        id: string,
        link: string
    }[];
    idiomas: Idioma[];
}
