const RefreshButton = (mainElement) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer");

  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = "Refresh";
  btnContainer.append(btn);
  mainElement.append(btnContainer);

  return btn;
};

export default RefreshButton;
