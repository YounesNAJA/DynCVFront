import {Client} from './client/client';
import {Projet} from './projet/projet';

export class Experience {

  constructor(
    public debut: number,
    public fin: number,
    public titre: string,
    public client: Client,
    public projets: Projet[],
  ) {}
}
