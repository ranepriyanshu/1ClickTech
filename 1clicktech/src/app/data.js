// pages/index.js
import Head from "next/head";
import JobCard from "../components/JobCard";

const jobs = [
  {
    title: "Software Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    description:
      "Join our team as a Software Engineer and work on cutting-edge projects.",
    applyLink: "#",
  },
  {
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "New York, NY",
    description: "Lead our product development team and drive innovation.",
    applyLink: "#",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Board</title>
        <meta name="description" content="A job board application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
}
