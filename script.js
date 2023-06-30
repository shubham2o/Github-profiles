const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    console.log(respData);

    createUserCard(respData);
}

function createUserCard(user) {
    const { avatar_url, name, bio, followers, following, public_repos } = user;

    const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${avatar_url}" alt="${name}" />
            </div>

            <div class="user-info">
                <h2>${name}</h2>
                <p>${bio}</p>

                <ul class="info>
                    <li>${followers}<strong>Followers</strong></li>
                    <li>${following}<strong>Following</strong></li>
                    <li>${public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);
        search.value = "";
    }
});