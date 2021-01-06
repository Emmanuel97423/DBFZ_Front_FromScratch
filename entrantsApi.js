const eventId = 538503;
const gamerTagSelect = document.getElementById('player__name')

fetch("https://api.smash.gg/gql/alpha", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization':  'Bearer 441ef84618369961238c98e8f23fdaa6'
      },
      
      body: JSON.stringify({
        query: `query EventEntrants($eventId: ID!, $page: Int!, $perPage: Int!) {
            event(id: $eventId) {
              id
              name
              entrants(query: {
                page: $page
                perPage: $perPage
              }) {
                pageInfo {
                  total
                  totalPages
                }
                nodes {
                  id
                  participants {
                    id
                    gamerTag
                  }
                }
              }
            }
          },
          `,
          variables: {
            "eventId": eventId,
            "page": 1,
            "perPage": 20
          }
      })

    })
    .then(result => {
      return result.json();
    })
  
    .then(data => {
      let dataLength = data.data.event.entrants.nodes.length;
      //nombre de joueurs inscrit
      document.getElementById('player__checkin').innerHTML = `${dataLength} participants`;



      for(let i = 0; i < dataLength; i++) {
        //base de donnée
        const dataTag = data.data.event.entrants.nodes[i].participants[0].gamerTag;
        
       
      
       function gamerTagList() {
        
          //Avatar du joueur
        let avatarInfos = document.getElementById('output');
        let newAvatar = document.createElement('img');
        newAvatar.src = "../img/avatar.png";
        newAvatar.classList.toggle("gamer__avatar");
       
        avatarInfos.appendChild(newAvatar);
          //Nom du joueur

        let gamerInfos = document.getElementById('output');
        let newElement = document.createElement('p');
        newElement.textContent = data.data.event.entrants.nodes[i].participants[0].gamerTag;
        newElement.classList.toggle("gamertag");
        gamerInfos.appendChild(newElement);

        let classementInfos = document.getElementById('grid__classement');
        let newClassement = document.createElement('li');
        newClassement.textContent = data.data.event.entrants.nodes[i].participants[0].gamerTag;
        classementInfos.appendChild(newClassement);
       
        //gamer id
        /*let gamerId = document.getElementById('output');
        
        let newElementId = document.createElement('p');
        newElementId.textContent = data.data.event.entrants.nodes[i].participants[0].id;
        newElementId.classList.toggle("gamerId");
        gamerId.appendChild(newElementId);
        
        
        console.log(newElementId)*/
        
  
       }
       gamerTagList();

       

   




      }
 
    })
    .catch(err => {
        console.log("error: ", err);
    })

  
