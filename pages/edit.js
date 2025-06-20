import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";

// Data
import yourData from "../data/portfolio.json";

const Edit = () => {
  // states
  const [data, setData] = useState(yourData);
  const [currentTabs, setCurrentTabs] = useState("HEADER");

  const saveData = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  // Project Handler
  const editProjects = (projectIndex, editProject) => {
    let copyProjects = data.projects;
    copyProjects[projectIndex] = { ...editProject };
    setData({ ...data, projects: copyProjects });
  };

  const addProject = () => {
    setData({
      ...data,
      projects: [
        ...data.projects,
        {
          id: uuidv4(),
          title: "New Project",
          description: "Web Design & Development",
          imageSrc:
            "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",

          url: "your url",
        },
      ],
    });
  };

  const deleteProject = (id) => {
    const copyProjects = data.projects;
    copyProjects = copyProjects.filter((project) => project.id !== id);
    setData({ ...data, projects: copyProjects });
  };

  // Services Handler

  const editServices = (serviceIndex, editService) => {
    let copyServices = data.services;
    copyServices[serviceIndex] = { ...editService };
    setData({ ...data, services: copyServices });
  };

  const addService = () => {
    setData({
      ...data,
      services: [
        ...data.services,
        {
          id: uuidv4(),
          title: "New Service",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
      ],
    });
  };

  const deleteService = (id) => {
    const copyServices = data.services;
    copyServices = copyServices.filter((service) => service.id !== id);
    setData({ ...data, services: copyServices });
  };

  // Socials Handler

  const editSocials = (socialIndex, editSocial) => {
    let copySocials = data.socials;
    copySocials[socialIndex] = { ...editSocial };
    setData({ ...data, socials: copySocials });
  };

  const addSocials = () => {
    setData({
      ...data,
      socials: [
        ...data.socials,
        {
          id: uuidv4(),
          title: "New Link",
          link: "url here",
        },
      ],
    });
  };

  const deleteSocials = (id) => {
    const copySocials = data.socials;
    copySocials = copySocials.filter((social) => social.id !== id);
    setData({ ...data, socials: copySocials });
  };

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="mt-10">
        <div className="bg-white z-10 sticky top-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl">Dashboard</h1>
            <div className="flex items-center">
              <Button onClick={saveData} type="primary">
                Save
              </Button>
            </div>
          </div>

          <div className="flex items-center">
            <Button
              onClick={() => setCurrentTabs("HEADER")}
              type={currentTabs === "HEADER" && "primary"}
            >
              Header
            </Button>
            <Button
              onClick={() => setCurrentTabs("PROJECTS")}
              type={currentTabs === "PROJECTS" && "primary"}
            >
              Projects
            </Button>
            <Button
              onClick={() => setCurrentTabs("SERVICES")}
              type={currentTabs === "SERVICES" && "primary"}
            >
              Services
            </Button>
            <Button
              onClick={() => setCurrentTabs("ABOUT")}
              type={currentTabs === "ABOUT" && "primary"}
            >
              About
            </Button>
            <Button
              onClick={() => setCurrentTabs("SOCIAL")}
              type={currentTabs === "SOCIAL" && "primary"}
            >
              Social
            </Button>
          </div>
        </div>
        {/* HEADER */}
        {currentTabs === "HEADER" && (
          <div className="mt-10">
            <div className="flex items-center">
              <label className="w-1/5 text-lg opacity-50">Name</label>
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-sx opacity-50">
                Header Tagline One
              </label>
              <input
                value={data.headerTaglineOne}
                onChange={(e) =>
                  setData({ ...data, headerTaglineOne: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">
                Header Tagline Two
              </label>
              <input
                value={data.headerTaglineTwo}
                onChange={(e) =>
                  setData({ ...data, headerTaglineTwo: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">
                Header Tagline Three
              </label>
              <input
                value={data.headerTaglineThree}
                onChange={(e) =>
                  setData({ ...data, headerTaglineThree: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">
                Header Tagline Four
              </label>
              <input
                value={data.headerTaglineFour}
                onChange={(e) =>
                  setData({ ...data, headerTaglineFour: e.target.value })
                }
                className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                type="text"
              ></input>
            </div>
            <div className="mt-5 flex items-center">
              <label className="w-1/5 text-lg opacity-50">Blog</label>
              <div className="w-4/5 ml-10 flex items-center">
                <Button
                  onClick={() => setData({ ...data, showBlog: true })}
                  type={data.showBlog && "primary"}
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setData({ ...data, showBlog: false })}
                  classes={
                    !data.showBlog && "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  No
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* PROJECTS */}
        {currentTabs === "PROJECTS" && (
          <>
            <div className="mt-10">
              {data.projects.map((project, index) => (
                <div className="mt-10" key={project.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{project.title}</h1>
                    <Button
                      onClick={() => deleteProject(project.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>

                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Title</label>
                    <input
                      value={project.title}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          title: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">
                      Description
                    </label>
                    <input
                      value={project.description}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          description: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">
                      Image Source
                    </label>
                    <input
                      value={project.imageSrc}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          imageSrc: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-2">
                    <label className="w-1/5 text-lg opacity-50">url</label>
                    <input
                      value={project.url}
                      onChange={(e) =>
                        editProjects(index, {
                          ...project,
                          url: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <hr className="my-10"></hr>
                </div>
              ))}
            </div>

            <div className="my-10">
              <Button onClick={addProject} type="primary">
                Add Project +
              </Button>
            </div>
          </>
        )}
        {/* SERVICES */}
        {currentTabs === "SERVICES" && (
          <>
            <div className="mt-10">
              {data.services.map((service, index) => (
                <div key={service.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{service.title}</h1>
                    <Button
                      onClick={() => deleteService(service.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Title</label>
                    <input
                      value={service.title}
                      onChange={(e) =>
                        editServices(index, {
                          ...service,
                          title: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">
                      Description
                    </label>
                    <textarea
                      value={service.description}
                      onChange={(e) =>
                        editServices(index, {
                          ...service,
                          description: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                    ></textarea>
                  </div>
                  <hr className="my-10"></hr>
                </div>
              ))}
            </div>
            <div className="my-10">
              <Button onClick={addService} type="primary">
                Add Service +
              </Button>
            </div>
          </>
        )}
        {currentTabs === "ABOUT" && (
          <div className="mt-10">
            <h1 className="text-2xl">About</h1>
            <textarea
              className="w-full h-96 mt-10 p-2 rounded-md shadow-md border"
              value={data.aboutpara}
              onChange={(e) => setData({ ...data, aboutpara: e.target.value })}
            ></textarea>
          </div>
        )}
        {currentTabs === "SOCIAL" && (
          <div className="mt-10">
            {data.socials.map((social, index) => (
              <>
                <div key={social.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{social.title}</h1>
                    <Button
                      onClick={() => deleteSocials(social.id)}
                      type="primary"
                    >
                      Delete
                    </Button>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Title</label>
                    <input
                      value={social.title}
                      onChange={(e) =>
                        editSocials(index, {
                          ...social,
                          title: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex items-center mt-5">
                    <label className="w-1/5 text-lg opacity-50">Link</label>
                    <input
                      value={social.link}
                      onChange={(e) =>
                        editSocials(index, {
                          ...service,
                          link: e.target.value,
                        })
                      }
                      className="w-4/5 ml-10 p-2 rounded-md shadow-lg border-2"
                      type="text"
                    />
                  </div>
                  <hr className="my-10"></hr>
                </div>
              </>
            ))}
            <div className="my-10">
              <Button onClick={addSocials} type="primary">
                Add Social +
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
