export class Adresse {


  constructor(
    public numero: number,
    public rue: string,
    public complement: string,
    public codePostal: number,
    public ville: string,
    public pays: string
  ) {}
}
