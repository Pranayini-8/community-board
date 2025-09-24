import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

function App() {
  const resources = [
    {
      name: "FreeCodeCamp",
      description: "Learn coding for free with interactive lessons.",
      link: "https://www.freecodecamp.org/",
    },
    {
      name: "React Docs",
      description: "Official React documentation and tutorials.",
      link: "https://react.dev/",
    },
    {
      name: "CS50",
      description: "Harvard’s famous intro to computer science course.",
      link: "https://cs50.harvard.edu/",
    },
    {
      name: "GitHub Education",
      decription: "Free tools and resources for students.",
      link: "https://github.com/education"
    },
    {
      name: "LeetCode",
      description: "Practice coding porblems to ace interviews and improve your skills.",
      link: "https://leetcode.com"
    },
    {
      name: "GeeksforGeeks",
      description: "A computer science library for CS students.",
      link: "https://www.geeksforgeeks.org/"
    },
    {
      name: "Teach Yourself CS",
      description: "Extensive list of resources to learn coding.",
      link: "https://teachyourselfcs.com"
    },
    {
      name: "TryHackMe",
      description: "Learn cybersecurity through hands-on exercises.",
      link: "https://tryhackme.com"
    },
    {
      name: "The Odin Project",
      description: "Full stack curriculum with projects and community.",
      link: "https://www.theodinproject.com"
    },
    {
      name: "W3Schools",
      description: "Web development tutorials and references.",
      link: "https://www.w3schools.com"
    }
  ];

  return (
    <div>
      <Header title="Software Engineering Resources Board" />
      <div className="card-container">
        {resources.map((res, index) => (
          <Card
            key={index}
            name={res.name}
            description={res.description}
            link={res.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
