import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    date: "10.01.2026",
  },
  {
    id: 2,
    name: "Marcus Weber",
    date: "10.01.2026",
  },
  {
    id: 3,
    name: "Emma Thompson",
    date: "10.01.2026",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <div>
          <p className="testimonial-subtitle">What Our Customers Say</p>
          <h2>Customer <span>Testimonials</span></h2>
        </div>

        <div className="testimonial-arrows">
          <ArrowLeft size={20} />
          <ArrowRight size={20} />
        </div>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <Quote className="quote-icon" size={30} />

            <span className="buyer-type">Authenticated Buyer</span>

            <p className="testimonial-text">
              Everything fit perfectly and the quality exceeded my expectations.
              The layout is smart, the storage is practical, and installation was
              straightforward. It genuinely transformed our van into a comfortable
              home on wheels.
            </p>

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#3BB77E" stroke="#3BB77E" />
              ))}
            </div>

            <div className="testimonial-user">
              <div className="avatar"></div>
              <div>
                <h4>{item.name}</h4>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;