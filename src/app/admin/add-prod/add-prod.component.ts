import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/produit.model';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.scss']
})
export class AddProdComponent implements OnInit {
  newProduit = new Product();
  url="../assets/prod/tapis/tapis3.png";
  constructor(
    private router: Router,
    private produitService: ProductService
  ) { }

  ngOnInit(): void {
  }
  addProduit(){
    //console.log(this.newProduit);
  this.produitService.ajouterProduit(this.newProduit);

  Swal.fire('Whooa!', 'Produit Ajouté Avec Succée!', 'success')
  this.router.navigate(['/dashbord']);
    }

  /*  onselectfile(e)
    {
      if(e.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event : any)=>{
        this.url = event.target.result;
      }
    
      }
    }*/
}
