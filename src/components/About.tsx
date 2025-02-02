import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 about-section theme-transition">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            I'm a Computer Engineering student at An-Najah National University
            (NNU), dedicated to problem solving and web development. Passionate
            about learning new technologies, I aim to continuously improve my
            skills to become the best version of myself.
          </p>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium mb-2">Languages</h4>
                <ul className="list-disc list-inside">
                  <li>Java</li>
                  <li>C/C++</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>Php</li>
                  <li>TypeScript</li>
                  <li>ReactJS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Frameworks & Tools</h4>
                <ul className="list-disc list-inside">
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Bootstrap</li>
                  <li>Cucumber</li>
                  <li>Git/GitHub</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Specialization</h4>
                <ul className="list-disc list-inside">
                  <li>Web Development</li>
                  <li>Front-end Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
