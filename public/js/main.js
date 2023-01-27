const passLengthEl = document.getElementById("passLength");
const passScEl = document.getElementById("passSc");
const passCardEl = document.getElementById("card");
const copyBtnEl = document.getElementById("copyBtn");

passLengthEl.addEventListener("change", () => {
  if (localStorage.getItem("passLength")) {
    localStorage.removeItem("passLength");
  }
  const passwordLength = passLengthEl.value;
  localStorage.setItem("passLength", passwordLength);
});

passScEl.addEventListener("change", () => {
  if (localStorage.getItem("passSc")) {
    localStorage.removeItem("passSc");
  }
  const passwordSc = passScEl.checked;
  localStorage.setItem("passSc", passwordSc);
});

copyBtnEl.addEventListener("click", (e) => {
  navigator.clipboard.writeText(passCardEl.textContent);
  copyBtnEl.disabled = true;
});

const initControls = (() => {
  const length = localStorage.getItem("passLength");
  const sc = localStorage.getItem("passSc");

  if (length) {
    passLengthEl.value = length;
  }

  if (sc === "true") {
    passScEl.checked = sc;
  }
})();
