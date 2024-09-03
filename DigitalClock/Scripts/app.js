function clock() {
  const hour = document.querySelector(".hour");
  const min = document.querySelector(".min");
  const sec = document.querySelector(".sec");

  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();

  hour.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
}

setInterval(clock, 1000);
