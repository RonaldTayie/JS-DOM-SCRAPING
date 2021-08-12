var Products = []

function Scraper(){
  
  const cards = document.querySelectorAll('.type-post')
  
  cards.forEach( (card)=>{
    
    const card_header = card.querySelector('h2').children[0]
    const card_text = card.querySelector('p')
    
    const url = card_header.getAttribute('href')
    const title = card_header.innerText
    const image = card.querySelector('img').getAttribute('src')
    
    // Set child text to ""
    card_text.children[0].innerText=""
    const description = card_text.innerText
    
    let product = {
      url,
      image,
      title,
      description
    }
    Products.push(product)
  } )
  
  
}

Scraper()
console.log(Products)
