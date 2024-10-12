import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(url);
    const content = extractContent(response.data);
    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to download content' });
  }
}

function extractContent(html) {
  const $ = cheerio.load(html);
  const articleContent = $('.article-content').text(); // 根据页面结构选择正确的选择器
  return articleContent || 'Content extraction failed.';
}