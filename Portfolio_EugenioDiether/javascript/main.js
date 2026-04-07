document.querySelectorAll("a.transition").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const url = this.href;

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location = url;
    }, 500);
  });
});