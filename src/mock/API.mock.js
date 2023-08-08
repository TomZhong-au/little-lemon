//because the resources from Coursera is not available
// this two mockup functions are made locally

import sendEmail from "../api/sendEmail";

export function fetchAPI(date) {
  return ["17:00", "18:00", "19:00", "20:00"];
}

export function submitAPI(formData) {
  sendEmail(formData);
  return true;
}
