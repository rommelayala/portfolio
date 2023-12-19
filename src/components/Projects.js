import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Web Personal",
      description: "Mi página web personal desarrollada con React.",
    },
    {
      title: "Página de recetas de cocina",
      description: "Mi página de rectas ha sido desarrollada con React.",
    },
    {
      title: "COMING SOON - Template Cypress normal",
      description: "Template para iniciar pruebas usando Cypress",
    },
    {
      title: "COMING SOON - Template Cypress BDD",
      description: "Template para iniciar pruebas usando Cypress BDD",
    },
    {
      title: "COMING SOON - Template Selenium - python",
      description: "Template para iniciar pruebas usando Selenium - python",
    },
    {
      title: "COMING SOON - Template Selenium - python BDD",
      description: "Template para iniciar pruebas usando Selenium - python BDD",
    },
    {
        title: "COMING SOON - Template Playwright - python",
        description: "Template para iniciar pruebas usando Playwright - python",
      },
      {
        title: "COMING SOON - Template Playwright python BDD",
        description: "Template para iniciar pruebas usando Playwright python BDD",
      },
    {
      title: "COMING SOON - Web Corporativa",
      description:
        "Desarrollo de una web corporativa para [Nombre de la Empresa].",
    },
    {
      title: "COMING SOON - E-commerce",
      description:
        "Creación de una tienda en línea para la venta de productos.",
    },
    {
      title: "COMING SOON - Gestión de Citas",
      description:
        "Sistema de gestión de citas para facilitar la programación y seguimiento.",
    },
  ];

  return (
    <section>
      <h2>Proyectos</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
