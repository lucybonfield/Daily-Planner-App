const startTime = 9;
const endTime = 17;

// Display current day at the top of page
var currentDay = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDay);
$("#currentDay").text(currentDay);

// Load tasks from local storage
function loadTasks() {
  for (let hour = startTime; hour <= endTime; hour++) {
    const task = localStorage.getItem(`task${hour}`);
    if (task) {
      $(`#task${hour}`).val(task);
    }
  }
}

// Save task to local storage
function saveTask(hour) {
  const taskInput = $(`#task${hour}`).val();
  localStorage.setItem(`task${hour}`, taskInput);
}

// Load tasks when the page is ready
$(document).ready(function () {
  loadTasks();
});

// Generates time blocks
for (let hour = startTime; hour <= endTime; hour++) {
  const currentHour = dayjs().hour();
  const originalTime = dayjs().hour(hour).minute(0).second(0);
  const formattedTime = originalTime.format("hA");

  // Change background colour depending on current time
  let bgColour;
  if (currentHour > hour) {
    bgColour = 'past'; // Time has passed
  } else if (currentHour === hour) {
    bgColour = 'present'; // Current hour
  } else {
    bgColour = 'future'; // Future time
  }

  // Create new rows with incrementing times
  const newRow = `<tr class="time-block">
                    <td class="hour">${formattedTime}</td>
                    <td class="task description"><input type="text" id="task${hour}" /></td>
                    <td class="saveBtn"><button onclick="saveTask(${hour})"><i class="fas fa-save"></i>
                    </button></td> 
                 </tr>`;

  const $newRow = $(newRow); // Convert the string to a jQuery object
  $newRow.find('.task input').addClass(bgColour); // Add background colour to task
  $(".container table").append($newRow);
}