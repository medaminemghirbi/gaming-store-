export class historique {
    nom? : string;
    adresse? : string;
    telephone? : number;
    email?:string;
    name?:string;
    price?:string;
    
constructor( args: historique = {}) {
      this.nom = args.nom;
      this.adresse = args.adresse;
      this.telephone = args.telephone;
      this.email=args.email;
      this.name = args.name;
      this.price = args.price;

}
}
