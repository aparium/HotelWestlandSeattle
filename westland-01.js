$(document).ready(function () {
  function handleScroll() {
    const scrollY = $(window).scrollTop();
    if (scrollY > 0) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  }

  $(window).scroll(handleScroll);
  handleScroll();

  $("head").append('<link rel="shortcut icon" href="https://cdn.shrglobal.com/IBE/CrsMedia/P17399/fav-01.svg"/>');

  $("#trg").click(function () {
    $("#ws-utility").toggleClass("open");
    $("#headerwrapper").toggleClass("opened");
    $("#ws-main").toggleClass("opened");
    $("#ws-header").toggleClass("opened");
    $(this).toggleClass("to-close");
  });

  $("#trg-navigation").click(function () {
    $("#site-navigation").toggleClass("opened");
    $(this).toggleClass("closed");
  });

  $("#mobile-close").click(function () {
    $("#site-navigation").removeClass("opened");
    $("#trg-navigation").removeClass("closed");
  });

  const menuItems = document.querySelectorAll(".menu-item");

  const addSubNav = (menuItem) => {
    const hasChildren = menuItem.querySelector("ul");
    if (hasChildren) {
      menuItem.classList.add("has-child");

      const subNavBtn = document.createElement("button");
      subNavBtn.classList.add("subnav-btn");

      // Create the SVG element from the provided code
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 40 21.44");
      svg.setAttribute("width", "24");
      svg.setAttribute("height", "24");

      // Add the provided SVG path
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("id", "Layer_20");
      path.setAttribute(
        "d",
        "M18.99,21.02L.42,2.45C-.14,1.89-.14.99.41.43c0,0,0,0,0,0,.56-.56,1.46-.56,2.02,0,0,0,0,0,0,0l17.55,17.57L37.55.42c.56-.56,1.47-.56,2.03,0s.56,1.47,0,2.03l-18.56,18.56c-.56.56-1.46.56-2.02,0,0,0,0,0,0,0Z"
      );
      svg.appendChild(path);

      subNavBtn.appendChild(svg);
      menuItem.appendChild(subNavBtn);

      subNavBtn.addEventListener("click", () => {
        const subMenu = menuItem.querySelector(".menu-item-sub-menu");
        subMenu.classList.toggle("opened");
        menuItem.classList.toggle("opened");
      });
    }
  };

  menuItems.forEach(addSubNav);
});
