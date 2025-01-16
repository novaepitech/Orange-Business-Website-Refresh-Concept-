"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    Network,
    Brain,
    Lock,
    Globe,
    Users,
    Cloud,
    Shield,
    Leaf,
    Recycle,
    Battery,
    Sun,
    Quote,
    Factory,
    Banknote,
    ShoppingBag,
    Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [logoSrc, setLogoSrc] = useState(
        "/Orange_Business_RGB_Master_Logo_Black_Text.png",
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
            setLogoSrc("/New_Orange_Business_Logo_Black_Text.png");
        }, 500); // 0.5 second delay

        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, []);

    const baseBlueClasses = (classes: string) =>
        classes
            .replace(
                /text-orange-\d+/g,
                isLoaded
                    ? "text-blue-500 transition-colors duration-1000"
                    : "text-orange-500",
            )
            .replace(
                /bg-orange-\d+/g,
                isLoaded
                    ? "bg-blue-500 transition-colors duration-1000"
                    : "bg-orange-500",
            )
            .replace(
                /hover:text-orange-\d+/g,
                isLoaded
                    ? "hover:text-blue-600 transition-colors duration-1000"
                    : "hover:text-orange-600",
            )
            .replace(
                /hover:bg-orange-\d+/g,
                isLoaded
                    ? "hover:bg-blue-600 transition-colors duration-1000"
                    : "hover:bg-orange-600",
            );

    const iconBlueClasses = (classes: string) =>
        classes.replace(
            /text-orange-\d+/g,
            isLoaded
                ? "text-blue-500 transition-colors duration-1000"
                : "text-orange-500",
        );

    return (
        <main className="min-h-screen">
            <Navbar baseBlueClasses={baseBlueClasses} logoSrc={logoSrc} />
            <Hero baseBlueClasses={baseBlueClasses} />
            <Expertise
                baseBlueClasses={baseBlueClasses}
                iconBlueClasses={iconBlueClasses}
            />
            <Solutions
                baseBlueClasses={baseBlueClasses}
                iconBlueClasses={iconBlueClasses}
            />
            <BrandValues
                baseBlueClasses={baseBlueClasses}
                iconBlueClasses={iconBlueClasses}
            />
            <Testimonials
                baseBlueClasses={baseBlueClasses}
                iconBlueClasses={iconBlueClasses}
            />
            <CaseStudies />
            <Sustainability
                baseBlueClasses={baseBlueClasses}
                iconBlueClasses={iconBlueClasses}
            />
            <Contact baseBlueClasses={baseBlueClasses} />
            <Footer baseBlueClasses={baseBlueClasses} />
        </main>
    );
}

