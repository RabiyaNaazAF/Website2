import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    content: "AJ Groups transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. Our dream home was completed on time and exceeded all expectations.",
    rating: 5,
    project: "Luxury Villa in Bangalore"
  },
  {
    name: "Priya Sharma",
    role: "Real Estate Investor",
    content: "Professional, reliable, and innovative. AJ Groups helped us acquire premium properties and their market insights are invaluable. Best real estate consultants in Karnataka.",
    rating: 5,
    project: "Commercial Property Investment"
  },
  {
    name: "Anand Reddy",
    role: "Business Owner",
    content: "Our commercial complex was delivered with exceptional quality. The architectural design is modern yet functional, and the construction quality speaks for itself.",
    rating: 5,
    project: "Shopping Complex"
  },
  {
    name: "Meera Nair",
    role: "Architect",
    content: "Working with AJ Groups was a pleasure. They value architectural vision and execute it perfectly. Their team is professional and delivers beyond expectations.",
    rating: 5,
    project: "Residential Layout"
  },
  {
    name: "Vikram Singh",
    role: "Land Developer",
    content: "AJ Groups provided complete land development services from plotting to approvals. Their expertise saved us time and ensured all legal compliances were met.",
    rating: 5,
    project: "Land Development Project"
  }
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Quote className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those who trusted us with their dreams
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 flex-grow italic">
                        "{testimonial.content}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-accent mt-1">{testimonial.project}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
