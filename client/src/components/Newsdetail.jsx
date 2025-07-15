import { useParams, useNavigate } from "react-router-dom";
import { newsItems } from "../NewsData";
import Footer from "./Footer";

const Newsdetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const currentIndex = newsItems.findIndex((item) => item.slug === slug);
  const news = newsItems[currentIndex];

  if (!news) {
    return <div className="pt-[4rem] text-center">News article not found.</div>;
  }

  // Calculate previous and next indices
  const prevNews = newsItems[currentIndex - 1];
  const nextNews = newsItems[currentIndex + 1];

  return (
    <div className="bg-slate-100">
    <div className="pt-[4rem] max-w-3/4 mx-auto px-4 text-slate-700">
      <h1 className="text-2xl md:text-5xl font-medium mb-4">{news.title}</h1>
      <p className="text-sm text-slate-500 mb-4">{news.date}</p>
      <p className="md:text-xl leading-relaxed text-slate-500 mb-8">{news.content}</p>

      <div className="flex justify-between">
        {/* Previous Button */}
        {prevNews ? (
          <button
            onClick={() => navigate(`/news/${prevNews.slug}`)}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg text-sm font-medium"
          >
            ← Previous
          </button>
        ) : <div />}  {/* Empty div to keep spacing if no previous */}

        {/* Next Button */}
        {nextNews ? (
          <button
            onClick={() => navigate(`/news/${nextNews.slug}`)}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg text-sm font-medium"
          >
            Next →
          </button>
        ) : <div />} {/* Empty div to keep spacing if no next */}
      </div>
     
    </div>
    <hr className="w-4/5 mx-auto text-slate-500 mt-4"></hr>
     <Footer/>
     </div>
  );
};

export default Newsdetail;
