window.onload = () => {
  selectBus();
};

function selectBus() {
  document.querySelector(".accept-order").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("triggered2");
    Swal.fire({
      title: "確定訂位?",
      text: "我們將會為你預留坐位",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "取消",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "確定",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "己為你預留坐位",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .then(
          window.location = "./showBooking.html"
      );
  });
}
