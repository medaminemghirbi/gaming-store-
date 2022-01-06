import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  produits : Product[];
  produit :any;
  constructor() {
    this.produits = [
      {idProduit : 1,image:"../assets/prod/laptop/laptop1.png", nomProduit : "PC Asus", desc:"PC PORTABLE ASUS CELERON N4020 4GO 128GO EMMC - NOIR (E410MA-BV225T)" ,prixProduit : 3000.600, categorie:"PC",quan:1},
      {idProduit : 2,image:"../assets/prod/laptop/laptop2.png", nomProduit : "PC msi",desc:" PC PORTABLE GAMER MSI GE76 RAIDER 10UH I7 10É GÉN 32GO 1TO 16G" , prixProduit : 2800, categorie:"PC",quan:1},
      {idProduit : 3,image:"../assets/prod/laptop/laptop3.png", nomProduit : "PC dell",desc:"PC PORTABLE DELL I3 7È GÉN 4GO 1TO - GRIS (X543UA-GQ1546T)" , prixProduit : 2700, categorie:"PC",quan:1},
      {idProduit : 4,image:"../assets/prod/casque/casque1.png", nomProduit : "Casque Gamer",desc:"Micro Casque Spirit of Gamer ELITE- EH70 Noir" , prixProduit : 150, categorie:"Composants",quan:1},
      {idProduit : 5,image:"../assets/prod/casque/casque2.png", nomProduit : "Casque Gamer",desc:"Micro Casque Gamer SPIRIT OF GAMER ELITE H60 - Rouge" , prixProduit : 180, categorie:"Composants",quan:1},
      {idProduit : 6,image:"../assets/prod/casque/casque3.png", nomProduit : "Casque Gamer",desc:"Casque Gaming SPIRIT OF GAMER ELITE-H5 Blue" , prixProduit : 200, categorie:"Composants",quan:1},
      {idProduit : 7,image:"../assets/prod/clavier/clavier1.png", nomProduit : "Clavier semi-Mécanique",desc:"Clavier Gamer Spirit of gamer Xpert-K700 Noir" , prixProduit : 80, categorie:"Accéssoire",quan:1},
      {idProduit : 8,image:"../assets/prod/clavier/clavier2.png", nomProduit : "Clavier Mécanique",desc:"Clavier Gamer Spirit Of Gamer xpert k900 Noir" , prixProduit : 99, categorie:"Accéssoire",quan:1},
      {idProduit : 9,image:"../assets/prod/clavier/clavier3.png", nomProduit : "Clavier Mécanique",desc:"Clavier Gamer Spirit of Gamer XPERT-K500" , prixProduit : 100, categorie:"Accéssoire",quan:1},
      {idProduit : 10,image:"../assets/prod/gaming chair/chair1.png", nomProduit : "Gaming Chair",desc:"CHAISE PILOTE GAMING GOLD" , prixProduit : 699, categorie:"Accéssoire",quan:1},
      {idProduit : 11,image:"../assets/prod/gaming chair/chair2.png", nomProduit : "Gaming Chair",desc:"CHAISE PILOTE GAMING ROUGE" , prixProduit : 899, categorie:"Accéssoire",quan:1},
      {idProduit : 12,image:"../assets/prod/gaming chair/chair3.png", nomProduit : "Gaming Chair-tousse",desc:"CHAISE GAMING ORANGE RGB" , prixProduit : 500, categorie:"Accéssoire",quan:1},
      {idProduit : 13,image:"../assets/prod/souris/souris1.png", nomProduit : "Souris  Mécanique",desc:"Souris Gamer JEDEL M20 - Noir" , prixProduit : 150, categorie:"Accéssoire",quan:1},
      {idProduit : 14,image:"../assets/prod/souris/souris2.png", nomProduit : "Souris  semi-Mécanique",desc:"Souris Gamer JEDEL M68 - Noir" , prixProduit : 120, categorie:"Accéssoire",quan:1},
      {idProduit : 15,image:"../assets/prod/souris/souris3.png", nomProduit : "souris",desc:"Souris Gamer HAVIT MS736 - Noir" , prixProduit : 10, categorie:"Accéssoire",quan:1},
      {idProduit : 16,image:"../assets/prod/tapis/tapis1.png", nomProduit : "Gaming Chair L" ,desc:"Tapis de souris Gaming T-Dagger T-TMP101 - Taille L" , prixProduit : 55, categorie:"Accéssoire",quan:1},
      {idProduit : 17,image:"../assets/prod/tapis/tapis2.png", nomProduit : "Tapis Gamer XL",desc:"Tapis de souris Gaming T-Dagger T-TMP101 - Taille XL" , prixProduit : 100, categorie:"Accéssoire",quan:1},
      {idProduit : 18,image:"../assets/prod/tapis/tapis3.png", nomProduit : "Tapis Gamer XXL",desc:"Tapis de souris Gaming T-Dagger T-TMP101 - Taille XXL" , prixProduit : 90, categorie:"Accéssoire",quan:1}
    ];
    }

    listeProduits():Product[] {
      return this.produits;
    }
    
    ajouterProduit( prod: Product){
      this.produits.push(prod);
      }
      supprimerProduit( prod: Product){
        //supprimer le produit prod du tableau produits
        const index = this.produits.indexOf(prod, 0);
        if (index > -1) {
        this.produits.splice(index, 1);
        }
        //ou Bien
        /* this.produits.forEach((cur, index) => {
        if(prod.idProduit === cur.idProduit) {
        this.produits.splice(index, 1);
        }
        }); */
        }
       consulterProdui(id:number): Product{
          this.produit = this.produits.find(p => p.idProduit == id);
          return this.produit;
          }

updateProduit(p:Product)
{
// console.log(p);
this.supprimerProduit(p);
this.ajouterProduit(p);
}
   /*--------------------cart------------------------*/
cartsubject = new Subject<any>();     
}

