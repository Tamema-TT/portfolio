const tabActive = (content, tab) => {
    let i, allContent, allTabActive, allTabText;
    allContent = document.getElementsByClassName("content"); //get all content
    for (i = 0; i < allContent.length; i++) {
        allContent[i].style.display = "none";
    }

    allTabActive = document.getElementsByClassName("tab-active"); //get the active tab
    for (i = 0; i < allTabActive.length; i++) {
        console.log('in')
        allTabActive[0].className = allTabActive[0].className.replace(" tab-active", " "); // replace the active class with empty string
    }

    document.getElementById(content).style.display = "block";
    currentTab = document.getElementById(tab);
    currentTab.classList.add('tab-active');
}

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
            console.log(res);
            alert('successful');
        }
    )
    .catch((err) => console.log(err));
}

const toggleNav = e => {
    let listContainer = document.getElementById('show-nav');
    let list = document.querySelector('ul');
    console.log(list);
    e.name === 'burger'
    ?
    ( e.name = 'close', listContainer.classList.remove('hidden'), listContainer.classList.add('block', 'mt-6', 'ml-auto'))
    : (e.name = 'burger', listContainer.classList.remove('block'), listContainer.classList.add('hidden'))
}
    