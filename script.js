// Edit product names and prices here. Keep the number of names and prices equal.
const productNames = ["Definitely Logo Tee", "Never Compare Tee", "Portrait Graphic Tee", "Backprint Graphic Tee", "Mini Logo Tee", "Card Deck Graphic Tee", "Vintage Label Tee", "Arcade Graphic Tee", "Retro Game Tee", "Purple Arcade Tee", "Unattainable Signature Tee", "Dear Universe Tee"];
const prices = [650,650,700,700,650,700,650,750,700,750,650,700];
const grid = document.getElementById("products");
let bagCount = 0;
productNames.forEach((name, index) => {
  const card = document.createElement("article"); card.className = "product-card";
  card.innerHTML = `<div class="product-image"><span class="product-tag">${index < 3 ? "NEW DROP" : "UNATT. 01"}</span><img src="images/shirt${index+1}.jpg" alt="${name}" loading="lazy"></div><div class="product-info"><div><h3>${name}</h3><p>₱${prices[index].toLocaleString("en-PH")}</p></div><button class="add-btn" type="button">ADD +</button></div>`;
  card.querySelector("button").addEventListener("click",()=>{bagCount++;document.getElementById("bag-count").textContent=bagCount;card.querySelector("button").textContent="ADDED ✓";}); grid.appendChild(card);
});
