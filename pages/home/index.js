function captureInput() {
  const btnSend = document.querySelector("#send");

  btnSend.addEventListener("click", function (event) {
    event.preventDefault();

    const inputUser = document.getElementById("inputUser");
    const inputValue = inputUser.value.trim();

    btnSend.innerHTML = "";
    const spinnerImg = document.createElement("img");
    spinnerImg.src = "../../assets/img/spinner.svg";
    spinnerImg.alt = "spinner";
    spinnerImg.classList = "loading";
    btnSend.appendChild(spinnerImg);

    searchedUser(inputValue, btnSend);
  });
}
captureInput();

const baseURL = "https://api.github.com/users";
const myHeaders = {
  "Content-Type": "application/json",
};

async function searchedUser(user, button) {
  const usuario = await fetch(`${baseURL}/${user}`, {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((response) => {
      button.innerHTML = "";
      button.innerText = "Buscar na API";
      return response;
    });

  window.localStorage.setItem("dashboard", JSON.stringify(usuario));

  if (localStorage.getItem("usuarios")) {
    const usuarioCap = JSON.parse(localStorage.getItem("usuarios"));
    localStorage.setItem("usuarios", JSON.stringify([...usuarioCap, usuario]));
  } else {
    window.localStorage.setItem("usuarios", JSON.stringify([usuario]));
  }
  window.location.replace("./pages/profile/index.html");
}

function toggleButton() {
  const userName = document.querySelector("#inputUser");
  if (userName) {
    document.querySelector("#send").disabled = false;
    return;
  }
  document.querySelector("#send").disabled = true;
}

function recentSearches() {
  const recentUsers = JSON.parse(window.localStorage.getItem("usuarios")) || [];

  renderRecent(recentUsers);
}
recentSearches();

function renderRecent(recentUser) {
  recentUser.forEach((element, index) => {
    if (index <= 2) {
      const ulRecentList = document.querySelector(".ulRecentProfiles");

      const liProfiles = document.createElement("li");
      const figure = document.createElement("figure");
      const anchorDiv = document.createElement("a");
      const divTooltip = document.createElement("div");
      const spanTooltip = document.createElement("span");
      const imgRecentUser = document.createElement("img");

      liProfiles.classList.add("profiles");
      anchorDiv.href = element.html_url;
      anchorDiv.target = "_blank";
      divTooltip.id = "tooltip";
      spanTooltip.id = "tooltipText";
      spanTooltip.innerText = "Acessar este perfil";
      imgRecentUser.src = element.avatar_url;
      imgRecentUser.classList.add("imgRecent");

      divTooltip.append(spanTooltip, imgRecentUser);
      anchorDiv.append(divTooltip);
      figure.appendChild(anchorDiv);
      liProfiles.appendChild(figure);
      ulRecentList.append(liProfiles);
    }
  });
}
