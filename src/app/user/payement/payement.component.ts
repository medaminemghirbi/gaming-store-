import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { historique } from 'src/app/model/historique';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {

  constructor(private auth : ProductService,private router : Router,private productService: ProductService) { 
    this.auth.cartsubject.subscribe((data)=>{
      this.cartItem = data;
    })
  }

  ngOnInit(): void {
    this.cartDetails();
    this.cartItemF();
    this.loadCart();
  }
 /* submit(f){
    let x : historique = { nom: f.value['name'], adresse:f.value['adresse'],telephone:f.value['telephone'],email:f.value['email']}; 
    this.productService.commander(x)

  }*/
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
/*-----------------------*/
payer()
{
    this.removeall();
  this.cartItem =0;
  localStorage.removeItem('localCart');
  Swal.fire('Whooa!', 'Payed Succefully , Stay in Touch', 'success')
  this.router.navigate(['']);
}
}
