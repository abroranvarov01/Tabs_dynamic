import { getDataTabs, getDatacontent } from "./service.js";
const tab_block = document.querySelector(".tab_block");
const btns = document.getElementsByClassName("btns");
const box = document.querySelector(".box");

const renderTab = async (path) => {
  const data = await getDatacontent(path);
  box.innerHTML = data.map((item) => `<h1>${item.name}</h1>`).join("");
};

const getTabhead = async () => {
  const data = await getDataTabs();
  tab_block.innerHTML = data
    .map(
      (item) =>
        `<button class="btns" data-path="${item.path}">${item.name}</button>`
    )
    .join("");
  btns[0].classList.add("active");
  renderTab(data[0].path);
};
getTabhead();

tab_block.addEventListener("click", (e) => {
  if (e.target.dataset.path) {
    renderTab(e.target.dataset.path);
  }
  for (let i of btns) {
    i.classList.remove("active");
  }
  e.target.classList.add("active");
});
