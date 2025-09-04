'use client';

import { useState, useEffect } from 'react';
import './SpecialtySection.css';

interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

const SpecialtySection = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setArticles(data.articles);
      } catch (err) {
        setError('Failed to load business news');
        console.error('Error fetching news:', err);
        
        // Fallback data in case API fails
        const fallbackArticles: NewsArticle[] = [
          {
            title: "Augmented Reality",
            description: "We hava the batter team to dovelop all! kind of augmented reaity designs and Lakes the experience to other leval",
            urlToImage: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
            url: "#"
          },
          {
            title: "Quick Responset",
            description: "Anylime you want to talk we are going to be thera tor you",
            urlToImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
            url: "#"
          },
          {
            title: "Great Communication",
            description: "We maintain 24/7 communication to cover all your need for the project",
            urlToImage: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
            url: "#"
          }
        ];
        setArticles(fallbackArticles);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, articles.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, articles.length - 5) : prev - 1
    );
  };

  const getVisibleArticles = () => {
    if (articles.length === 0) return [];
    
    const visible = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % articles.length;
      visible.push(articles[index]);
    }
    return visible;
  };

  if (loading) {
    return (
      <section className="specialty-section">
        <div className="specialty-container">
          <h2 className="specialty-title">What is the <br /> <strong>Specialty Of Us?</strong></h2>
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading latest business news...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || articles.length === 0) {
    return (
      <section className="specialty-section">
        <div className="specialty-container">
          <h2 className="specialty-title">What is the <br /> <strong>Specialty Of Us?</strong></h2>
          <div className="error-state">
            <p>Unable to load content at the moment. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  const visibleArticles = getVisibleArticles();

  return (
    <section className="specialty-section">
      <div className="specialty-container">
        <h2 className="specialty-title">What is the <br /> <strong>Specialty Of Us?</strong></h2>
        
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <div className="carousel-track">
              {visibleArticles.map((article, index) => (
                <div key={`${currentIndex}-${index}`} className="specialty-card">
                  <div className="card-image-container">
                    <img 
                      src={article.urlToImage} 
                      alt={article.title}
                      className="card-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg';
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">
                      {article.title.length > 60 
                        ? `${article.title.substring(0, 57)}...` 
                        : article.title
                      }
                    </h3>
                    <p className="card-description">
                      {article.description.length > 120 
                        ? `${article.description.substring(0, 117)}...` 
                        : article.description
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-controls">
            <button 
              className="carousel-btn carousel-btn-prev" 
              onClick={prevSlide}
              disabled={articles.length <= 5}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            
            <button 
              className="carousel-btn carousel-btn-next" 
              onClick={nextSlide}
              disabled={articles.length <= 5}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;