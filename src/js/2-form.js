const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[name='email']");
const messageInput = form.querySelector("textarea[name='message']");

const STORAGE_KEY = "feedback-form-state";

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

function onInputChange(event) {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
}

loadFromLocalStorage();

form.addEventListener("input", onInputChange);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form data:", formData);

  formData.email = "";
  formData.message = "";
  form.reset();
});