let icon = document.getElementById("change-mood");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.innerHTML = "Light";
  }else{
    icon.innerHTML = "Dark";
  }
};
