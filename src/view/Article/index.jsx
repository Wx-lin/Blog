import { fetchArticle } from '@/utils/index.js';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { useLocation } from 'react-router-dom';

export default function index() {
  const {
    state: { path },
  } = useLocation();

  const [article, setArticle] = useState(null);

  const fetchData = async () => {
    const data = await fetchArticle(`/article${path}.md`);
    setArticle(data);
  };

  useEffect(() => {
    fetchData();
  }, [article]);
  return (
    <>
      <div>
        <Markdown remarkPlugins={[remarkGfm]}>{article}</Markdown>
      </div>
    </>
  );
}
