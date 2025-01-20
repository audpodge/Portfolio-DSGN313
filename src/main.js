import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const houses = [
  "./houseDrawings/Critical Analysis.png",
  "./houseDrawings/Photo Gallery.png",
];

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];


document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      01 Exquisite Corpse: Finding Perseverance and Potential within Oneself
      </div>
        <div class="three-model">
           <a href="./houseDrawings/Exquisite Corpse.png" target="_blank"> 
          <img src="./houseDrawings/Exquisite Corpse.png" id="model1" alt="Model 1 Image">
          </a>
        <div id="images-description">
          <div id="images">
           <a href="./houseDrawings/Critical Analysis.png" target="_blank">
    <img src="./houseDrawings/Critical Analysis.png" alt="Critical Analysis" />
  </a>
  <a href="./houseDrawings/Photo Gallery.png" target="_blank">
    <img src="./houseDrawings/Photo Gallery.png" alt="Photo Gallery" />
  </a>
          </div>
          <h4 id="description">This Exquisite Corpse demonstrates the pain and healing that a person can undergo to meet their full potential, which I believe is an unavoidable and necessary stage in life, as it’s recurring, and every time it happens, we grow.  
This process began through a reflection on what inspires me, leading to the topic; The negative conditions in healthcare met with the community's resilience to heal. However, I felt that this wasn’t specific to my true inspiration that was deep within my heart. This led me to reflect on my own experience in life with the healthcare system, and the pains I felt in my journey to heal during and after. This led me to the conclusion that my experience  and how I am working through it is what inspires me and what helps me to keep pushing through. This also helped me realize that this is the root of what I live for, I live to live my life to the fullest, to create happiness for myself, and hopefully, be able to see or to help create the day when people don’t have to suffer pain so deeply because of lack of support or access to their needs. I live for a world that is understanding when a difficult patch comes, where resources are accessible, and where people are left unjudged when going through a hard time.
The only way to truly grow from adversities in life is with a team of support. That is something I’ve come to fully learn in this assignment. Having trust in our support systems is the greatest gift we can provide ourselves with. Vulnerability is hard, but it’s necessary to grow, or else we’re left with heavier pains later on.
I’ve come to understand, that what is in this exquisite corpse is a world I wanted so desperately to be a part of but have fallen short for years. However, I also understand that the only person who can change that is us. I’ve felt rushed in life, leaving me to bear the pain over and over again, however, is it time that’s the pressure, or is it the pressure we put on ourselves to “get over it” and decide that there is no time when there is?
</h4>
        </div>
      </div>

      <div id="project-row">
      ${/*//  Model 2
      //   <div class="three-model">
      //     <div id="model2"></div>
      //   </div>
      //   <div id="images-description">
      //     <div id="images">
      //       ${trees
      //         .map(
      //           (trees, index) =>
      //             `<img src="${trees}" alt="tree${index + 1}" />`
      //         )
      //         .join("")}
      //     </div>
      //     <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
      //   </div>
      // </div>
      */""}
    

      <div id="project-row">
     ${/* Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li style="display:none">LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
// createThreeScene("#model2", "/3DModels/project2/tree.obj");
// createThreeScene("#model3", "/3DModels/project3/cottage.obj");
