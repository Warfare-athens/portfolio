
"use client"
import { motion } from "framer-motion";
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaLanguage, FaHeart } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const aboutData = {
    personal: {
        name: "Athens Dubey",
        title: "Software Developer | Gen AI Developer",
        image: "/viking.png",
        details: [
            {
                icon: <FaGraduationCap />,
                label: "RGPV Gwalior",
                value: "B.Tech CSE (2022-2026)"
            },
            {
                icon: <FaGraduationCap />,
                label: "Aasha Public School",
                value: "12th Grade Science(PCM) (2020-2022)"
            },
            {
                icon: <FaGraduationCap />,
                label: "Delhi Public School",
                value: "10th Grade (2014-2020)"
            }
            
        ]
    },
 
    interests: [
        "Full-Stack Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Cloud Computing",
        "Open Source",
        "Problem Solving"
    ],

};

const InfoCard = ({ icon, label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay * 0.1, duration: 0.3 }}
        className="group relative bg-gradient-to-br from-[#232329] to-[#1a1a20] border border-neutral-700 hover:border-accent/50 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
        <div className="relative z-10 flex items-center gap-3">
            <div className="text-accent text-xl group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <div>
                <p className="text-white/60 text-sm font-medium">{label}</p>
                <p className="text-white font-semibold">{value}</p>
            </div>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-16 xl:py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-gradient-to-r from-accent via-white to-accent bg-clip-text mb-4">
                        ABOUT ME
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
                    {/* Personal Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 relative">
                                EDUCATION
                                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
                            </h3>
                            
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {aboutData.personal.details.map((detail, index) => (
                                <InfoCard
                                    key={index}
                                    icon={detail.icon}
                                    label={detail.label}
                                    value={detail.value}
                                    delay={index}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 relative">
                                Areas of Interest
                                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {aboutData.interests.map((interest, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                                    className="group relative bg-gradient-to-br from-[#232329] to-[#1a1a20] border border-neutral-700 hover:border-accent/50 rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:text-accent transition-all duration-300 hover:scale-105 cursor-default"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        <FaHeart className="text-accent/60 group-hover:text-accent transition-colors duration-300" />
                                        {interest}
                                    </span>
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
       
                </div>

               
                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="relative bg-gradient-to-br from-[#232329] to-[#1a1a20] border border-neutral-700 rounded-2xl p-8 max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Let's Build Something Amazing Together
                            </h3>
                            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
                                I'm always excited to work on new projects and collaborate with like-minded individuals. 
                                Whether it's a web application, AI project, or innovative solution, I'm ready to bring ideas to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a 
                                    href="#contact" 
                                    className="bg-accent text-black font-medium px-6 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                                >
                                    Get In Touch
                                </a>
                                <a 
                                    href="https://drive.google.com/drive/folders/1XyLRj3taX0dUeRAvWMlJgRCngWA6MeTj" 
                                    target="_blank"
                                    className="border border-accent text-accent font-medium px-6 py-3 rounded-lg hover:bg-accent hover:text-black transition-all duration-300 hover:scale-105"
                                >
                                    View Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
