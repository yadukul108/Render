import { Link } from 'react-router-dom';
import Private from "../assets/PrivateBanking.jpeg"
const caseStudies = [
  {
    id: 1,
    image: Private,
    title: 'Strategic Acquisition in Healthcare',
    summary: 'Advised on a cross-border acquisition to expand market presence in Southeast Asia.',
  },
  {
    id: 2,
    image: Private,   title: 'Growth Capital for MedTech Startup',
    summary: 'Secured Series B funding for a high-growth medical device company.',
  },
  {
    id: 3,
    image: Private,   title: 'Debt Restructuring for PharmaCorp',
    summary: 'Designed and executed a debt restructuring strategy, improving long-term sustainability.',
  },
];

const CaseStudies= () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-slate-100 text-slate-700">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Case Studies</h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Explore how Allegro Advisors has partnered with clients to deliver strategic outcomes
          through deep financial insight and tailored solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-white rounded-lg shadow-md overflow-hidden w-80 transform transition hover:scale-105 hover:shadow-lg"
          >
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-slate-700 mb-2">
                {study.title}
              </h3>
              <p className="text-sm text-gray-600">{study.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          to="/case-studies"
          className="text-white text-md font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition duration-300 shadow-md"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default CaseStudies;
