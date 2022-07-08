import { Educacion } from "./educacion.interface";
import { Freelance } from "./freelance.interface";
import { Trabajo } from "./trabajo.interface";

export interface Experiencia {
    educacion: Educacion[],
    freelance: Freelance[],
    trabajo: Trabajo[]
}