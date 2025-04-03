window.onload = function () {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    document.getElementById('cd').value = `${year}-${month}-${day}`;
};

function ageCalci() {
    const dobInput = document.getElementById('dob').value;
    const cdInput = document.getElementById('cd').value;

    if (dobInput === '' || cdInput === '') {
        document.getElementById('msg').innerText = `Please Select Date Of Birth`;
        return;
    }

    document.getElementById('msg').innerText = ``;

    const dob = new Date(dobInput);
    const cd = new Date(cdInput);

    if (dob >= cd) {
        document.getElementById('msg').innerText = `Please select a valid Date of Birth`;
        return;
    }

    let age = cd.getFullYear() - dob.getFullYear();
    let month = cd.getMonth() - dob.getMonth();
    let day = cd.getDate() - dob.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    if (month < 0) {
        month = 12 + month;
    }

    if (day < 0) {
        let lastDayOfPreviousMonth = new Date(cd.getFullYear(), cd.getMonth(), 0).getDate();
        day = lastDayOfPreviousMonth + day;
        month--;
    }

    document.getElementById('msg').innerText = `Age: ${age} years, ${month} months, ${day} days`;
}
