import { useEffect, useState } from "react";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) throw new Error("Failed to fetch jobs.");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Careers at Yellow Mountain</h1>
      

      {loading ? (
        <p className="text-gray-500">Loading jobs...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : jobs.length === 0 ? (
        <p className="text-gray-600">No job openings currently.</p>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="border border-gray-300 rounded-xl p-4 hover:shadow transition">
      <h2 className="text-2xl font-semibold">{job.title}</h2>
      <p className="text-gray-700 mt-1">{job.location}</p>
      <p className="text-sm text-gray-500 mt-1 capitalize">{job.job_type}</p>
      <p className="mt-3">{job.description.slice(0, 150)}...</p>
      <a
        href={`/careers/${job.id}`}
        className="text-blue-600 mt-4 inline-block"
      >
        View Details →
      </a>
    </div>
  );
}
