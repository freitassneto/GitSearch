function renderHeader(user) {
  const header = document.querySelector(".header");
  header.innerHTML = "";
  const userRendered = renderUser(user);
  header.append(userRendered);
}

function renderUser(element) {
  const divHeader = document.createElement("div");
  const sectionLeft = document.createElement("section");
  const figureProfile = document.createElement("figure");
  const imgProfile = document.createElement("img");
  const divNameOccupation = document.createElement("div");
  const h2DevName = document.createElement("h2");
  const pDevOccupation = document.createElement("p");

  const navSectionRight = document.createElement("nav");
  const buttonEmail = document.createElement("a");
  const buttonChangeUser = document.createElement("a");

  divHeader.classList.add("headerContainer");
  sectionLeft.classList.add("headerLeftCol");
  figureProfile.classList.add("profileWrapper");
  divNameOccupation.classList.add("nameOccupation");
  h2DevName.classList.add("devName");
  pDevOccupation.classList.add("devOccupation");

  navSectionRight.classList.add("headerRightCol");
  buttonEmail.classList.add("headerBtns");
  buttonChangeUser.classList.add("headerBtns");

  imgProfile.src = element.avatar_url;
  h2DevName.innerText = element.name;
  pDevOccupation.innerText = element.bio;
  buttonEmail.innerText = "E-mail";
  buttonEmail.href = element.blog;
  buttonEmail.target = "_blank";
  buttonChangeUser.innerText = "Trocar de usuário";

  buttonChangeUser.addEventListener("click", () => {
    buttonChangeUser.innerHTML = "";
    const spinnerImg = document.createElement("img");
    spinnerImg.src = "../../assets/img/spinner.svg";
    spinnerImg.alt = "spinner";
    spinnerImg.classList = "loading";
    buttonChangeUser.appendChild(spinnerImg);

    window.location.replace("../../index.html");
  });

  navSectionRight.append(buttonEmail, buttonChangeUser);
  divNameOccupation.append(h2DevName, pDevOccupation);
  figureProfile.appendChild(imgProfile);
  sectionLeft.append(figureProfile, divNameOccupation);
  divHeader.append(sectionLeft, navSectionRight);

  return divHeader;
}

function renderReposList(array) {
  const ulReposList = document.querySelector(".reposList");
  ulReposList.innerHTML = "";

  array.forEach((element) => {
    const repository = renderRepositories(element);
    ulReposList.append(repository);
  });
}

function renderRepositories(element) {
  const liRepoCard = document.createElement("li");
  const divCardContainer = document.createElement("div");
  const h2RepoTitle = document.createElement("h2");
  const pRepoDescription = document.createElement("p");
  const divfooterRepoBtns = document.createElement("div");
  const btnRepo = document.createElement("a");
  const btnDemo = document.createElement("a");

  liRepoCard.classList.add("repoCard");
  divCardContainer.classList.add("cardContainer");
  h2RepoTitle.classList.add("repoTitle");
  pRepoDescription.classList.add("repoDescription");
  divfooterRepoBtns.classList.add("repoBtns");
  btnRepo.classList.add("repoBtn");
  btnDemo.classList.add("repoBtn");

  h2RepoTitle.innerText = element.name;
  pRepoDescription.innerText = element.description;
  btnRepo.innerText = "Repositório";
  btnRepo.href = `${element.html_url}`;
  btnRepo.target = "_blank";
  btnDemo.innerText = "Demo";
  btnDemo.href = element.html_url;
  btnDemo.target = "_blank";

  divfooterRepoBtns.append(btnRepo, btnDemo);
  divCardContainer.append(h2RepoTitle, pRepoDescription, divfooterRepoBtns);
  liRepoCard.append(divCardContainer);

  return liRepoCard;
}
