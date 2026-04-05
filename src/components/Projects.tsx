import { Box, Container, Heading, Text, Tag, Button, VStack, HStack, Link, SimpleGrid, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaBrain, FaShieldAlt, FaChartLine, FaRobot, FaShoppingCart, FaUserGraduate } from 'react-icons/fa';

const MotionBox = motion(Box);

const projects = [
  {
    title: "Academic-Agent",
    description: "AI-powered academic assistant that retrieves knowledge from PDFs using FAISS (RAG pipeline), tracks student mastery, detects misconceptions, and generates adaptive explanations. Includes a teacher dashboard for students at risk and learning insights with academic integrity checks.",
    technologies: ["PyTorch", "SentenceTransformers", "FAISS", "Transformers", "Flask"],
    category: "Generative AI + RAG",
    categoryIcon: FaRobot,
    links: {
      github: "https://github.com/sohamnp06/Academic-Agent",
    },
    highlights: [
      "RAG pipeline with FAISS for PDF knowledge retrieval",
      "Adaptive explanation generation based on student mastery",
      "Teacher dashboard with at-risk student detection",
      "Closed-loop learning with feedback tracking and integrity checks"
    ]
  },
  {
    title: "DeepCV-Analyzer",
    description: "AI-powered resume/CV analysis system that extracts and analyzes resume data from PDF/Image formats. Performs skill extraction, feature parsing, and can be extended to resume screening and ranking. Combines Computer Vision and NLP techniques for comprehensive analysis.",
    technologies: ["OpenCV", "spaCy", "Transformers", "Python", "NLP"],
    category: "AI + Computer Vision",
    categoryIcon: FaBrain,
    links: {
      github: "https://github.com/sohamnp06/DeepCV-Analyzer",
    },
    highlights: [
      "Resume data extraction from PDF and image formats",
      "Skill extraction and feature parsing with NLP",
      "Extensible to resume screening and ranking",
      "Combines Computer Vision + NLP for analysis"
    ]
  },
  {
    title: "Gmail Threat Email Dashboard",
    description: "Cybersecurity + NLP dashboard that connects to Gmail API to read emails in real-time, displays them as threat-monitoring cards, and identifies suspicious/phishing-like emails. Acts as a mini SOC (Security Operations Center) dashboard with threat classification logic.",
    technologies: ["Python", "Gmail API", "NLP", "Dashboard UI"],
    category: "Cybersecurity + NLP",
    categoryIcon: FaShieldAlt,
    links: {
      github: "https://github.com/sohamnp06/HopesHackathon3.0",
    },
    highlights: [
      "Real-time Gmail API integration for inbox monitoring",
      "Threat classification logic for phishing detection",
      "Interactive threat-monitoring card display",
      "Mini SOC dashboard with email parsing"
    ]
  },
  {
    title: "Credit Risk Assessment System",
    description: "FinTech + Explainable AI system that predicts loan default risk using XGBoost classification. Provides explainability using SHAP with feature-level impact for each prediction. Includes dashboard and API for real-time predictions with data preprocessing and threshold tuning.",
    technologies: ["Python", "Flask", "XGBoost", "SHAP", "PostgreSQL"],
    category: "FinTech + Explainable AI",
    categoryIcon: FaChartLine,
    links: {
      github: "https://github.com/sohamnp06/Credit-Risk-Assessment-System",
    },
    highlights: [
      "XGBoost-based loan default risk prediction",
      "SHAP-based explainability with feature-level impact",
      "Real-time prediction API with Flask backend",
      "Data preprocessing, feature engineering & threshold tuning"
    ]
  },
  {
    title: "RecoCartX - Recommendation System",
    description: "E-Commerce recommendation system that generates personalized product recommendations using a hybrid approach combining clustering and similarity. Considers user history and current cart to improve user engagement and sales with full-stack integration.",
    technologies: ["Python", "Flask", "PostgreSQL", "Scikit-learn", "React"],
    category: "E-Commerce + ML",
    categoryIcon: FaShoppingCart,
    links: {
      github: "https://github.com/sohamnp06/RecoCartX",
    },
    highlights: [
      "KMeans-based customer segmentation",
      "Hybrid recommendation (clustering + similarity)",
      "Cart & purchase-based personalized suggestions",
      "Full-stack integration with React frontend"
    ]
  },
  {
    title: "Student Performance Indicator",
    description: "Education analytics + ML system that predicts student performance and outcomes. Identifies at-risk students using ML models and supports data-driven academic insights with robust data preprocessing, feature engineering, and model evaluation.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    category: "Education Analytics + ML",
    categoryIcon: FaUserGraduate,
    links: {
      github: "https://github.com/sohamnp06/Student-Performance-Indicator",
    },
    highlights: [
      "ML-based student performance prediction",
      "At-risk student identification",
      "Data preprocessing and feature engineering pipeline",
      "Model training, evaluation & performance analytics"
    ]
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      minH="100vh"
      py={{ base: 16, md: 24 }}
      bg="#000000"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background patterns */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={0}
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.03}
          backgroundImage="radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.5) 1px, transparent 0)"
          backgroundSize="50px 50px"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.02}
          backgroundImage="radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.3) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.3) 2px, transparent 0)"
          backgroundSize="100px 100px"
        />
        <Box
          position="absolute"
          top="20%"
          right="10%"
          w="500px"
          h="500px"
          borderRadius="50%"
          bgGradient="radial(circle, rgba(255, 255, 255, 0.02), transparent)"
          filter="blur(100px)"
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
              fontWeight="700"
              letterSpacing="0.1em"
              textTransform="uppercase"
              fontFamily="'Space Grotesk', sans-serif"
              color="white"
            >
              Projects
            </Heading>
            <Text
              color="gray.400"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              Showcasing my best work in Machine Learning, AI & Data Science
            </Text>
          </VStack>
        </motion.div>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                position="relative"
                borderRadius="2xl"
                bg="rgba(20, 20, 20, 0.8)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                p={8}
                h="100%"
                display="flex"
                flexDirection="column"
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-8px)",
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                {/* Gradient Border Top */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="3px"
                  bgGradient="linear(to-r, #ffffff, #e5e5e5, #d4d4d4, #a3a3a3)"
                  borderRadius="2xl 2xl 0 0"
                />

                <VStack align="stretch" spacing={6} flex="1">
                  {/* Header */}
                  <HStack justify="space-between" align="flex-start" flexWrap="wrap" gap={4}>
                    <Badge
                      px={4}
                      py={2}
                      borderRadius="full"
                      bg="rgba(255, 255, 255, 0.1)"
                      color="#e5e5e5"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.2)"
                      fontSize="xs"
                      fontWeight="700"
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      {project.category}
                    </Badge>
                  </HStack>

                  {/* Title */}
                  <Heading
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="white"
                    lineHeight="1.3"
                  >
                    {project.title}
                  </Heading>

                  {/* Description */}
                  <Text
                    color="gray.300"
                    lineHeight="1.8"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {project.description}
                  </Text>

                  {/* Highlights */}
                  <Box flex="1">
                    <VStack align="stretch" spacing={3}>
                      {project.highlights.map((highlight, i) => (
                        <HStack key={i} spacing={3} align="flex-start">
                          <Box
                            w="6px"
                            h="6px"
                            borderRadius="full"
                            bg="#ffffff"
                            mt={2}
                            flexShrink={0}
                          />
                          <Text
                            color="gray.300"
                            fontSize={{ base: "xs", md: "sm" }}
                            lineHeight="1.7"
                            flex={1}
                          >
                            {highlight}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  {/* Technologies */}
                  <Box>
                    <HStack spacing={2} flexWrap="wrap">
                      {project.technologies.map((tech, i) => (
                        <Tag
                          key={i}
                          size="sm"
                          bg="rgba(255, 255, 255, 0.1)"
                          color="#e5e5e5"
                          border="1px solid"
                          borderColor="rgba(255, 255, 255, 0.2)"
                          borderRadius="md"
                          px={3}
                          py={1}
                          fontSize="xs"
                          fontWeight="600"
                        >
                          {tech}
                        </Tag>
                      ))}
                    </HStack>
                  </Box>

                  {/* Action Button - Only View Code */}
                  <HStack spacing={4} pt={2}>
                    <Link href={project.links.github} isExternal w="100%">
                      <Button
                        leftIcon={<FaGithub />}
                        w="100%"
                        variant="outline"
                        borderColor="rgba(255, 255, 255, 0.3)"
                        color="#ffffff"
                        bg="transparent"
                        borderRadius="xl"
                        py={6}
                        fontSize="sm"
                        fontWeight="600"
                        _hover={{
                          bg: "rgba(59, 130, 246, 0.15)",
                          borderColor: "#ffffff",
                          color: "#ffffff",
                        }}
                        transition="all 0.3s ease"
                      >
                        View Code
                      </Button>
                    </Link>
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* GitHub Link Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            mt={16}
            textAlign="center"
          >
            <VStack spacing={6}>
              <Text
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                maxW="2xl"
                mx="auto"
              >
                Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
              </Text>
              <Link href="https://github.com/sohamnp06" isExternal>
                <Button
                  leftIcon={<FaGithub />}
                  size="lg"
                  bgGradient="linear(to-r, #ffffff, #e5e5e5)"
                  color="#000000"
                  borderRadius="xl"
                  px={8}
                  py={6}
                  fontSize="md"
                  fontWeight="700"
                  letterSpacing="0.05em"
                  textTransform="uppercase"
                  fontFamily="'Space Grotesk', sans-serif"
                  _hover={{
                    bgGradient: "linear(to-r, #e5e5e5, #d4d4d4)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 35px rgba(255, 255, 255, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  View All Projects on GitHub
                </Button>
              </Link>
            </VStack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
