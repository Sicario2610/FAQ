function toggleAnswer(button) {
  const accordionItem = button.closest(".accordion-item");
  const content = accordionItem.querySelector(".accordion-content");
  const showBtn = accordionItem.querySelector(".show-btn");
  const hideBtn = accordionItem.querySelector(".hide-btn");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    showBtn.style.display = "none";
    hideBtn.style.display = "inline-block";
    accordionItem.classList.add("active");
  } else {
    content.style.display = "none";
    showBtn.style.display = "inline-block";
    hideBtn.style.display = "none";
    accordionItem.classList.remove("active");
  }
}
