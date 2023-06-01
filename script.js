let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let output = document.querySelector("output");
  let firstNum = document.querySelector("#first-num").value;
  let secondNum = document.querySelector("#second-num").value;
  let operator = document.querySelector("#operator").value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

// Start your code here
// You may move this JS to another file if you wish

errorBtns[0].addEventListener("click", () => {
  console.log("Console log demo");
});
// Console Error Demo
errorBtns[1].addEventListener("click", () => {
  console.error("Console log error");
});

errorBtns[2].addEventListener("click", function () {
  console.count("Console Count");
});

// Console Warn Demo
errorBtns[3].addEventListener("click", () => {
  console.warn("Console Warn Button");
});

// Console Assert Demo
errorBtns[4].addEventListener("click", () => {
  console.assert(3 - 2 === 3, "Assertion failed: 3 - 2 is not equal to 3");
});

// Console Clear Demo
errorBtns[5].addEventListener("click", () => {
  console.clear();
});
// Console Dir Demo
errorBtns[6].addEventListener("click", () => {
  console.dir(document.body);
});

// Console Dirxml Demo
errorBtns[7].addEventListener("click", () => {
  console.dirxml(document.body);
});

// Console Group Start/End Demo
errorBtns[8].addEventListener("click", () => {
  console.group();
  console.log("Inside Group");
});
errorBtns[9].addEventListener("click", () => {
  console.groupEnd();
});

// Console Table Demo
errorBtns[10].addEventListener("click", () => {
  console.table([
    { name: "Abby", num: 30 },
    { name: "Bob", num: 25 },
    { name: "Cindy", num: 35 },
  ]);
});

// Console Time/TimeEnd Demo
errorBtns[11].addEventListener("click", () => {
  console.time("Timer Button");
});

errorBtns[12].addEventListener("click", () => {
  console.timeEnd("Timer Button");
});

// Console Trace Demo
errorBtns[13].addEventListener("click", () => {
  console.trace("This is a console.trace demo.");
});

// Trigger a Global Error
//Step 3 - Trying Try/Catch
errorBtns[14].addEventListener("click", () => {
  try {
    nonExistentFunction();
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Code to be executed regardless of whether an error occurred or not
    console.log("Finally block executed");
  }
});
//Step 4 - Throw and Custom Errors
class NameRequiredError extends Error {
  constructor(message) {
    super(message);
    this.name = "NameRequiredError";
  }
}
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const nameIn = document.getElementById("name");
    if (!nameIn.value) {
      throw new NameRequiredError("Name is required");
    }
    // Process the form submission if no error occurred
    console.log("Form submitted successfully");
  } catch (error) {
    if (error instanceof NameRequiredError) {
      console.error("Custom error occurred:", error.message);
      // Display the custom error message to the user or perform any necessary actions
    } else {
      console.error("An error occurred:", error);
      // Display the error message to the user or perform any necessary actions
    }
  }
});
//Step 5
window.onerror = function (message, source, lineno, colno, error) {
  console.error("An error occurred:", message, source, lineno, colno, error);
};
nonExistentFunction();
TrackJS.track("Testing TrackJS!");
