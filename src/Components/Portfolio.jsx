/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop_2.jpg";

const imageAltText = "Microsoft Surface laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "3D Eclipse Teacher",
    description:
      "Made in a 2-day NASA Space Apps Hackathon. Our task was to explain how eclipse happens. We made a webapp that tracks orbit of the moon around the Sun",
    url: "https://github.com/Ashhad-A-Kamran/Eclipse-3D-Model.git",
    
  },
  {
    title: "EaseFinance - A Debt Recorder & Calculator",
    description:
      "A C-lang based program created by me, which records the debt and calculates the amount a person owns to the rest of the people in the group",
    url: "https://github.com/Ashhad-A-Kamran/EaseFinance.git",
  },
  {
    title: "Hajj & Umrah Budget Calculator",
    description:
      "Made in a 2-day Sastaticet Hackathon-2023 with my team, a budget guide which suggests best flights and hotels for accomodation to reduce your budget",
    url: "https://github.com/Ashhad-A-Kamran/Budgetier-Hajj-and-Umrah-Financing.git",
  },
  {
    title: "Area and Circumference Calculator",
    description:
      "I created an area and circumference Calculator(for circle, obviously) when I was in 1st semester. It is a C language code, which I uploaded just to get used to Github",
    url: "https://github.com/Ashhad-A-Kamran/Area-and-Circumference-Calculator.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
