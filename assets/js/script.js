// Display current day at the top of page
var currentDay = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDay);

// Task rows
const startTime = 9;
const endTime = 17;
for (let hour = startTime; hour <= endTime; hour++) {
  const originalTime = dayjs().hour(hour).minute(0).second(0);
  const formattedTime = originalTime.format("hA");
  
  const newRow = `<tr>
                    <td class="time${hour - startTime + 1}">${formattedTime}</td>
                    <td class="task${hour - startTime + 1}"><input type="text" id="task${hour}" /></td>
                    <td class="save${hour - startTime + 1}"><button onclick="saveTask(${hour})">Save</button></td>
                 </tr>`;
  $(".container table").append(newRow);
}

// Save
function saveTask(hour) {
  const taskInput = $(`#task${hour}`).val();
  // Do something with the task input
}