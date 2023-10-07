import { BACKEND_URL } from "./config.js";

/** @typedef {import("./config.js").Item} Item */
/** @typedef {import("./config.js").ItemPayload} ItemPayload */

export async function getItems() {
  /** @type {Item[]} */
  const items = await fetch(`${BACKEND_URL}/building`).then((r) => r.json());
  return items;
}



/**
 * @param {ItemPayload} item
 */
export async function createBuilding(item) {
  await fetch(`${BACKEND_URL}/building`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

/**
 * @param {string} id
 * @param {ItemPayload} item
 */
export async function editBuilding(id, item) {
  await fetch(`${BACKEND_URL}/building/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

export async function deleteBuilding(id, item) {
  await fetch(`${BACKEND_URL}/building/${id}`, {
    method: "DELETE",

});
}
