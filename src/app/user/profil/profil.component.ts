import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  faCoffee = faShoppingCart;
  minus= faMinus;
  plus=faPlus;
 constructor(public UserAuthService : UserAuthService,private fb : AngularFirestore,private router: Router,private auth : ProductService) {

  this.auth.cartsubject.subscribe((data)=>{
    this.cartItem = data;
  })
  

 }

  ngOnInit(): void {
    this.cartDetails();
    this.cartItemF();
    this.loadCart();
  }
/*-----------------cart details----------------*/
getcartdetails :any = [];
cartDetails()
{
  if(localStorage.getItem('localCart'))
  {
    this.getcartdetails =JSON.parse(localStorage.getItem('localCart')|| '{}');
    console.log(this.getcartdetails);
 
  }
}
/*--------------cart function ----------- */
cartItem : number =0;
cartItemF(){
  if(localStorage.getItem('localCart') != null){
    var cartcount = JSON.parse(localStorage.getItem('localCart') || '{}' );
    this.cartItem = cartcount.length;
  }

}
/*-----------TOTAL CALCUL------------*/
total : number =0;
loadCart()
{
if(localStorage.getItem('localCart')){
  this.getcartdetails = JSON.parse(localStorage.getItem('localCart')|| '{}');
 this.total= this.getcartdetails.reduce(function(acc,val){
return acc + (val.prixProduit * val.quan);
  },0)
}

}
}
