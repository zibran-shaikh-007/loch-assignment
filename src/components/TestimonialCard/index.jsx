const TestimonialCard = ({ testimonial, index, className = "" }) => {
  return (
    <div key={index} className={`testimonial-container ${className}`}>
      <div className="testimonial-wrapper d-flex vcenter">
        <h5>{testimonial.name}</h5>
        <h6>{testimonial.title}</h6>
      </div>
      <div className="content">
        <p>{testimonial.content}</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
