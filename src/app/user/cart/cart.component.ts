import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCheck, faMinus, faPlus, faShoppingCart, faSignOutAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { UserAuthService } from 'src/app/services/user-auth.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  prod1:any = "./assets/prod/gaming.png";
 minus= faMinus;
 plus=faPlus;
 faCoffee = faShoppingCart;
 trash=faTrash;
 check=faCheck;
signout = faSignOutAlt;
  constructor(public UserAuthService : UserAuthService ,private router: Router,private auth : ProductService) { 
    
  this.auth.cartsubject.subscribe((data)=>{
    this.cartItem = data;
  })
  }

  ngOnInit(): void {
    this.cartDetails();
    this.cartItemF();
    this.loadCart();
  }
  inc(idProduit,quan)
  {
    /*console.log(idProduit);
    console.log(qnt);*/
    for (let i=0; i<this.getcartdetails.length;i++){
      if (this.getcartdetails[i].idProduit ===idProduit)
      {
        if(quan!=5)
        {
        this.getcartdetails[i].quan =  parseInt(quan)+1;
      }
    }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getcartdetails));
    this.loadCart();
  }
  dec(idProduit,quan)
  {
    /*console.log(idProduit);
    console.log(qnt);*/
    for (let i=0; i<this.getcartdetails.length;i++){
      if (this.getcartdetails[i].idProduit ===idProduit)
      {
        if(quan!=1)
        {
        this.getcartdetails[i].quan =  parseInt(quan)-1;
      }
    }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getcartdetails));
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
/*--------delete section ---------------*/
removeall()
{
  localStorage.removeItem('localCart');
  this.getcartdetails = [];
  this.total = 0;
  this.cartItem = 0;
  this.auth.cartsubject.next(this.cartItem);
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}
singledelete(cartdetail)
{
  console.log(cartdetail);
  if(localStorage.getItem('localCart'))
  {
    this.getcartdetails = JSON.parse(localStorage.getItem('localCart')|| '{}'); 
    for(let i = 0; i<this.getcartdetails.length; i++)
    {
      if(this.getcartdetails[i].idProduit ===cartdetail)
      {
        this.getcartdetails.splice(i,1);
        localStorage.setItem('localCart',JSON.stringify(this.getcartdetails));
        this.loadCart();
        this.cartItemF();
      }
    }
  }
}
confirmer()

{

  this.router.navigate(['/payement']);
  Swal.fire('Whooa!', 'Order has been proceeded! Let proceeded the payement now ', 'success')

}
}
