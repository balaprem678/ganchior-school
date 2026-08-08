document.addEventListener("DOMContentLoaded", function () {
  function getAssetPath(assetPath) {
    const currentPath = window.location.pathname || "";
    const isInComponentsFolder = currentPath.includes("/Components/") || currentPath.includes("\\Components\\");
    return isInComponentsFolder ? `../${assetPath}` : `./${assetPath}`;
  }

  const scripts = [
    getAssetPath("js/jquery-3.4.1.min.js"),
    getAssetPath("js/popper.min.js"),
    getAssetPath("js/bootstrap.min.js"),
    getAssetPath("js/owl.carousel.min.js"),
    getAssetPath("js/jquery.animateNumber.min.js"),
    getAssetPath("js/jquery.waypoints.min.js"),
    getAssetPath("js/jquery.fancybox.min.js"),
    getAssetPath("js/jquery.sticky.js"),
    getAssetPath("js/jarallax.min.js"),
    getAssetPath("js/bootstrap-datepicker.min.js"),
    getAssetPath("js/custom.js"),
    getAssetPath("js/header.js"),
  ];

  scripts.forEach(src => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  });
});