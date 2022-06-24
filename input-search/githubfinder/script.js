const id = "fd8910d4832dbcc7c558";
const clientSecret = "515091de806d2f9547ed0401db2872e423902b8b";

// Html select Dom
const input = document.querySelector("#inputDemo");
const button = document.querySelector("#inputDemoButton");

// Button Click Event
button.addEventListener("click", GetData);

async function GetData(e) {
  const user = input.value;

  console.log(input.value);
  const url = `http://api.github.com/users/${user}/repos?client_id=${id}&client_secret=${clientSecret}`;
  e.preventDefault();
  const result = await fetch(url);
  const data = await result.json();

  if (data.length > 1) {
    const githubresult = document.getElementById("result");
    githubresult.textContent = "";
    data.map((x) => {
      githubresult.innerHTML += `
        <div class="h-100 p-5 text-white bg-dark rounded-3 m-3">
          <h2 class="text-danger">${x.name}</h2>
          <p class="text-primary display-4">${x.description}</p>
         <a href=${x.clone_url}> <button class="btn btn-outline-light btn-warning" type="button">GitHub Repo</button></a>
        </div>`;
    });
  }
  input.value = "";
}
