import { useParams } from "react-router-dom";
import { newsItems } from "../NewsData";

const Newsdetail = () => {
  const { slug } = useParams();
  const news = newsItems.find((item) => item.slug === slug);

  if (!news) return <div className="pt-[4rem] text-center">News article not found.</div>;

  return (
    <div className="pt-[4rem] max-w-3xl mx-auto text-slate-700">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{news.title}</h1>
      <p className="text-sm text-slate-500 mb-4">{news.date}</p>
      <p className=" md:text-lg leading-relaxed">{news.content}</p>
    </div>
  );
};

export default Newsdetail;
