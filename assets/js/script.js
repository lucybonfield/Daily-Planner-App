var currentDay = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDay); // Displays current day at the top of page
const startTime = 9;
const endTime = 17;

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
  const originalTime = dayjs().hour(hour).minute(0).second(0);
  const formattedTime = originalTime.format("hA");
  // Create a new row for each time block
  const newRow = `<tr>
                    <td class="time${hour - startTime + 1}">${formattedTime}</td>
                    <td class="task${hour - startTime + 1}"><input type="text" id="task${hour}" /></td>
                    <td class="save${hour - startTime + 1}"><button onclick="saveTask(${hour})">Save</button></td>
                 </tr>`;
  $(".container table").append(newRow);
}