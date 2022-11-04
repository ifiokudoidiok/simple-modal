const dialogComponent = () => {

    // Initialize the classNames in the global scope to make it accessible all through.
  let component;
  let dialog; 
  let falsyButton;
  let truthyButton;

  // Create Class Names Selectors to be used across component
  const createClassNames = () => {
    component = document.querySelector(".dialog-container");
    dialog = component.querySelector(".dialog");
    truthyButton = component.querySelector(".truthy-btn");
    falsyButton = component.querySelector(".falsy-btn");
  };

  // Display component in DOM Tree
  const displayDialog = (props = {}) => {

    // Initialize default props 
    let {
      content = "Dialog Content",
      truthyText = "Yes",
      falsyText = "Cancel",
      onClickTruthyBtn = null,
      onClickFalsyBtn = null,
    } = props;

    // Build component HTML structure
    const htmlContent = `
        <div class="dialog-container">
          <div class="dialog">
            <div class="content">${content}</div>
            <div class="buttons">
            <div class="btn truthy-btn">${truthyText}</div>
            <div class="btn falsy-btn">${falsyText}</div>
            </div>
          </div>
        </div>
      `;

      // Add html to DOM structure
    document.body.innerHTML += htmlContent;

    // Call the Query selector function
    createClassNames();

    addEvntListenters(onClickTruthyBtn, onClickFalsyBtn);
    return component;
  };

  const addEvntListenters = (onClickTruthyBtn, onClickFalsyBtn) => {
    truthyButton?.addEventListener("click", (e) => {
      hideDialog();
      onClickTruthyBtn && onClickTruthyBtn();
    });


    falsyButton?.addEventListener("click", (e) => {
      hideDialog();
      onClickFalsyBtn && onClickFalsyBtn();
    });
  };

  // Remove component from DOM Tree
  const hideDialog = () => {
    component.remove();
  };

  return {
    displayDialog,
    hideDialog,
  };
};

window.dialogComponent = dialogComponent();
