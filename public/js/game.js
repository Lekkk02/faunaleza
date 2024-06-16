function checkCompletion () {

        // Select all elements with the class .game_input_container
        const gameInputContainers = document.querySelectorAll('.game_input_container');
      
        // Iterate over each .game_input_container element
        gameInputContainers.forEach(container => {
          // Remove existing classes 'approved' and 'rejected'
          container.classList.remove('approved', 'rejected');
      
          // Find the .secondary-container element within the current .game_input_container
          const secondaryContainer = container.querySelector('.secondary-container');
      
          // Check if .secondary-container contains a div with myvalue equal to ishouldhave
          if (secondaryContainer.firstElementChild != null) {
          const myValue = secondaryContainer.firstElementChild.getAttribute("myvalue");;
          const shouldBe = secondaryContainer.getAttribute("ishouldhave");
      
          if (myValue === shouldBe) {
            // Add 'approved' class if myvalue equals ishouldhave
            container.classList.add('approved');
          } else {
            // Add 'rejected' class if myvalue does not equal ishouldhave
            container.classList.add('rejected');
          } } else {
            container.classList.add('rejected');
            }
        });
}


function loadGame() {
    const draggables = document.querySelectorAll(".draggable");
    const containers = document.querySelectorAll(".container");
    
    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });
    
      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });
    
    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
    
        if (
          container.classList.contains("secondary-container") &&
          container.children.length >= 1
        ) {
          return; // If secondary-container already has a child, do not allow further drops
        }
    
        if (afterElement == null) {
          container.appendChild(draggable);
        } else {
          container.insertBefore(draggable, afterElement);
        }
      });
    });
    
    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
      ];
    
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }

    const terminarButtons = document.querySelectorAll('.terminar');
    terminarButtons.forEach(button => {
      button.addEventListener('click', checkCompletion);
    });
}


// Call the loadGame function to initialize drag-and-drop behavior
// Function to check if URL contains "cardenalito?q=juego"
function checkURLAndLoadGame() {
  if (window.location.href.includes("cardenalito?q=juego")) {
    loadGame();
  }
}

// Initial check when the script is loaded
checkURLAndLoadGame();

// Listen for hash changes (hashchange) or page navigation (popstate)
window.addEventListener("hashchange", checkURLAndLoadGame);
window.addEventListener("popstate", checkURLAndLoadGame);
window.gameload =() => { loadGame(); }