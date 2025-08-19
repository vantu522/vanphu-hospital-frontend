import { useState, useEffect } from "react";
import { getAllNews, getNewsBySlug } from "../services/client/news";

export function useNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const newsList = await getAllNews();
        setNews(newsList);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return { news, loading, error };
}

export function useNewsDetail(slug) {
      const [newDetail,setNewDetail] = useState({});
  
 
   useEffect(() => {
     const fetchNewDetail = async () => {
       try {
         const response = await getNewsBySlug(slug);
         setNewDetail(response);
         console.log(response);
       } catch (error) {
         console.error("Error fetching service details:", error);
       }
     };
     fetchNewDetail();
   }, [slug]);

    return { newDetail, loading: !newDetail, error: null };
    }