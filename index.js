document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("#message-input");
  const encrytped = btoa(input.value);

  document.querySelector(
    "#link-input"
  ).value = `${window.location}#${encrytped}`;
});
