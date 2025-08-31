"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import Link from "next/link";
import { MdVerifiedUser } from 'react-icons/md';
// Certificate images are stored in public/assets/certificates/

const certificates = [
    {
        num: "01",
        title: "Microsoft AI Prompt Engineering",
        issuer: "Microsoft",
        date: "2025",
        description: "Advanced Prompt Engineering for AI.",
        skills: ["Microsoft", "Azure", "AI", "Prompt Engineering"],
        image: "/assets/certificates/cer1.png", // AWS Cloud Practitioner certificate
        credential: "https://aws.amazon.com/certification/",
        verify: "https://aws.amazon.com/certification/"
    },
    {
        num: "02",
        title: "Google Generative AI",
        issuer: "Google",
        date: "2025",
        description: "Web development using Generative AI by Google.",
        skills: ["Google", "Claude", "OpenAI", "Generative AI"],
        image: "/assets/certificates/cer2.png", // Microsoft Generative AI certificate
        credential: "https://docs.microsoft.com/en-us/learn/certifications/",
        verify: "https://docs.microsoft.com/en-us/learn/certifications/"
    },
    {
        num: "03",
        title: "Linux Specialization",
        issuer: "Udemy",
        date: "2025",
        description: "Linux OS for Cyber Security",
        skills: ["Ethical Hacking", "Kernal", "Networking", "Cyber Security"],
        image: "/assets/certificates/cer3.png", // Replace with actual certificate image
        credential: "https://education.oracle.com/certification",
        verify: "https://education.oracle.com/certification"
    },
    {
        num: "04",
        title: "Celebal Internship",
        issuer: "Celebal Technologies",
        date: "2024",
        description: "Web development and Data Analysis.",
        skills: ["Web development", "Data Analysis", "Data Visualization", "Data Engineering"],
        image: "", // Replace with actual certificate image
        credential: "https://skillshop.withgoogle.com/",
        verify: "https://skillshop.withgoogle.com/"
    },
    {
        num: "05",
        title: "GreenTree Internship",
        issuer: "GreenTree Organisation",
        date: "2025",
        description: "FUll stack development.",
        skills: ["Frontend", "Backend", "reactjs", "nextjs", "nodejs", "mongodb", "express"],
        image: "", // Replace with actual certificate image
        credential: "https://www.comptia.org/certifications/security",
        verify: "https://www.comptia.org/certifications/security"
    }
];

const CertificateCard = ({ certificate, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay * 0.1, duration: 0.3 }}
        className="group relative bg-gradient-to-br from-[#232329] to-[#1a1a20] border border-neutral-700 hover:border-accent/50 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 h-full"
    >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Certificate Number */}
        <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                {certificate.num}
            </div>
            <div className="flex gap-3">
                <Link
                    href={certificate.credential}
                    target="_blank"
                    className="w-[40px] h-[40px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center"
                >
                    <MdVerifiedUser className="text-primary text-xl" />
                </Link>
                <Link
                    href={certificate.verify}
                    target="_blank"
                    className="w-[40px] h-[40px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center"
                >
                    <BsArrowUpRight className="text-primary text-xl" />
                </Link>
            </div>
        </div>

        {/* Certificate Image */}
        <div className="relative w-full aspect-[16/9] bg-accent/10 rounded-lg mb-4 overflow-hidden">
            {certificate.image ? (
                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="object-cover w-full h-full"
                />
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <FaAward className="text-6xl text-accent/60" />
                </div>
            )}
        </div>

        {/* Certificate Info */}
        <div className="space-y-4 relative z-10">
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-all duration-300">
                {certificate.title}
            </h3>

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <span className="text-accent font-semibold text-sm">Issuer:</span>
                    <span className="text-white/80 text-sm">{certificate.issuer}</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-accent font-semibold text-sm">Year:</span>
                    <span className="text-white/80 text-sm">{certificate.date}</span>
                </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
                {certificate.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, index) => (
                    <div key={index} className="px-3 py-1 border border-neutral-500 rounded-md">
                        <div className="text-xs font-light text-accent">{skill}</div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

const Certificates = () => {
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
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-gradient-to-r from-accent via-white to-accent bg-clip-text mb-4">
                        CERTIFICATES
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full" />
                    <p className="text-white/60 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Professional certifications and achievements that validate my expertise
                    </p>
                </motion.div>

                {/* Certificates Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="pb-16"
                    >
                        {certificates.map((certificate, index) => (
                            <SwiperSlide key={index}>
                                <CertificateCard certificate={certificate} delay={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="swiper-button-prev font-black !text-accent !w-14 !h-14 !mt-0 !left-0 !top-1/2 !-translate-y-1/2 after:!text-2xl"></div>
                    <div className="swiper-button-next font-black !text-accent !w-14 !h-14 !mt-0 !right-0 !top-1/2 !-translate-y-1/2 after:!text-2xl"></div>

                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;