document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu ul li");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const subMenu = item.querySelector(".submenu");
      if (!subMenu) {
        const submenuList = document.createElement("ul");
        submenuList.classList.add("submenu");

        const tabs = ["Create", "List", "Report"];
        tabs.forEach((tab) => {
          const tabItem = document.createElement("li");
          tabItem.textContent = tab;
          submenuList.appendChild(tabItem);

          tabItem.addEventListener("click", (event) => {
            event.stopPropagation();
          });
        });

        item.appendChild(submenuList);

        const arrowIcon = item.querySelector("i.fa-angle-right");
        arrowIcon.classList.remove("fa-angle-right");
        arrowIcon.classList.add("fa-angle-down");
      } else {
        subMenu.remove();

        const arrowIcon = item.querySelector("i.fa-angle-down");
        arrowIcon.classList.remove("fa-angle-down");
        arrowIcon.classList.add("fa-angle-right");
      }
    });
  });
});
