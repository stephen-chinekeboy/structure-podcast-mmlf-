function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    }
    function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    }

const menuBtn = document.getElementById("menuBtn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", () => {

      navbar.classList.toggle("active");

    });


    const subscribeForm =
      document.getElementById("subscribeForm");

    subscribeForm.addEventListener("submit", (e) => {

      e.preventDefault();

      const email =
        document.getElementById("email").value;

      console.log("Subscriber:", email);

      alert("Thank you for subscribing!");

      subscribeForm.reset()});