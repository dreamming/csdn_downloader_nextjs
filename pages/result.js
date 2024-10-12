import { useRouter } from 'next/router';

export default function Result() {
  const router = useRouter();
  const { content } = router.query;

  return (
    <div>
      <h1>Downloaded Content</h1>
      <pre>{content}</pre>
    </div>
  );
}