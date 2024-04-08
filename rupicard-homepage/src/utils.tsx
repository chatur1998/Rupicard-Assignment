export function isInViewport(element: any) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
export function handleScroll() {
  const textElements = document.querySelectorAll(".animated-text");
  const circleElements = document.querySelectorAll(".circle")
  circleElements.forEach(function (element) {
    if (isInViewport(element) && !element.classList.contains("visible")) {
      element.classList.add("visible");
    }
  });
  textElements.forEach(function (element) {
    if (isInViewport(element) && !element.classList.contains("visible")) {
      element.classList.add("visible");
    }
  });
}
