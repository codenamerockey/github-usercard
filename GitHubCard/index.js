/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// githubRequest.then(response => {
//   console.log(response);
// });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitHubProfile(obj) {
  //creates div container for card
  let divCard = document.createElement('div');
  divCard.classList.add('card');

  //creates img element
  let profileImg = document.createElement('img');
  profileImg.src = `${obj.avatar_url}`;
  divCard.appendChild(profileImg);

  //creates card-info div
  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  divCard.appendChild(cardInfo);

  //creates h3 username heading
  let usernameHeading = document.createElement('h3');
  usernameHeading.classList.add('name');
  usernameHeading.textContent = `${obj.name}`;
  cardInfo.appendChild(usernameHeading);

  //creates username p element
  let username = document.createElement('p');
  username.classList.add('username');
  username.textContent = `${obj.login}`;
  cardInfo.appendChild(username);

  //creates location p element
  let location = document.createElement('p');
  location.textContent = `Location: ${obj.location}`;
  cardInfo.appendChild(location);

  //creates profile p element
  let profile = document.createElement('p');
  profile.textContent = 'Profile:';
  cardInfo.appendChild(profile);

  //link nested inside profile paragraph
  let nestedLink = document.createElement('a');
  nestedLink.setAttribute('href', `${obj.html_url}`);
  nestedLink.textContent = `${obj.html_url}`;
  profile.appendChild(nestedLink);

  // creates followers p element
  let gitFollowers = document.createElement('p');
  gitFollowers.textContent = `Followers: ${obj.followers}`;
  cardInfo.appendChild(gitFollowers);

  // creates following p element
  let gitFollowing = document.createElement('p');
  gitFollowing.textContent = `Following: ${obj.following}`;
  cardInfo.appendChild(gitFollowing);

  //creates the bio p element
  let gitBio = document.createElement('p');
  gitBio.textContent = `Bio: ${obj.bio}`;
  cardInfo.appendChild(gitBio);

  return divCard;
}

//Creating a handle to the div with the class of cards inside html.
let githubCard = document.querySelector('.cards');

// GitHub API Request
let githubRequest = axios.get('https://api.github.com/users/codenamerockey');

// let githubFollowers = axios.get(
//   'https://api.github.com/users/codenamerockey/followers'
// );

githubRequest
  .then(response => {
    githubCard.appendChild(gitHubProfile(response.data));
  })
  .catch(err => {
    console.log(err);
  });

followersArray.forEach(user => {
  githubRequest = axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      // console.log(response);
      githubCard.appendChild(gitHubProfile(response.data));
    })
    .catch(err => {
      console.log(err);
    });

  // console.log(githubRequest);
});

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
