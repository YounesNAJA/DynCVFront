import {Adresse} from './adresse/adresse';
import {Experience} from './experience/experience';
import {Formation} from './formation/formation';
import {Competence} from './competence/competence';
import {Langue} from './langue/langue';

export class Personne {

  constructor(
    public active: boolean,
    public nom: string,
    public prenom: string,
    public titre: string,
    public telephone: string,
    public email: string,
    public adresse: Adresse,
    public experiences: Experience[],
    public formations: Formation[],
    public competences: Competence[],
    public langues: Langue[]) {}

}
