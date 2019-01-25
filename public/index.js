const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")
const submissionSuccessDisplayNode = document.getElementById("submission-status");

userCreateSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const zipCode = document.querySelector('input[name="zip-code"]').value;
    const mobileNumber = document.querySelector('input[name="mobile-number"]').value;
    const socialMedia = document.querySelector('input[name="social-profile"]').value;
   
    const preferredCommMethod = document.querySelector('input[name=preferred-contact-method-selector]:checked').value;
  
    const userDevices = Array.from(document.querySelectorAll('input[name=user-devices]:checked')).map(box => box.value);

    const userType = (() => {
        const userTypeSelect = document.getElementById('user-type');
        return userTypeSelect[userTypeSelect.selectedIndex].value;
    })();

    const favColor = document.getElementById('fav-color').value;

    const User = {
        username,
        email,
        zipCode,
        mobileNumber,
        socialMedia,
        preferredCommMethod,
        userDevices,
        userType,
        favColor
    };

    const jsonUser = JSON.stringify(User);

    fetch('/api/user/', {
            method: "POST",
            headers: {
                'Content-Type': "application/json; charset=utf-8"
            },
            body: jsonUser
        }).then(response => {
            // console.log(response);
            if (response.status == 201) {
                console.log("successfully added");
                const successText = document.createTextNode('user successfully added!');
                submissionSuccessDisplayNode.innerHTML = "";
                submissionSuccessDisplayNode.appendChild(successText);
            } else if (response.status == 409) {
                console.log('username already in use');
                const failureText = document.createTextNode('error -- user name already in use');
                submissionSuccessDisplayNode.innerHTML = '';
                submissionSuccessDisplayNode.appendChild(failureText);
            }
            return response.json();
        })
        .then(responseObject => {
            console.log("response:\n", responseObject);
        });
});