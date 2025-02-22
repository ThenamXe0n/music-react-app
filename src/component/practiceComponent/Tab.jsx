import React, { useState } from "react";

const TabDetailsSection = ({ poster, title, desc }) => {
  return (
    <section className="flex flex-col">
      <div className="size-96 border-2 mx-auto my-4">
        <img className="h-full w-full object-cover" src={poster} alt={title} />
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center">{title}</h1>
        <p className="mt-6 p-2 text-xl">{desc}</p>
      </div>
    </section>
  );
};

const Tab = () => {
  const [activeTab, setActiveTab] = useState("html");
  let buttonClassTale =
    "border-2 border-black px-3 py-1 m-1 rounded-md shadow-lg hover:bg-black hover:text-white";

  return (
    <>
      <section>
        <div>
          <button
            onClick={() => {
              setActiveTab("html");
            }}
            className={buttonClassTale}
          >
            HTML
          </button>
          <button
            onClick={() => {
              setActiveTab("css");
            }}
            className={buttonClassTale}
          >
            CSS
          </button>
          <button
            onClick={() => {
              setActiveTab("js");
            }}
            className={buttonClassTale}
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              setActiveTab("react");
            }}
            className={buttonClassTale}
          >
            React JS
          </button>
        </div>
      </section>
      {activeTab === "html" && (
        <TabDetailsSection
          poster={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllD5B1xwxphMWJUxqbzy1wd8SBxREBV8G2g&s"
          }
          title={"Hypertext Markup Language"}
          desc={
            "HyperText Markup Language (HTML) is a language used to create web pages. It's the basic building block of the web, and is used to define the structure and meaning of web content. "
          }
        />
      )}
      {activeTab === "css" && (
        <TabDetailsSection
          poster={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUnkx4dalEXbsKTRFgr-Umd7vnc9Ji1ZuLA&s"
          }
          title={"Casscading style Sheet"}
          desc={"kjhkjhkjhdkjhfkjhfkjhsjkfhsjkh"}
        />
      )}
      {activeTab === "js" && (
        <TabDetailsSection
          poster={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gAQnBGubiXmUpsjEWp60PRgeS3AnGMPtDw&s"
          }
          title={"JavaScript"}
          desc={"lsjfkhsdjkfhjk kjfkjhdjkhfjkhshfhfkj"}
        />
      )}
    </>
  );
};

export default Tab;
