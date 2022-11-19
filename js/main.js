document.querySelector('#drawHand').addEventListener('click',drawHand)
document.querySelector('#drawFlop').addEventListener('click', drawFlop)
document.querySelector('#drawTurn').addEventListener('click', drawTurn)
document.querySelector('#drawRiver').addEventListener('click', drawRiver)


let deckId =''


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    deckId = data.deck_id

  })
.catch(err => {
    console.log(`error ${err}`)
  });

function drawHand() {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#p1a').src = data.cards[0].image
        document.querySelector('#p2a').src = data.cards[1].image
        document.querySelector('#p1b').src = data.cards[2].image
        document.querySelector('#p2b').src = data.cards[3].image

        document.getElementById('playerOne').classList.remove('hidden')
        document.getElementById('playerTwo').classList.remove('hidden')
        document.getElementById('drawFlop').classList.remove('hidden')
        document.getElementById('drawHand').classList.add('hidden')
    })
}

function drawFlop(){
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`
  
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#c2a').src = data.cards[0].image
      document.querySelector('#c2b').src = data.cards[1].image
      document.querySelector('#c2c').src = data.cards[2].image
    })
  .catch(err => {
      console.log(`error ${err}`)
    });

    document.getElementById('community_cards').classList.remove('hidden')
    document.getElementById('drawTurn').classList.remove('hidden')
    document.getElementById('drawFlop').classList.add('hidden')
}

  function drawTurn(){
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#c2d').src = data.cards[0].image
    })
  .catch(err => {
      console.log(`error ${err}`)
    });
    
    document.getElementById('c2d').classList.remove('hidden')
    document.getElementById('drawRiver').classList.remove('hidden')
    document.getElementById('drawTurn').classList.add('hidden')

  }

  function drawRiver(){
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#c2e').src = data.cards[0].image
    })
  .catch(err => {
      console.log(`error ${err}`)
    });

    document.getElementById('c2e').classList.remove('hidden')
    document.getElementById('drawRiver').classList.add('hidden')
  }