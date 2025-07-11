import { Briefcase, BarChart3, Users } from 'lucide-react';

const cards = [
  {
    icon: Briefcase,
    title: "Expertise",
    description:
      "Our team of seasoned professionals brings deep industry knowledge and financial acumen to every engagement.",
  },
  {
    icon: BarChart3,
    title: "Global Reach",
    description:
      "With a presence in key financial hubs worldwide, we offer seamless cross-border solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "We prioritize our clients' success, tailoring our services to their unique goals and objectives.",
  },
];

const Cards = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700"
            >
              <card.icon className="h-8 w-8 text-red-600 group-hover:text-white mb-4" />
              <p className="text-[1rem] md:text-lg font-medium text-slate-600 group-hover:text-white mb-2">
                {card.title}
              </p>
              <p className="text-sm text-slate-500 group-hover:text-white">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
