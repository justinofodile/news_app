import axios from "axios";
import "../../src/App.css";
import { useEffect, useState } from "react";
import { newsBaseUrl } from "../utils/helper";

import NewsCard from "../components/NewsCard";

function NewList({ category }) {
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  // console.log(NEWS_API_KEY);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    const options = {
      params: {
        category: category,
        language: "en",
        country: "ng",
        sort: "top",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": NEWS_API_KEY,
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(`${newsBaseUrl}/category`, options);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  // console.log(data);

  return (
    <section className="max-w-4xl mx-auto mt-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <NewsCard key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default NewList;
