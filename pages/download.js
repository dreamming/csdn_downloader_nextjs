import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Download() {
  const router = useRouter();
  const { url } = router.query;
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      fetch(`/api/download?url=${url}`)
        .then((res) => res.json())
        .then((data) => {
          setContent(data.content);
          setLoading(false);
        })
        .catch(() => {
          setContent('Failed to download content.');
          setLoading(false);
        });
    }
  }, [url]);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>Downloaded Content</h1>
      <pre>{content}</pre>
    </div>
  );
}