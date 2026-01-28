import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./Components/card.jsx";

const App = () => {
  const job = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaMIJQv0EQ4dCa0lKWFaz2GoUGlacdGx43HCGoXolTUlhZrnw4X_U_7afK5cBfJT1t2m9BXqdBokjjpMouMowyBDtt4XIPbcJwOmH3uJhmKg&s=10",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 55,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 42,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 weeks ago",
      post: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: 80,
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "10 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 90,
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/linkedin.com",
      companyName: "LinkedIn",
      datePosted: "2 days ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 50,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 65,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "5 weeks ago",
      post: "Product Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 48,
      location: "Noida, India",
    },
  ];
  return (
    <div className="parent">
      {job.map(function (empl) {
        return (
          <Card
            company={empl.companyName}
            datePosted={empl.datePosted}
            post={empl.post}
            logo={empl.brandLogo}
            tag1={empl.tag1}
            tag2={empl.tag2}
            pay={empl.pay}
            location={empl.location}
          />
        );
      })}
    </div>
  );
};

export default App;