function Navbar({
    baseBlueClasses,
    logoSrc,
}: {
    baseBlueClasses: (classes: string) => string;
    logoSrc: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [logoOpacity, setLogoOpacity] = useState(1);

    useEffect(() => {
        if (logoSrc === "/New_Orange_Business_Logo_Black_Text.png") {
            // Start the fade-out
            setLogoOpacity(0);

            // After the fade-out, immediately start the fade-in
            setTimeout(() => {
                setLogoOpacity(1);
            }, 500); // Adjust this delay to match the CSS transition duration
        }
    }, [logoSrc]);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                className="h-[80px] w-auto"
                                src={logoSrc || "/placeholder.svg"}
                                alt="Orange Business"
                                width={200}
                                height={200}
                                priority={true}
                                fetchPriority="high"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link
                            href="#solutions"
                            className={baseBlueClasses(
                                "text-gray-700 hover:text-orange-600",
                            )}
                        >
                            Solutions
                        </Link>
                        <Link
                            href="#expertise"
                            className={baseBlueClasses(
                                "text-gray-700 hover:text-orange-600",
                            )}
                        >
                            Expertise
                        </Link>
                        <Link
                            href="#case-studies"
                            className={baseBlueClasses(
                                "text-gray-700 hover:text-orange-600",
                            )}
                        >
                            Réalisations
                        </Link>
                        <Link
                            href="#sustainability"
                            className={baseBlueClasses(
                                "text-gray-700 hover:text-orange-600",
                            )}
                        >
                            RSE
                        </Link>
                        <Button
                            variant="default"
                            className={baseBlueClasses(
                                "bg-orange-600 hover:bg-orange-700",
                            )}
                            onClick={() => (window.location.href = "#contact")}
                        >
                            Contactez-nous
                        </Button>
                    </div>

                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={baseBlueClasses(
                                "inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-orange-600",
                            )}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        href="#solutions"
                        className={baseBlueClasses(
                            "block px-3 py-2 text-gray-700 hover:text-orange-600",
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        Solutions
                    </Link>
                    <Link
                        href="#expertise"
                        className={baseBlueClasses(
                            "block px-3 py-2 text-gray-700 hover:text-orange-600",
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        Expertise
                    </Link>
                    <Link
                        href="#case-studies"
                        className={baseBlueClasses(
                            "block px-3 py-2 text-gray-700 hover:text-orange-600",
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        Réalisations
                    </Link>
                    <Link
                        href="#sustainability"
                        className={baseBlueClasses(
                            "block px-3 py-2 text-gray-700 hover:text-orange-600",
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        RSE
                    </Link>
                    <Button
                        variant="default"
                        className={baseBlueClasses(
                            "w-full bg-orange-600 hover:bg-orange-700 mt-4",
                        )}
                        onClick={() => {
                            setIsOpen(false);
                            window.location.href = "#contact";
                        }}
                    >
                        Contactez-nous
                    </Button>
                </div>
            </div>
        </nav>
    );
}

function Hero({
    baseBlueClasses,
}: {
    baseBlueClasses: (classes: string) => string;
}) {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background video/image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-background.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-card space-y-8 relative bg-white p-6 rounded-xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-black">
                        Votre confiance,
                        <br />
                        <span className={baseBlueClasses("text-orange-500")}>
                            notre technlogie
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Orange Business accompagne votre entreprise dans sa
                        transformation digitale avec des solutions sur mesure et
                        innovantes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className={baseBlueClasses(
                                "bg-orange-600 hover:bg-orange-700",
                            )}
                            onClick={() =>
                                (window.location.href = "#solutions")
                            }
                        >
                            Découvrir nos solutions
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-white border-white hover:bg-white/10"
                            onClick={() =>
                                (window.location.href = "#case-studies")
                            }
                        >
                            Nos réalisations
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

const expertiseAreas = [
    {
        icon: Cloud,
        title: "Cloud & Infrastructure",
        description: "Gagnez en flexibilité, scalabilité et sécurité.",
    },
    {
        icon: Shield,
        title: "Cybersécurité",
        description:
            "Protégez vos données et vos systèmes contre les cybermenaces.",
    },
    {
        icon: Brain,
        title: "Intelligence Artificielle & Data",
        description:
            "Optimisez vos processus et améliorez la prise de décision.",
    },
    {
        icon: Network,
        title: "Connectivité & Réseaux",
        description:
            "Bénéficiez de solutions de connectivité performantes et sécurisées.",
    },
    {
        icon: Globe,
        title: "Digital Workplace",
        description:
            "Facilitez le travail collaboratif et la communication interne.",
    },
];

function Expertise({
    baseBlueClasses,
    iconBlueClasses,
}: {
    baseBlueClasses: (classes: string) => string;
    iconBlueClasses: (classes: string) => string;
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % expertiseAreas.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section id="expertise" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        L'Expertise Orange Business : Technologies de Pointe et
                        Valeurs Fortes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Au cœur de chaque solution, l'expertise technologique
                        d'Orange Business et son engagement pour un numérique de
                        confiance, performant et durable.
                    </p>
                </div>

                <Carousel className="w-full max-w-5xl mx-auto">
                    <CarouselContent>
                        {expertiseAreas.map((area, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow m-2">
                                        <CardHeader className="flex-none">
                                            <div className="flex items-center gap-4">
                                                <area.icon
                                                    className={iconBlueClasses(
                                                        "h-8 w-8 text-orange-600",
                                                    )}
                                                />
                                                <CardTitle>
                                                    {area.title}
                                                </CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="py-4 flex-grow">
                                            <p className="text-gray-600">
                                                {area.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div className="mt-16 text-center">
                    <Button
                        variant="default"
                        className={baseBlueClasses(
                            "bg-orange-600 hover:bg-orange-700",
                        )}
                        onClick={() => (window.location.href = "#contact")}
                    >
                        Découvrir notre expertise
                    </Button>
                </div>
            </div>
        </section>
    );
}

const solutions = [
    {
        icon: Factory,
        title: "Industrie",
        description: "Optimisez votre production et votre chaîne logistique.",
    },
    {
        icon: Banknote,
        title: "Services Financiers",
        description:
            "Transformez l'expérience client et sécurisez vos transactions.",
    },
    {
        icon: ShoppingBag,
        title: "Distribution & Mode",
        description: "Boostez vos ventes et fidélisez vos clients.",
    },
    {
        icon: Building,
        title: "Secteur Public & Environnement",
        description:
            "Améliorez les services publics et optimisez les ressources.",
    },
];

function Solutions({
    baseBlueClasses,
    iconBlueClasses,
}: {
    baseBlueClasses: (classes: string) => string;
    iconBlueClasses: (classes: string) => string;
}) {
    return (
        <section id="solutions" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Solutions Numériques Sur-Mesure pour Transformer Votre
                        Entreprise
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Orange Business vous accompagne dans votre
                        transformation digitale avec des solutions innovantes,
                        sécurisées et durables, conçues pour répondre aux défis
                        spécifiques de votre secteur.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                                <CardHeader className="flex-none pb-0">
                                    {" "}
                                    {/* Suppression du padding bottom */}
                                    <div className="flex items-center gap-4">
                                        <solution.icon
                                            className={iconBlueClasses(
                                                "h-10 w-10 text-orange-600",
                                            )}
                                        />
                                        <CardTitle>{solution.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="py-4 flex-grow">
                                    {" "}
                                    {/* Ajout de padding et flex-grow */}
                                    <CardDescription>
                                        {solution.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <Button
                        variant="default"
                        className={baseBlueClasses(
                            "bg-orange-600 hover:bg-orange-700",
                        )}
                        onClick={() => (window.location.href = "#contact")}
                    >
                        Nous contacter pour une solution personnalisée
                    </Button>
                </div>
            </div>
        </section>
    );
}

function BrandValues({
    baseBlueClasses,
    iconBlueClasses,
}: {
    baseBlueClasses: (classes: string) => string;
    iconBlueClasses: (classes: string) => string;
}) {
    return (
        <section id="brand-values" className="pb-12 bg-white">
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Nos Valeurs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <Lock
                            className={iconBlueClasses(
                                "h-12 w-12 text-orange-600 mx-auto mb-4",
                            )}
                        />
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Confiance & Éthique
                        </h4>
                        <p className="text-gray-600">
                            Protection et gouvernance des données, transparence.
                        </p>
                    </div>
                    <div className="text-center">
                        <Users
                            className={iconBlueClasses(
                                "h-12 w-12 text-orange-600 mx-auto mb-4",
                            )}
                        />
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Proximité
                        </h4>
                        <p className="text-gray-600">
                            20 sites en France, accompagnement personnalisé.
                        </p>
                    </div>
                    <div className="text-center">
                        <Leaf
                            className={iconBlueClasses(
                                "h-12 w-12 text-orange-600 mx-auto mb-4",
                            )}
                        />
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Engagement Durable
                        </h4>
                        <p className="text-gray-600">
                            Réduction de l'empreinte carbone, solutions
                            éco-responsables.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const testimonials = [
    {
        quote: "Orange Business nous a permis d'accélérer notre transformation numérique avec des solutions innovantes et un accompagnement de qualité.",
        author: "Directeur Digital",
        company: "Groupe industriel international",
    },
    {
        quote: "La expertise d'Orange Business en matière de cybersécurité nous a permis de sécuriser nos données et nos systèmes de manière optimale.",
        author: "DSI",
        company: "Leader de la distribution",
    },
    {
        quote: "L'accompagnement d'Orange Business dans notre migration cloud a été déterminant pour la réussite de notre projet.",
        author: "CTO",
        company: "Entreprise de services financiers",
    },
];

function Testimonials({
    baseBlueClasses,
    iconBlueClasses,
}: {
    baseBlueClasses: (classes: string) => string;
    iconBlueClasses: (classes: string) => string;
}) {
    return (
        <section className="py-24 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Ils nous font confiance
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez les témoignages de nos clients
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <Quote
                                        className={iconBlueClasses(
                                            "h-8 w-8 text-orange-600",
                                        )}
                                    />
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 italic mb-6">
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-gray-500">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const caseStudies = [
    {
        title: "Transformation Cloud",
        client: "Grande Distribution",
        description:
            "Migration complète vers le cloud et modernisation des applications",
        image: "/cloud-networking-orange-business.webp",
    },
    {
        title: "IA & Analytics",
        client: "Industrie Manufacturière",
        description:
            "Optimisation de la production grâce à l'intelligence artificielle",
        image: "/shutterstock_156907793.webp",
    },
    {
        title: "Digitalisation",
        client: "Services Financiers",
        description: "Création d'une plateforme digitale innovante",
        image: "/beneficiez-d'une-infrastructure-numerique-evolutive-et-securisee-orange-business.webp",
    },
];

function CaseStudies() {
    return (
        <section id="case-studies" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nos Réalisations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez comment nous accompagnons nos clients dans
                        leur transformation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                                <div className="h-48 overflow-hidden">
                                    <Image
                                        src={study.image || "/placeholder.svg"}
                                        alt={study.title}
                                        className="w-full h-full object-cover transition-transform hover:scale-105"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>{study.title}</CardTitle>
                                    <CardDescription className="text-blue-600 font-medium transition-colors duration-1000">
                                        {study.client}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        {study.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const initiatives = [
    {
        icon: Leaf,
        title: "Réduction CO2",
        description: "Engagement pour la neutralité carbone d'ici 2040",
    },
    {
        icon: Recycle,
        title: "Économie circulaire",
        description: "Recyclage et reconditionnement des équipements",
    },
    {
        icon: Battery,
        title: "Efficacité énergétique",
        description: "Optimisation de la consommation d'énergie",
    },
    {
        icon: Sun,
        title: "Énergies renouvelables",
        description: "Utilisation croissante d'énergies vertes",
    },
];

function Sustainability({
    baseBlueClasses,
    iconBlueClasses,
}: {
    baseBlueClasses: (classes: string) => string;
    iconBlueClasses: (classes: string) => string;
}) {
    return (
        <section id="sustainability" className="py-24 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Notre Engagement RSE
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Agir pour un numérique responsable et durable
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {initiatives.map((initiative, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full text-center">
                                <CardHeader>
                                    <div className="flex justify-center mb-4">
                                        <initiative.icon
                                            className={iconBlueClasses(
                                                "h-12 w-12 text-green-600",
                                            )}
                                        />
                                    </div>
                                    <CardTitle className="text-xl">
                                        {initiative.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        {initiative.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact({
    baseBlueClasses,
}: {
    baseBlueClasses: (classes: string) => string;
}) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Contactez-nous
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Discutons de vos projets de transformation numérique
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Phone
                                    className={baseBlueClasses(
                                        "h-6 w-6 text-orange-600",
                                    )}
                                />
                                <div>
                                    <h3 className="font-semibold">Téléphone</h3>
                                    <p className="text-gray-600">
                                        +33 1 44 44 22 22
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail
                                    className={baseBlueClasses(
                                        "h-6 w-6 text-orange-600",
                                    )}
                                />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-600">
                                        contact@orange-business.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <MapPin
                                    className={baseBlueClasses(
                                        "h-6 w-6 text-orange-600",
                                    )}
                                />
                                <div>
                                    <h3 className="font-semibold">Adresse</h3>
                                    <p className="text-gray-600">
                                        1 Avenue du Président Nelson Mandela,
                                        94110 Arcueil
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Formulaire de contact</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Nom
                                            </label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        name: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="company"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Entreprise
                                            </label>
                                            <Input
                                                id="company"
                                                value={formData.company}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        company: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        email: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                            >
                                                Téléphone
                                            </label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        phone: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value,
                                                })
                                            }
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className={baseBlueClasses(
                                            "w-full bg-orange-600 hover:bg-orange-700",
                                        )}
                                    >
                                        Envoyer
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Footer({
    baseBlueClasses,
}: {
    baseBlueClasses: (classes: string) => string;
}) {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Image
                            src="/New_Orange_Business_Logo_White_Text.png"
                            alt="Orange Business"
                            className="mb-6"
                            width={200}
                            height={200}
                        />
                        <p className="text-gray-400">
                            Leader de la transformation numérique et partenaire
                            de confiance pour votre entreprise.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Solutions
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className={baseBlueClasses(
                                        "text-gray-400 hover:text-orange-500",
                                    )}
                                >
                                    Cloud & Infrastructure
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={baseBlueClasses(
                                        "text-gray-400 hover:text-orange-500",
                                    )}
                                >
                                    Cybersécurité
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={baseBlueClasses(
                                        "text-gray-400 hover:text-orange-500",
                                    )}
                                >
                                    Intelligence Artificielle
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={baseBlueClasses(
                                        "text-gray-400 hover:text-orange-500",
                                    )}
                                >
                                    Transformation Digitale
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Entreprise
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className={baseBlueClasses(
                                        "text-gray-400 hover:text-orange-500",
                                    )}
                                >
                                    À propos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-500"
                                >
                                    Carrières
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-500"
                                >
                                    RSE
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-orange-500"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Nous suivre
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-orange-500"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-orange-500"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <p className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Orange Business. Tous
                        droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
