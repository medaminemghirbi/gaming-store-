import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft, faCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/model/produit.model';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
     
@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {
  currentProduit = new Product();
  produits: any;
  faCoffee = faShoppingCart;
  check=faArrowLeft;
  constructor(
    private auth : ProductService,
    private activatedRoute: ActivatedRoute,
    private produitService: ProductService,
    public prod: ProductService,
    public router : Router
  ) {
    this.produits = prod.listeProduits();
    this.auth.cartsubject.subscribe((data)=>{
      this.cartItem = data;
    })
   }

  ngOnInit(): void {
    this.currentProduit = this.produitService.consulterProdui(this.activatedRoute.snapshot.params.id);
    console.log(this.currentProduit);
  }
/*---------------------- ADD TO CART FONCTION --------------------------*/
itemsCart :any =[];
addcart(categ)
{
  console.log(categ);
  let cartDataNull = localStorage.getItem('localCart');
  if (cartDataNull == null)
  {
    let storeDataGet : any  = [];
    storeDataGet.push(categ); 
    localStorage.setItem('localCart',JSON.stringify(storeDataGet));
  }else
  {
    var id=categ.idProduit;
    let index:number = -1;
    this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '{}');
    for (let i=0 ; i<this.itemsCart.length; i++)
    {
      if(parseInt(id)===parseInt(this.itemsCart[i].idProduit))
      {
        this.itemsCart[i].quan=categ.quan;
        index = i;
        break;
      }
    }
  if(index == -1)
 {
  this.itemsCart.push(categ);
  localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
 }
 else
 {
  localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
 }
  }
  this.cartNumberF();
  Swal.fire('Whooa!', 'Order has been Transfered To Cart System!', 'success')
  this.router.navigate(['/login']);
}
/*------------------- cart number--------------------------------*/
cartNumber : number =0;
cartNumberF()
{
  var cartvalue = JSON.parse( localStorage.getItem('localCart')|| '{}');
 this.cartNumber= cartvalue.length;
 this.auth.cartsubject.next(this.cartNumber);

}

/*--------------------NUMBER CART FONCTION-----------------------*/
cartItem : number =0;
cartItemF(){
  if(localStorage.getItem('localCart') != null){
    var cartcount = JSON.parse(localStorage.getItem('localCart') || '{}' );
    this.cartItem = cartcount.length;
  }

}
}
  