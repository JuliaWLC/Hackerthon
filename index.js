window.onload = () => {
  success();
};

function success() {
  document.querySelector(".submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("triggered")
    Swal.fire({
      icon: "success",
      title: "Submitted",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location = "./showbus.html";
    }, 1501);
  });
}
