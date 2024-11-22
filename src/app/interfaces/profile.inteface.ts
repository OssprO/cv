export interface Social {
    id: number;
    network: string;
    url: string;
}

export interface Language {
    id: number;
    language: string;
    level: string;
}
export interface Profile {
    id: number;
    documentId?: string;
    name: string;
    birthdate: string;
    position: string;
    phone: string;
    location: string;
    email: string;
    summary: string;
    aboutme: string;
    social: Social[];
    languages: Language[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    locale?: string;
}

export interface Skill {
    id?: number;
    name: string;
    skills: SingleSkill[];
}

export interface SingleSkill {
    id?: number;
    name: string;
    percentage: number;
    skills?: SingleSkill[];
}