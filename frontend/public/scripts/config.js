/**
 * @typedef {Object} Item
 * @property {string} _id
 * @property {string} building_name
 * @property {string} building_img 
 * @property {number} building_floor
 * @property {string} building_details
 * @property {string} building_time_open 
 * @property {string} building_time_close
 */

/** @typedef {Omit<Item, "_id">} ItemPayload */

export const BACKEND_URL = "http://localhost:3222";

