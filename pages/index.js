import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/download?url=${encodeURIComponent(url)}`);
  };

  return (
    <div>
      <h1>CSDN Downloader</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="Enter CSDN article URL" 
          required
        />
        <button type="submit">Download</button>
      </form>
    </div>
  );
}