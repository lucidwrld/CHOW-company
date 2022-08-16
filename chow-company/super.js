import data from './chowitems.json' assert {type: 'json'}

 function getProduct(){
  let srice = document.getElementById('srice');
  let sspaghetti= document.getElementById('sspaghetti');
  let ssides= document.getElementById('ssides');
  let sdrinks= document.getElementById('sdrinks');


  let sriceData = data.supItem.filter(item=> item.category=='srice');
    console.log(sriceData);
  sriceData = sriceData.map(item =>{
   let itemCard= document.createElement('div');
   itemCard.setAttribute('id','item-card');

   let cardTop= document.createElement('div');
   cardTop.setAttribute('id', 'card-top');

   let star= document.createElement('i');
   star.setAttribute('class', 'fa fa-star');
   star.setAttribute('id', 'rating');
   star.innerText= ''+ item.rating;

   let shopping= document.createElement('i');
   shopping.setAttribute('class', 'fa fa-shopping-cart add-to-cart');
   shopping.setAttribute('id', item.id);
   
   cardTop.appendChild(star);
   cardTop.appendChild(shopping);

   let img= document.createElement('img');
   img.src= item.Img;

   let itemName= document.createElement('p');
   itemName.setAttribute('id', 'item-name');
   itemName.innerText= item.name;

   let itemPrice= document.createElement('p');
   itemPrice.setAttribute('id', 'item-price');
   itemPrice.innerText= 'Price : N '+ item.price;

   itemCard.appendChild(cardTop);
   itemCard.appendChild(img);
   itemCard.appendChild(itemName);
   itemCard.appendChild(itemPrice);

   srice.appendChild(itemCard);
  })

  let sspaghettiData = data.supItem.filter(item=> item.category=='sspaghetti');
    console.log(sspaghettiData);
  sspaghettiData = sspaghettiData.map(item =>{
   let itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        let cardTop= document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        let star= document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText= ''+ item.rating;

        let shopping= document.createElement('i');
        shopping.setAttribute('class', 'fa fa-shopping-cart add-to-cart');
        shopping.setAttribute('id', item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(shopping);

        let img= document.createElement('img');
        img.src= item.Img;

        let itemName= document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText= item.name;

        let itemPrice= document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText= 'Price : N '+ item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        sspaghetti.appendChild(itemCard);
  })

  let ssidesData = data.supItem.filter(item=> item.category=='ssides');
    console.log(ssidesData);
    ssidesData = ssidesData.map(item =>{
     let itemCard= document.createElement('div');
     itemCard.setAttribute('id','item-card');

     let cardTop= document.createElement('div');
     cardTop.setAttribute('id', 'card-top');

     let star= document.createElement('i');
     star.setAttribute('class', 'fa fa-star');
     star.setAttribute('id', 'rating');
     star.innerText= ''+ item.rating;

     let shopping= document.createElement('i');
     shopping.setAttribute('class', 'fa fa-shopping-cart add-to-cart');
     shopping.setAttribute('id', item.id);
     
     cardTop.appendChild(star);
     cardTop.appendChild(shopping);

     let img= document.createElement('img');
     img.src= item.Img;

     let itemName= document.createElement('p');
     itemName.setAttribute('id', 'item-name');
     itemName.innerText= item.name;

     let itemPrice= document.createElement('p');
     itemPrice.setAttribute('id', 'item-price');
     itemPrice.innerText= 'Price : N '+ item.price;

     itemCard.appendChild(cardTop);
     itemCard.appendChild(img);
     itemCard.appendChild(itemName);
     itemCard.appendChild(itemPrice);

     ssides.appendChild(itemCard);
  })

  let sdrinkData = data.supItem.filter(item=> item.category=='sdrink');
    console.log(sdrinkData);
    sdrinkData = sdrinkData.map(item =>{
     let itemCard= document.createElement('div');
     itemCard.setAttribute('id','item-card');

     let cardTop= document.createElement('div');
     cardTop.setAttribute('id', 'card-top');

     let star= document.createElement('i');
     star.setAttribute('class', 'fa fa-star');
     star.setAttribute('id', 'rating');
     star.innerText= ''+ item.rating;

     let shopping= document.createElement('i');
     shopping.setAttribute('class', 'fa fa-shopping-cart add-to-cart');
     shopping.setAttribute('id', item.id);
     
     cardTop.appendChild(star);
     cardTop.appendChild(shopping);

     let img= document.createElement('img');
     img.src= item.Img;

     let itemName= document.createElement('p');
     itemName.setAttribute('id', 'item-name');
     itemName.innerText= item.name;

     let itemPrice= document.createElement('p');
     itemPrice.setAttribute('id', 'item-price');
     itemPrice.innerText= 'Price : N '+ item.price;

     itemCard.appendChild(cardTop);
     itemCard.appendChild(img);
     itemCard.appendChild(itemName);
     itemCard.appendChild(itemPrice);

     sdrinks.appendChild(itemCard);
  })


  
  
 
 }
 
getProduct()




document.querySelectorAll('.add-to-cart').forEach(item=> {
    item.addEventListener('click', addToCart);
   })
   
   var cartData= [];
   
   function addToCart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= data.supItem.find(element=>element.name==itemToAdd);
   
    console.log(itemObj);
   
    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-shopping');
        cartData= [...cartData,itemObj];
        console.log(cartData);
    }
    else if(index > -1){
        alert("Added to cart");
    }
   
    document.getElementById('cart-plus').innerText= ' '+cartData.length + '';
    
    totalAmount();
    cartItems();
   }
   
   function cartItems(){
    var tableBody= document.getElementById('table-body');
    tableBody.innerHTML= '';
   
    cartData.map(item=> {
        var tableRow= document.createElement('tr');
   
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.Img;
        rowData1.appendChild(img);
   
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
   
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerHTML= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText= '+';
   
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
   
        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;
   
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
   
        tableBody.appendChild(tableRow);
   
    })
    document.querySelectorAll('.increase-item').forEach(item=> {
        item.addEventListener('click', incrementItem);
    })
    document.querySelectorAll('.decrease-item').forEach(item=> {
        item.addEventListener('click', decrementItem);
    })
   }
   
   var currPrice= 0;
   
   function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc);
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+= 1;
    
   
    currPrice=(incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
   
    incObj.price= currPrice*incObj.quantity;
    totalAmount();
    cartItems();
    
   }
   
   var flag= false;
   
   function decrementItem(){
    let itemToDec= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=> element.name==itemToDec);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity > 1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-=1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-shopping');
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML= ''+cartData.length + 'Items';
    
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("Currently no item in cart");
        }
    }
    totalAmount();
    cartItems();
   }
   
   function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price
    })
    document.getElementById('total-item').innerText= 'Total Item: '+cartData.length;
    document.getElementById('total-price').innerText= 'Total Price : N' + sum;
   }
   
   document.getElementById('cart-plus').addEventListener('click', cartToggle);
   
   function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
    }
   
   }
   
   
   
   