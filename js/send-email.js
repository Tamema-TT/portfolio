const sendEmail = () => {
    let params = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }
    const serviceId = "service_gulew9s";
    const templateId = "template_w0a3f2e";
    emailjs.send(serviceId, templateId, params)
    .then(
        res => {
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            alert('successful');
        }
    )
    .catch((err) => console.log(err));
}