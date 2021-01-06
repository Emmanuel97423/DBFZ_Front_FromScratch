const playerSelect = document.getElementById('player__name')

fetch("https://mysterious-retreat-58171.herokuapp.com/eventEntrants")
.then((response) =>{
    return response.json()
        
    })
    .then((data) => {
        const entrants = data.event.entrants.nodes


        const participants = entrants[0].participants
        console.log(participants)
        console.log(entrants)
        participants.forEach(participant => {
           const option = document.createElement('option')
           option.value = participant.id
           option.innerText = participant.gamerTag
           playerSelect.append(option)
       })
       
        
    });
    
   

    /*fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
    return response.json()
        
    })
    .then((data) => {
        console.log(data)
    })*/
    