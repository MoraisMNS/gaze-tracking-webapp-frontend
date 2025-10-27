import React from 'react';
import './Testimonials.css';
import TestimonialImageN from "../assets/testimonial-1.jpeg";
import TestimonialImageH from "../assets/testimonial-2.jpg";
import TestimonialImageM from "../assets/testimonial-3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Best HRIS I have used. Easy to use hr software",
      name: "Nirasha Morais",
      position: "",
      image: TestimonialImageN,
      rating: 4
    },
    {
      id: 2,
      quote: "Simplified HR management. Highly recommended",
      name: "Ahamed Minhaj",
      position: "Director, Cerexio Pvt Ltd",
      image: TestimonialImageM,
      rating: 5
    },
    {
      id: 3,
      quote: "Simplicity and efficiency - this is the best HRIS for sure.",
      name: "H.Neethika",
      position: "",
      image: TestimonialImageH,
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        className={`testimonial-star ${index < rating ? 'testimonial-star-filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="testimonials-main-container">
      <div className="testimonials-content-wrapper">
        <h2 className="testimonials-main-title">
          Discover what customers have said about our all-in-one HR software.
        </h2>

        <div className="testimonials-cards-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote-icon">"</div>
              <p className="testimonial-quote-text">{testimonial.quote}</p>
              
              <div className="testimonial-author-section">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-author-image"
                />
                <div className="testimonial-author-info">
                  <h4 className="testimonial-author-name">{testimonial.name}</h4>
                  {testimonial.position && (
                    <p className="testimonial-author-position">{testimonial.position}</p>
                  )}
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;