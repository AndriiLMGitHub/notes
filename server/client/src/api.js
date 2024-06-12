import axios from "axios";

const api = axios.create({
  baseURL: "https://andreycreatorwebapp.pythonanywhere.com",
});

function getCSRFToken() {
  let csrfToken = null;
  const metaTags = document.getElementsByTagName("meta");
  for (let i = 0; i < metaTags.length; i++) {
    if (metaTags[i].getAttribute("name") === "csrf-token") {
      csrfToken = metaTags[i].getAttribute("content");
      break;
    }
  }
  return csrfToken;
}

// Get the CSRF token from the meta tag
const csrfToken = getCSRFToken();

// Set the CSRF token in the headers
api.defaults.headers.common["X-CSRFToken"] = csrfToken;

export default api;
