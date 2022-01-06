import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/produit.model';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss']
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Product();
  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private produitService: ProductService,
  ) { }

  ngOnInit(): void {
    this.currentProduit = this.produitService.consulterProdui(this.route.snapshot.params.id);
    console.log(this.currentProduit);
  }
  updateProduit()
  { //console.log(this.currentProduit);
  this.produitService.updateProduit(this.currentProduit);

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Modifié Avec Succés',
    showConfirmButton: false,
    timer: 1500
  })
  this.router.navigate(['/dashbord']);
  }
}

