document.addEventListener("DOMContentLoaded", async () => {
  // Create a tooltip container
  const tooltip = document.createElement("div");
  tooltip.id = "tooltip";
  tooltip.style.position = "absolute";
  tooltip.style.display = "none";
  tooltip.style.background = "#333";
  tooltip.style.color = "#fff";
  tooltip.style.padding = "10px";
  tooltip.style.borderRadius = "5px";
  tooltip.style.zIndex = "1000";
  tooltip.style.whiteSpace = "pre-wrap"; // For multiline text
  document.body.appendChild(tooltip);

  let roomData = {};

  try {
    // Fetch room data asynchronously
    const response = await fetch("./room_data.json"); // Adjust the path as needed
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    roomData = await response.json();

    // Find all elements with class "ember-basic-dropdown-trigger"
    const dropdownElements = document.querySelectorAll(".ember-basic-dropdown-trigger");

    // Attach event listeners after roomData is loaded
    dropdownElements.forEach((element) => {
      element.addEventListener("mouseover", (event) => {
        const elementId = element.parentElement.id; // Get parent div's ID (e.g., ember6096)
        const roomInfo = roomData[elementId]; // Lookup room data by ID

        if (roomInfo) {
          // Populate tooltip with rates
          tooltip.innerHTML = `
            <strong>Room Type:</strong> ${element.querySelector(".trigger__label").textContent.trim()}<br>
            <strong>Rates:</strong><br>
            May: ${roomInfo.May}<br>
            June: ${roomInfo.June}<br>
            July: ${roomInfo.July}<br>
            August: ${roomInfo.August}<br>
            September: ${roomInfo.September}<br>
            October: ${roomInfo.October}<br>
            November: ${roomInfo.November}
          `;
        } else {
          tooltip.textContent = "No data available for this room.";
        }

        // Display the tooltip
        tooltip.style.display = "block";
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
      });

      element.addEventListener("mousemove", (event) => {
        // Update tooltip position
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
      });

      element.addEventListener("mouseout", () => {
        // Hide tooltip
        tooltip.style.display = "none";
      });
    });
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
});