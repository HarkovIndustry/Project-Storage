const projectContainer = document.getElementById("project-container");
const freelanceProjectContainer = document.getElementById(
  "freelance-project-container"
);

personalProjects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "col-md-4 col-6 col-lg-3 mb-4";
  card.innerHTML = `
                <div class="card shadow-lg h-100">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title text-dark">${project.title}</h5>
                        <a href="${project.file}" class="btn btn-primary">View Project</a>
                    </div>
                </div>
            `;
  projectContainer.appendChild(card);
});

freelanceProjects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "col-md-4 col-6 col-lg-3 mb-4";
  card.innerHTML = `
                <div class="card shadow-lg">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title text-dark">${project.title}</h5>
                        <a href="${project.file}" class="btn btn-primary">View Project</a>
                    </div>
                </div>
            `;
  freelanceProjectContainer.appendChild(card);
});
