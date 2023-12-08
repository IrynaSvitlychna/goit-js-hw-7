const categories = document.querySelector("#categories");
const itemAll = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemAll.length}`);

const listH2 = document.querySelectorAll("h2");

listH2.forEach((item) => {
    console.log(`Category: ${item.textContent}`);
    console.log(`Elements: ${item.nextElementSibling.children.length}`);
});
