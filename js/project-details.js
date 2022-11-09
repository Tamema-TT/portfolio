const details = [
    {
        name: "sunshine",
        features: [ "HTML", "Bootstrap", "Custom CSS", "Font Awesome Icons" ],
        images: [ "/images/e-commerce-bootstrap.jpg" ]
    },
    {
        name: "notelify",
        features: [ "React", "Material UI", "Font Awesome Icons", "React Router DOM", "Styled-Components" ],
        images: [ "/images/notelify-1.jpg" ]
    },
    {
        name: "joChef",
        features: [ "React", "React Redux", "React Router DOM", "Daisy UI", "Font Awesome Icons" ],
        images: [ "/images/jo-chef-react.jpg" ]
    },
    {
        name: "closetMania",
        features: [ "React", "React Router DOM", "Firebase Athetication", "Custom CSS", "Font Awesome Icons", "Material UI Icons" ],
        images: [ "/images/e-commerce-react-vanilla.jpg" ]
    },
    {
        name: "calculator",
        features: [ "JavaScript", "Tailwind CSS" ],
        images: [ "/images/calculator-js.jpg" ]
    },
    {
        name: "banking",
        features: [ "JavaScript", "Tailwind CSS" ],
        images: [ "/images/bank-js.jpg" ]
    },
    {
        name: "expenseCalc",
        features: [ "JavaScript", "Tailwind CSS", "Font Awesome Icons" ],
        images: [ "/images/expense-calculator-js.jpg" ]
    },

];
const detailsSection = document.getElementById('details-section');
const displayDetails = projectName => {
    closeDetails(true);
    details.forEach(detail => {
        if(projectName === detail.name)
        {
            detailsSection.innerHTML = `
                <div class="card card-side grid grid-cols-3 bg-base-100 shadow-xl">
                    <figure class="col-span-2"><img src=${detail.images[0]} alt="Movie"/></figure>
                    <div class="card-body">
                        <button onclick="closeDetails(false)" class="btn text-error w-16 ml-auto bg-base-100 border-0">
                            <i class="fa-solid text-xl fa-xmark"></i>
                        </button>
                        <div id="div-features" class="my-auto">
                            <h3 class="text-xl">Features:</h3>
                        </div>
                    </div>
                </div>
            `
            const featuresDiv = document.getElementById('div-features');
            const ul = document.createElement('ul');
            detail.features.forEach(feature => {
                const li = document.createElement('li');
                li.classList.add("flex", "items-center");
                li.innerHTML = `
                    <i class="fa-regular fa-circle-check text-green-500 mr-4"></i>
                    <p class="text-lg">${feature}</p>
                `;
                ul.appendChild(li);
            });
            featuresDiv.appendChild(ul);
        }
    });
}
const closeDetails = (open) => {
    if(open) {
        detailsSection.classList.remove("hidden");
        detailsSection.classList.add("block");
    }
    else {
        detailsSection.classList.add("hidden");
        detailsSection.classList.remove("block");
    }
}