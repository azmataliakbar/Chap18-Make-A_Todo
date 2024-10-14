/* Chapter-18,19,20 */

//^ Style-1
let courses = [];
let currentCourseIndex = 0;
let editingCourseIndex = 0;

// Function to show the course selection input for the first course
function showCourseInput() {
  courses = []; // Reset courses array
  currentCourseIndex = 0; // Reset course index
  document.getElementById("courseNumber").textContent = currentCourseIndex + 1;
  document.getElementById("courseInput").value = ''; // Clear input field
  document.getElementById("courseAlert").style.display = "block";
}

// Function to submit a selected course and move to the next course
function submitCourse() {
  const courseName = document.getElementById("courseInput").value || `Course ${currentCourseIndex + 1}`;
  courses.push(courseName);

  currentCourseIndex++;
  
  // If 5 courses are selected, hide the course input and show the selection alert
  if (currentCourseIndex === 5) {
    closeAlert('courseAlert');
    showDisplayAlert();
  } else {
    document.getElementById("courseNumber").textContent = currentCourseIndex + 1;
    document.getElementById("courseInput").value = '';  // Clear input field for the next course
  }
}

// Function to display selected courses in the alert box after submission
function showDisplayAlert() {
  document.getElementById("displayCourses").textContent = `Selected Courses for 2024: ${courses.join(", ")}`;
  document.getElementById("displayAlert").style.display = "block";
  document.getElementById("editCoursesButton").style.display = "block";  // Show Edit button
  document.getElementById("okButton").style.display = "block";  // Show OK button
}

// Function to handle the Edit Courses button click
function editCourses() {
  editingCourseIndex = 0; // Start editing from the first course
  closeAlert('displayAlert');
  showEditAlert();
}

// Function to display the current course being edited
function showEditAlert() {
  document.getElementById("editCourseNumber").textContent = editingCourseIndex + 1;
  document.getElementById("editCourseInput").value = courses[editingCourseIndex];
  document.getElementById("editAlert").style.display = "block";
}

// Function to submit an edited course and move to the next course for editing
function submitEditedCourse() {
  const updatedCourseName = document.getElementById("editCourseInput").value || courses[editingCourseIndex];
  courses[editingCourseIndex] = updatedCourseName;

  editingCourseIndex++;

  // If all courses are edited, show the updated selected courses and OK button
  if (editingCourseIndex === courses.length) {
    closeAlert('editAlert');
    document.getElementById("displayCourses").textContent = `Selected Courses for 2024: ${courses.join(", ")}`;
    document.getElementById("displayAlert").style.display = "block";
    document.getElementById("okButton").style.display = "block";  // Show OK button
  } else {
    showEditAlert(); // Keep showing the edit alert for the next course
  }
}

// Function to show the customized alert message with the final selected courses
function finalizeSelection() {
  // Custom alert message with selected courses
  const selectedCoursesMessage = `Finalized Courses for 2024: ${courses.join(", ")}`;
  
  // Customized alert (you can style this alert with CSS for better appearance)
  const customAlert = document.createElement("div");
  customAlert.id = "customAlert";
  customAlert.style.backgroundColor = "lightyellow";
  customAlert.style.border = "2px solid black";
  customAlert.style.padding = "20px";
  customAlert.style.position = "fixed";
  customAlert.style.top = "20%";
  customAlert.style.left = "30%";
  customAlert.style.width = "40%";
  customAlert.style.zIndex = "1000";
  customAlert.innerHTML = `
    <h3>${selectedCoursesMessage}</h3>
    <button onclick="closeCustomAlert()">Close</button>
  `;
  
  document.body.appendChild(customAlert); // Add custom alert to the page
}

// Function to close the custom alert message and refresh the page
function closeCustomAlert() {
  document.getElementById("customAlert").remove(); // Remove the custom alert
  location.reload();  // Refresh the page to start over
}

// Function to close any alert by its ID
function closeAlert(alertId) {
  document.getElementById(alertId).style.display = "none";
}
