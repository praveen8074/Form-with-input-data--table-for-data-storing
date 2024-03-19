document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tableBody = document.getElementById('table-body');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Retrieve form data
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('Message').value;

        // Create table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>${message}</td>
        `;

        // Append row to table body
        tableBody.appendChild(newRow);

        // Reset form fields
        form.reset();
    });
});
