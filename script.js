function openTab(tabName) {
    // Hide all tab content
    var contents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
    
    // Remove 'active' class from all buttons
    var buttons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    
    // Show the current tab and mark the button as active
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
  }
  