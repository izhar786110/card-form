document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('formContainer');
    const displayContainer = document.getElementById('displayContainer');
    const displayData = document.getElementById('displayData');
    const editButton = document.getElementById('editButton');
    const deleteButton = document.getElementById('deleteButton');

    let formData = JSON.parse(localStorage.getItem('formData')) || {};

    if (Object.keys(formData).length > 0) {
        showDisplayContainer();
    }

    document.getElementById('aadharForm').addEventListener('submit', function (e) {
        e.preventDefault();

        formData = {
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            country: document.getElementById('country').value,
            phone: document.getElementById('phone').value,
            state: document.getElementById('state').value,
            city: document.getElementById('city').value,
            village: document.getElementById('village').value,
            pin: document.getElementById('pin').value,
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        showDisplayContainer();
    });

    editButton.addEventListener('click', function () {
        displayContainer.style.display = 'none';
        formContainer.style.display = 'block';

        document.getElementById('fname').value = formData.fname;
        document.getElementById('lname').value = formData.lname;
        document.getElementById('country').value = formData.country;
        document.getElementById('phone').value = formData.phone;
        document.getElementById('state').value = formData.state;
        document.getElementById('city').value = formData.city;
        document.getElementById('village').value = formData.village;
        document.getElementById('pin').value = formData.pin;
    });

    deleteButton.addEventListener('click', function () {
        localStorage.removeItem('formData');

        formData = {};

        displayContainer.style.display = 'none';
        formContainer.style.display = 'block';

        document.getElementById('aadharForm').reset();
    });

    function showDisplayContainer() {
        displayData.innerHTML = `
            <p><strong>First Name:</strong> ${formData.fname}</p>
            <p><strong>Last Name:</strong> ${formData.lname}</p>
            <p><strong>Country:</strong> ${formData.country}</p>
            <p><strong>Phone no.:</strong> ${formData.phone}</p>
            <p><strong>State:</strong> ${formData.state}</p>
            <p><strong>City:</strong> ${formData.city}</p>
            <p><strong>Village:</strong> ${formData.village}</p>
            <p><strong>PIN code:</strong> ${formData.pin}</p>
        `;

        formContainer.style.display = 'none';
        displayContainer.style.display = 'block';
    }
});