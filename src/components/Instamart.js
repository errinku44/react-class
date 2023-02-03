import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <button
        className="cursor-pointer underline"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum efficitur dolor, id tempor nulla blandit a. Proin pharetra ipsum sed massa congue, eu viverra quam pharetra. Integer commodo elit ac elit facilisis, a varius ante dapibus. Sed vel rutrum velit. Aliquam erat volutpat. Sed faucibus velit id malesuada viverra. Nam eget congue sem. Nunc eget pharetra ante. Sed eleifend, sem id tincidunt dictum, ligula sapien vestibulum sem, at blandit est justo id nunc. Aenean tristique interdum nisi, vitae convallis magna fringilla eu."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(visible) =>
          visible ? setVisibleSection("about") : setVisibleSection("")
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum efficitur dolor, id tempor nulla blandit a. Proin pharetra ipsum sed massa congue, eu viverra quam pharetra. Integer commodo elit ac elit facilisis, a varius ante dapibus. Sed vel rutrum velit. Aliquam erat volutpat. Sed faucibus velit id malesuada viverra. Nam eget congue sem. Nunc eget pharetra ante. Sed eleifend, sem id tincidunt dictum, ligula sapien vestibulum sem, at blandit est justo id nunc. Aenean tristique interdum nisi, vitae convallis magna fringilla eu."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(visible) =>
          visible ? setVisibleSection("team") : setVisibleSection("")
        }
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum efficitur dolor, id tempor nulla blandit a. Proin pharetra ipsum sed massa congue, eu viverra quam pharetra. Integer commodo elit ac elit facilisis, a varius ante dapibus. Sed vel rutrum velit. Aliquam erat volutpat. Sed faucibus velit id malesuada viverra. Nam eget congue sem. Nunc eget pharetra ante. Sed eleifend, sem id tincidunt dictum, ligula sapien vestibulum sem, at blandit est justo id nunc. Aenean tristique interdum nisi, vitae convallis magna fringilla eu."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={(visible) =>
          visible ? setVisibleSection("career") : setVisibleSection("")
        }
      />
    </div>
  );
};

export default Instamart;
