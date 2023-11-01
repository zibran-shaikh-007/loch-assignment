import DragDropCarousel from "components/DragDropCarousel";
import TestimonialCard from "components/TestimonialCard";
import { testimonials} from "data";

const TestimonialPreview = () => {
  return (
    <div className="testimonialPreview-container">
      {testimonials.length > 0 && (
        <DragDropCarousel
          data={testimonials}
          cardRender={(testimonial, i) => {
            return <TestimonialCard testimonial={testimonial} index={i} />;
          }}
        />
      )}
    </div>
  );
};

export default TestimonialPreview;
