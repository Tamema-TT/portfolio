const tabActive = (content, tab) => {
    let i, allContent, allTabActive;
    allContent = document.getElementsByClassName("content"); //get all content
    for (i = 0; i < allContent.length; i++) {
        allContent[i].style.display = "none";
    }

    allTabActive = document.getElementsByClassName("tab-active"); //get the active tab
    for (i = 0; i < allTabActive.length; i++) {
        allTabActive[0].className = allTabActive[0].className.replace(" tab-active", " "); // replace the active class with empty string
    }

    document.getElementById(content).style.display = "block";
    currentTab = document.getElementById(tab);
    currentTab.classList.add('tab-active');
}    