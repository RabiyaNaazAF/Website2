import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageSquare, FileText, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Consultation",
    description: "Initial meeting to understand your vision, requirements, and budget. We listen to your dreams.",
    number: "01"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Planning & Design",
    description: "Detailed architectural plans, 3D visualization, and cost estimation. Every detail matters.",
    number: "02"
  },
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Construction",
    description: "Expert execution with quality materials, regular updates, and timely completion.",
    number: "03"
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Handover",
    description: "Final inspection, documentation, and handover of your completed project with warranty.",
    number: "04"
  }
];

const ProcessTimeline = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A seamless journey from concept to completion
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-accent/30 -translate-x-1/2 z-0" />
                )}

                <div className="relative z-10 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 h-full hover:bg-primary-foreground/10 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 text-accent transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
