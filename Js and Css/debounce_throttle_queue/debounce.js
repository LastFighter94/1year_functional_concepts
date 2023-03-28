const debounce = (func, waitTime) => {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, waitTime);
  };
};

// function debounce(func, delay) {
//   let timeout;
//   return function() {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(context, args), delay);
//   };
// }

const el = document.querySelector("input");
const log = () => console.log("RESULT:", el.value);

el.addEventListener("input", debounce(log, 500));
