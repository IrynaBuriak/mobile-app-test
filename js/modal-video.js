(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    videowrap: document.querySelector(".video__window"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  window.addEventListener("click", function (e) {
    if (e.target == refs.videowrap) {
      // refs.videowrap.classList.add("is-hidden");
      console.log("modal");
    }
  });
})();
