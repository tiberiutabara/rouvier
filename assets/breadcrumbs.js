
  document.addEventListener("DOMContentLoaded", function () {
      let breadcrumbData = JSON.parse(localStorage.getItem("breadcrumbData")) || { home: "/", collection: "", product: "" };

      if (window.location.pathname.includes('/collections/')) {
          breadcrumbData.collection = window.location.pathname;
          breadcrumbData.collectionTitle = document.title.replace(/ – .*/, ""); 
          localStorage.setItem("breadcrumbData", JSON.stringify(breadcrumbData));
      }
  });
