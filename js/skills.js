// programming languages 
const plContainer = document.getElementById('progLanContainer');
const progLanguages = [
    {name: 'Javascript', perc: 90},
    {name: 'Python', perc: 88},
    {name: 'C++', perc: 85},
    {name: 'C', perc: 80},
    {name: 'Java', perc: 75},
]

// front-end skills
const feContainer = document.getElementById('frontEndContainer');
const frontEnd = [
    {name: 'HTML', perc: 95},
    {name: 'CSS', perc: 88},
    {name: 'Bootstrap', perc: 85},
    {name: 'Tailwind CSS', perc: 80},
    {name: 'React.js', perc: 80},
    {name: 'Daisy UI', perc: 75},
    {name: 'Material UI', perc: 65},
]

// back-end skills
const beContainer = document.getElementById('backEndContainer');
const backEnd = [
    {name: 'MySQL', perc: 80},
    {name: 'Firebase', perc: 70},
    {name: 'MongoDB', perc: 50},
    {name: 'Django', perc: 50},
    {name: 'Node.js', perc: 35},
    {name: 'Express.js', perc: 35},
]

const displaySkills = (backEnd, beContainer) => {
    backEnd.forEach(language => {
        const div = document.createElement('div');
        div.classList.add('flex', 'flex-col', 'mb-4');
        div.innerHTML = `
            <div class="relative flex justify-between" style="width: ${language.perc}%">
                <h3>${language.name}</h3>
                <h3>${language.perc}%</h3>
            </div>
            <div class="bg-base-100 rounded-full h-2.5">
                <div class="bg-gradient-to-l from-[#BB73E0] to-[#FF8DDB] h-2.5 rounded-full" style="width: ${language.perc}%"></div>
            </div>
        `
        beContainer.appendChild(div);
    });
}
displaySkills(progLanguages, plContainer);
displaySkills(frontEnd, feContainer);
displaySkills(backEnd, beContainer);