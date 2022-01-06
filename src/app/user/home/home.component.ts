import { Component, OnInit } from '@angular/core';
import { faMinus, faPlus, faSearch, faShoppingCart, faTruck, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat = 35.8245;
  lng =  10.6346;
  cheminImage:any = "./assets/1.jpg";
  cheminImage3:any = "./assets/4.png";
  cheminImage4:any = "./assets/5.png";
  cheminImage1:any = "./assets/logo.png";
  prod1:any = "./assets/prod/gaming.png";
  prod2:any = "./assets/prod/ram.png";
  prod3:any = "./assets/prod/pcasus.png";
  spon2:any = "./assets/sponsor/2.png";
  spon3:any = "./assets/sponsor/3.png";
  spon4:any = "./assets/sponsor/4.png";
  spon5:any = "./assets/sponsor/5.jpg";
  spon6:any = "./assets/sponsor/6.jpg"
  spon7:any = "./assets/sponsor/7.jpg"
  spon8:any = "./assets/sponsor/8.jpg"
  track = faTruckMoving;
  produits: any;
  searchedKeyword!: string;
  [x: string]: any;
faCoffee = faShoppingCart;
minus= faMinus;
plus=faPlus;
search = faSearch;
trach  = faTruck;
  constructor(private auth : ProductService,public prod: ProductService) {
    this.produits = prod.listeProduits();
    this.auth.cartsubject.subscribe((data)=>{
      this.cartItem = data;
    })
   }

  ngOnInit(): void {
    this.cartItemF();
  }
  inc(produit)
  {
   // console.log(produit.qnt);
   if(produit.quan!=20) 
   produit.quan+=1;
  }
  dec(produit)
  {
    if(produit.quan!=1)
   // console.log(produit.qnt);
   produit.quan-=1;
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
