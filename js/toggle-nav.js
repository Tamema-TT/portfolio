const toggleNav = e => {
    let listContainer = document.getElementById('show-nav');
    e.name === 'burger'
    ?
    ( e.name = 'close', listContainer.classList.remove('hidden'), listContainer.classList.add('block', 'mt-6', 'ml-auto'))
    : (e.name = 'burger', listContainer.classList.remove('block'), listContainer.classList.add('hidden'))
}