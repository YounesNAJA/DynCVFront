import {Client} from '../client/client';

export class Projet {

  constructor(
    public nom: string,
    public description: string,
    public taches: string[],
    public technologies: string[]
  ) {}
}
