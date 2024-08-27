const clearEntry = () => {
  document.getElementById("display").value = "";
};
const backSpace = () => {
  let result = document.getElementById("display").value;
  document.getElementById("display").value = display.slice(0, -1);
};
const appendcharacter = (numb) => {
  document.getElementById("display").value += numb;
};

const equalTo = () => {
  try {
    let display = eval(document.getElementById("display").value);
    document.getElementById("display").value = display;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
};
