document.addEventListener("DOMContentLoaded", function () {
    // Function to copy text to clipboard
    function copyTextToClipboard(e) {
        e.preventDefault();
      // Select the text input element
      const textInput = document.getElementById("coupon");
      
      // Check if the Clipboard API is available in the browser
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textInput.value)
          .then(() => {
            // Success: Update the button text temporarily
            copyButton.textContent = "Copied!";
            setTimeout(() => {
              copyButton.textContent = "Copy Text";
            }, 3000); // Reset button text after 3 seconds
          })
          .catch((error) => {
            console.error("Error copying text: ", error);
          });
      } else {
        // Clipboard API not supported, provide fallback
        console.warn("Clipboard API not supported in this browser. Please use a modern browser.");
      }
    }
  
    // Add a click event listener to the Copy button
    const copyButton = document.getElementById("copy-btn");
    copyButton.addEventListener("click", copyTextToClipboard);
  });