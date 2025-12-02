import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, TrendingUp, Shield, Clock, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Award-Winning Excellence",
    description: "Recognized for our commitment to quality and innovative design solutions across Karnataka."
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Expert Team",
    description: "Seasoned professionals with decades of combined experience in construction and architecture."
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Proven Track Record",
    description: "250+ successful projects delivered on time with exceptional quality standards."
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Quality Assurance",
    description: "Rigorous quality checks and premium materials ensure lasting value for your investment."
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Timely Delivery",
    description: "We respect your time and ensure project completion within agreed timelines."
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Innovation & Technology",
    description: "Leveraging latest construction technologies and sustainable building practices."
  }
];

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Why Choose AJ Groups?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for construction, real estate, and architectural excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-accent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="text-accent mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
