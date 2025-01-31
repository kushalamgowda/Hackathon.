function showMaintenanceMessage() {
    alert('Server is under maintenance.');
}

function markAttendance(button, type) {
    let count = parseInt(button.textContent.match(/\d+/)[0]);
    if (type === 'present') {
        count++;
        button.innerHTML = `🔥 ${count}`;
    } else if (type === 'absent') {
        count++;
        button.innerHTML = `💧 ${count}`;
    } else if (type === 'cancelled') {
        count++;
        button.innerHTML = `🚫 ${count}`;
    }
    updatePercentage(button.parentElement.parentElement);
}

function updatePercentage(row) {
    const presentCount = parseInt(row.querySelector('.present').textContent.match(/\d+/)[0]);
    const absentCount = parseInt(row.querySelector('.absent').textContent.match(/\d+/)[0]);
    const total = presentCount + absentCount;
    const percentage = (total === 0) ? 0 : (presentCount / total) * 100;
    row.cells[4].textContent = `${percentage.toFixed(2)}%`;
}

function addSubject() {
    const table = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>Subject - ${table.rows.length}</td>
        <td><button class="present" onclick="markAttendance(this, 'present')">🔥 0</button></td>
        <td><button class="absent" onclick="markAttendance(this, 'absent')">💧 0</button></td>
        <td><button class="cancelled" onclick="markAttendance(this, 'cancelled')">🚫 0</button></td>
        <td>0%</td>
    `;
}

function navigate(page) {
    alert(`Navigating to ${page} page (functionality not implemented).`);
}
