import { fetchAndDrawTable, handleCreateItem } from "./table.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDrawTable();

  /** @type {HTMLButtonElement} */
  const addButton = document.getElementById("addbutton");
  addButton.addEventListener("click", () => {
    handleCreateItem();
    console.log("OK")
    alert("เพิ่มข้อมูลเรียบร้อย")

  });
});
