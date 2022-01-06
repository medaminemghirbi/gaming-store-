import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/produit.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  produits : Product[]; //un tableau de Produit
  constructor(private router : Router,private produitService: ProductService,private auth: AuthService) {
    this.produits = produitService.listeProduits();
   }

  ngOnInit(): void {
    
  }
  supprimerProduit(p: Product)
  {
  //console.log(p);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  this.produitService.supprimerProduit(p);
  }
  sedeconnecter(){
    this.auth.sedeConnecter();
    this.router.navigate(['']);
  }
  sedeconnecterr(){
    this.auth.sedeConnecter();
    this.router.navigate(['/connexion']);
  }
}
