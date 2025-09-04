import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = 'aebf21c727de4a519852d1630aecc6d7';
    const url = ` https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
   
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SpecialtyModule/1.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform the data to match our interface
    const articles = data.articles.map((article: any) => ({
      title: article.title,
      description: article.description || 'No description available',
      urlToImage: article.urlToImage || 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg',
      url: article.url
    }));
    
    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}