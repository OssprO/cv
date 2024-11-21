import { Education } from "./education.interface";
import { Freelance } from "./freelance.interface";
import { Job } from "./job.interface";

export interface Experience {
    education: Education[],
    freelance: Freelance[],
    job: Job[]
}