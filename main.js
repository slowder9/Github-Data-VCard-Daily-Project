// 1. First, find our Info Container

let container = document.querySelector(".info");

// 2. Create our Ajax Request

let req = new XMLHttpRequest();
req.open("GET", "http://192.168.1.12:8000/octocat");
req.addEventListener ("load", displayInfo);
req.send();

function displayInfo () {
	let data = JSON.parse(this.responseText);
	let list = "";
	let	something = `<img class="pic" src = "${data.avatar_url}">`;

console.log(data);
	
// data.results.forEach(function (avatar){
// 	list += `<p>${avatar.name}</p>`
	
// });

	list += `<p class="name">Name: ${data.name}</p>`;
	list += `<p class="userName">Github URL: ${data.login}</p>`;
	list += `<p class="location">Location: ${data.location}</p>`;
	list += `<p class="email">Email: ${data.email}</p>`;
	list += `<p class="website">Website: ${data.url}</p>`;
	list += `<p class="bioStory">${data.bio}</p>`;

document.querySelector('.yamama').innerHTML = list;
container.innerHTML = something;
}




