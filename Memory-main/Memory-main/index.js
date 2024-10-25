var girada = [];
var cont = 0;
var cartaAnt;
var idAnt;
var punts = 0;
var contenedorPunts;

var img  =  ['<img src="./img/curry.png" alt="reverso carta" height="120px" width="115px"></img>',
                  '<img src="./img/edwards.png" alt="reverso carta" height="120px" width="115px"></img>',
                  '<img src="./img/jordanJump.png" alt="reverso carta" height="120px" width="115px"></img>',
                  '<img src="./img/kobe.png" alt="reverso carta" height="120px" width="115px"></img>',
                  '<img src="./img/lebron.png" alt="reverso carta" height="120px" width="115px"></img>',
                  '<img src="./img/lokura.png" alt="reverso carta" height="120px" width="115px"></img>',
                  '<img src="./img/anteto.png" alt="reverso carta"  height="120px" width="115px"></img>',
                  '<img src="./img/wenbanyama.png" alt="reverso carta" height="120px" width="115px"></img>'];

// CANVIAR IMATGES MARCADES PER TENIR EL FONS TRANSPARENT
                 

function ompleCaixa(vegades,girada,img){

    var v = document.getElementsByClassName('caixa');
    var b = document.getElementsByClassName('back');
    var pos = 0;
    var contCartes = new Array(8).fill(0);

   contenedorPunts = document.getElementById('score');
   contenedorPunts.innerHTML = '0';
   punts = 0;
   

    for (var i = 0; i <= 15; i++) {

      do 
      {
         pos = Math.floor(Math.random() * 8);
         b[i].innerHTML = img[pos];   
         
      }while(contCartes[pos] >= 2)

         contCartes[pos]++;
         v[i].innerHTML = '<img src="./img/fresa.png" alt="reverso carta" height="120px" width="115px"></img>';
         girada[i] = 0;

    }
}





function toggleImg(id,girada,img){

  
    var array = document.getElementsByClassName('caixa');
    var cartas = document.getElementsByClassName('back');
   var igual = false;


   if(girada[id] == 0 && cont <= 2)     // && cont < 2)
      {
         array[id].innerHTML = cartas[id].innerHTML;
         girada[id] = 1;


         cont++; 
      }
   
      if(cont == 2)
      {
         igual = comparaCarta(array[id].innerHTML, cartaAnt);

          

         if(igual == false)
         {
            
            array[id].innerHTML = '<img src="./img/Basketball.png" alt="reverso carta" height="120px" width="115px"></img> ';
            girada[id]= 0;

            array[idAnt].innerHTML = '<img src="./img/Basketball.png" alt="reverso carta" height="120px" width="115px"></img> ';
            girada[idAnt] = 0;
         }
         else
         {
            contenedorPunts = document.getElementById('score');
            punts = punts +1;
            contenedorPunts.innerHTML = punts;
         }

         cont = 0;
         cartaAnt = "";
         idAnt = "";
      }
   
      cartaAnt = array[id].innerHTML;
      idAnt = id;
     

}



   function comparaCarta(carta,cartaAnt){

      var igual  = false;

      if(carta == cartaAnt)
      {
         igual = true;
      }
      else
      {
         igual = false;
      }

      return igual;

   } 


 function assignaCarta(id){

   var carta = document.getElementsByClassName('caixa');
   var posicio;

   for (var i = 0; i <= 16; i++) {

      posicio = Math.floor(Math.random() * 17);
      carta[posicio]


   }


       

/*
    if (id == 0 || id == 6) {
       
      carta  ='<img src="./img/curry.jpg" alt="curry" height="120px" width="120px"></img> ';
   
   }
   else if (id == 1 || id == 7){

      carta = '<img src="./img/edwards.jpg" alt="edwards" height="120px" width="120px"></img> ';
   }
   else if( id == 2 || id == 8)
   {
      carta  = '<img src="./img/jordan.webp" alt="jordan" height="120px" width="120px"></img> ';
   }
   else if( id == 3 || id == 9)
   {
        carta=  '<img src="./img/kobe.jpg" alt="kobe" height="120px" width="120px"></img> ';
   }
   else if(id == 4 || id == 10)
   {
      carta  = '<img src="./img/lebron.jpg" alt="lebron" height="120px" width="120px"></img> ';
   }
   else if (id == 5 || id == 11)
   {
        carta = '<img src="./img/luka.webp" alt="luka" height="120px" width="120px"></img> ';
   }
   else if(id == 15 || id == 12)
   {
      carta = '<img src="./img/melo.jpeg" alt="lamelo" height="120px" width="120px"></img> ';
   }
   else if(id == 14 || id == 13)
   {
      carta= '<img src="./img/wembi.webp" alt="wembi" height="120px" width="120px"></img> ';
   }

   return carta  */ 
}