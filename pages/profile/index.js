const baseURL = "https://api.github.com/users";
const myHeaders = {
  "Content-Type": "application/json",
};

const usuario = JSON.parse(window.localStorage.getItem("dashboard")) || [];
renderHeader(usuario);

function getRepositories() {
  fetch(`${baseURL}/${usuario.login}/repos`, {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((response) => {
      renderReposList(response);
      return response;
    });
}

getRepositories();
