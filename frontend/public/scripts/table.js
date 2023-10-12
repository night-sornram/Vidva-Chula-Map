import {createBuilding, getItems , deleteBuilding } from "./api.js";

/** @typedef {import("./config.js").Item} Item */
/** @typedef {import("./config.js").ItemPayload} ItemPayload */

/**
 * @param {Item[]} items
 */
function drawTable(items) {
  const allcard = document.getElementById("articles")
  
  for (const item of items) {
    const card = document.createElement("article")

    card.innerHTML = `
    <div class="article-wrapper">
      <figure>
        <img src="${item.building_img}" alt="" />
      </figure>
      <div class="article-body">
        <h2>${item.building_name}</h2>
        
      </div>
    </div>
  `
  const button = document.createElement("button");
  button.classList.add("DeleteButton");

  const alink = document.createElement("a");
  alink.classList.add("read-more");
  alink.href = "#filter"
  alink.innerHTML = `Read more <span class="sr-only">about this is some title</span>
  <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>`
  alink.addEventListener("click", () => test(item._id));

  
  button.addEventListener("click", () => handleDelete(item._id));
  button.innerText = "ลบ";
  card.appendChild(alink)
  card.appendChild(button)
  allcard.appendChild(card);
  }
}




export async function fetchAndDrawTable() {
  const items = await getItems();
  drawTable(items);
}

export async function test(id) {
  const items = await getItems();
  const want = items.filter((item) => item._id === id)
  const filt = document.getElementById("filter")

  filt.innerHTML = `
    <div class="details-page">
    <a href="#building" class="back" > X </a>
    <div class="details-center">
      <div class="details-name">
        <h1>${want[0].building_name}</h1>
      </div>
      <div class="details-image">
      <img src="${want[0].building_img}">
      </div>
    </div>
    <div class="details-start">
      <div class="details-floor">
        <h3> จำนวนชั้น :</h3>
        <br>
        <p>${want[0].building_floor}</p>
      </div>
      <div class="details-det">
        <h3> รายละเอียด :</h3>
        <br>
        <p>${want[0].building_details}</p>
      </div>
      <div class="details-open">
      <h3> วันที่เปิด :</h3>
      <br>
      <p>${want[0].building_time_open}</p>
      </div>
      <div class="details-close">
      <h3> วันที่ปิด:</h3>
      <br>
      <p>${want[0].building_time_close}</p>
      </div>
    </div>
    </div>
  `
  console.log(want)
}

/**
 * @param {string} id
 */
export async function handleDelete(id) {
  console.log("Delete")
  alert("ลบข้อมูลเรียบร้อย")
  await deleteBuilding(id);
  await fetchAndDrawTable();
  window.location.reload();
}


export async function handleCreateItem() {
  /** @type {HTMLInputElement} */
  const nameToAdd = document.getElementById("building-name");

  /** @type {HTMLSelectElement} */
  const imageToAdd = document.getElementById("building-image");

  /** @type {HTMLInputElement} */
  const floorToAdd = document.getElementById("building-floor");

    /** @type {HTMLInputElement} */
    const detailToAdd = document.getElementById("building-details");

    /** @type {HTMLInputElement} */
    const openToAdd = document.getElementById("building-open");

      /** @type {HTMLInputElement} */
  const closeToAdd = document.getElementById("building-close");

  const payload = {

  building_name : nameToAdd.value,
  building_img : imageToAdd.value,
  building_floor: floorToAdd.value,
  building_details : detailToAdd.value,
  building_time_open : openToAdd.value,
  building_time_close: closeToAdd.value,
  };


  await createBuilding(payload);
  await fetchAndDrawTable();
  window.location.reload();


nameToAdd.value = "";
imageToAdd.value = "https://upload.wikimedia.org/wikipedia/th/f/f6/EngCU_Gear.png";
floorToAdd.value = 0;
detailToAdd.value = "";
openToAdd.value = "";
closeToAdd.value = "";

}