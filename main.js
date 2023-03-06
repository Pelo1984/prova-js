let nome = "Fabrizio";

let prodotto = 150;
let iva = prodotto / 100 * 22;
let prodotto_ivato = prodotto + iva

// console.log(prodotto_ivato);


let item = document.querySelector('.toggle');
let panel = document.querySelector('.panel');

item.addEventListener("click", function() {

    item.classList.toggle('select');
    panel.classList.toggle('active');

});


window.addEventListener('scroll', function(e) {
  if(window.scrollY > 300){
    document.body.classList.add('scroll-down');
  } else {
    document.body.classList.remove('scroll-down');
  }
});


let prezzo = document.querySelector('.prezzo');
let risultato = document.querySelector('.risultato');

prezzo.addEventListener("keyup", function() {

    let prodotto = parseInt(prezzo.value);
    let iva = prodotto / 100 * 22;

    risultato.innerHTML = prodotto + iva;

});
