import { Box, Container, Heading, Text, Tag, Button, VStack, HStack, Link, SimpleGrid, Badge } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaBrain, FaShieldAlt, FaChartLine, FaRobot, FaShoppingCart, FaTruck } from 'react-icons/fa';

const MotionBox = motion(Box);

// LEFT COLUMN — Data Analysis Projects
const dataAnalysisProjects = [
  {
    title: "Credit Risk Assessment System",
    description: "AI-powered dual-portal loan platform analyzing 255,000+ historical applications across a ₹32.58B portfolio. XGBoost classification with SHAP explainability surfaces hidden risk patterns — Poor credit applicants, high DTI borrowers, and co-signer combinations — that a naive approval workflow misses entirely.",
    technologies: ["Python", "XGBoost", "SHAP", "Flask", "PostgreSQL", "React"],
    category: "FinTech + Explainable AI",
    categoryIcon: FaChartLine,
    links: { github: "https://github.com/sohamnp06/Credit-Risk-Assessment-System" },
    highlights: [
      "Analyzed 255K+ loan applications across a ₹32.58B portfolio",
      "XGBoost with class-weight tuning for imbalanced default detection",
      "SHAP-based feature-level explainability for every prediction",
      "Dual portal (Applicant + Bank Employee) with real-time risk scoring API",
    ]
  },
  {
    title: "Shoplytics AI",
    description: "Enterprise-grade retail analytics engine that replaces fragmented Excel silos with a unified ETL + event-driven ingestion pipeline. A PostgreSQL data warehouse feeds a multi-page Power BI executive dashboard, reducing analytics latency from days to seconds and surfacing promotional discount leakage and fulfillment blindspots.",
    technologies: ["Python", "Pandas", "PostgreSQL", "Flask", "Power BI", "SQLAlchemy"],
    category: "Retail Analytics + ETL",
    categoryIcon: FaShoppingCart,
    links: { github: "https://github.com/sohamnp06/Shoplytics-AI" },
    highlights: [
      "Batch ETL + real-time Flask ingestion with symmetric validation engine",
      "PostgreSQL warehouse with domain-level constraint enforcement",
      "Executive Power BI dashboard tracking KPIs, profit leaks & fulfillment ops",
      "Eliminates data drift across batch and transactional pipelines",
    ]
  },
  {
    title: "Supply Chain Forecasting",
    description: "End-to-end analytics lifecycle on 172,765 global e-commerce orders — from raw SQL extraction through EDA and Power BI BI reporting to ML delay prediction. Combines Python, SQL, and Scikit-learn to identify operational bottlenecks, quantify financial losses from logistics failures, and flag high-risk shipments before dispatch.",
    technologies: ["Python", "Pandas", "PostgreSQL", "Scikit-learn", "Power BI", "SQL"],
    category: "Supply Chain + ML Forecasting",
    categoryIcon: FaTruck,
    links: { github: "https://github.com/sohamnp06/Supply-Chain-Forecasting" },
    highlights: [
      "Analyzed 172,765 global orders across shipping modes and regions",
      "EDA-driven root cause analysis of shipment delays and financial impact",
      "Random Forest classifier to flag high-risk shipments pre-dispatch",
      "3-module Power BI dashboard for executive business intelligence",
    ]
  },
];

// RIGHT COLUMN — Data Science Projects
const dataScienceProjects = [
  {
    title: "Academic Agent",
    description: "End-to-end RAG-based intelligent tutoring system that ingests faculty PDFs, performs semantic retrieval via FAISS + Sentence Transformers, and generates adaptive LLM responses. Models per-student topic mastery, detects conceptual misconceptions, identifies at-risk students, and enforces academic integrity through a closed-loop feedback mechanism.",
    technologies: ["PyTorch", "FAISS", "SentenceTransformers", "Transformers", "Flask"],
    category: "Generative AI + RAG",
    categoryIcon: FaRobot,
    links: { github: "https://github.com/sohamnp06/Academic-Agent" },
    highlights: [
      "RAG pipeline with FAISS for PDF knowledge retrieval",
      "Adaptive explanation generation based on student mastery level",
      "Teacher dashboard with at-risk student detection",
      "Closed-loop learning with feedback tracking and integrity checks",
    ]
  },
  {
    title: "DeepCV Analyzer",
    description: "AI-powered resume intelligence system that bridges candidates and job roles using Hugging Face semantic embeddings (all-MiniLM-L6-v2). Performs domain-specific skill gap analysis across Programming, Backend, Cloud, and Data Science categories, generates narrative intelligence reports, and is deployment-optimized for Render free tier with SHA-256 security and PostgreSQL persistence.",
    technologies: ["Python", "Hugging Face", "NLP", "spaCy", "PostgreSQL", "Flask"],
    category: "NLP + AI Resume Intelligence",
    categoryIcon: FaBrain,
    links: { github: "https://github.com/sohamnp06/DeepCV-Analyzer" },
    highlights: [
      "Cloud-powered semantic JD-resume matching via Hugging Face Inference API",
      "Domain-specific skill gap analysis across 7 engineering categories",
      "Narrative intelligence report with strengths, weaknesses & improvement steps",
      "Lightweight deployment on Render free tier with SHA-256 security",
    ]
  },
  {
    title: "AegisAI — Gmail Threat Dashboard",
    description: "Cybersecurity NLP dashboard (built at HopesHackathon 3.0) that connects to Gmail API via Google OAuth2, reads real-time inbox emails, and displays them as threat-monitoring cards. Auto-refreshes every 10 seconds, classifies suspicious and phishing-like emails, and acts as a mini SOC (Security Operations Center) for email threat intelligence.",
    technologies: ["Next.js", "Gmail API", "NLP", "OAuth2", "Tailwind"],
    category: "Cybersecurity + NLP",
    categoryIcon: FaShieldAlt,
    links: { github: "https://github.com/sohamnp06/HopesHackathon3.0" },
    highlights: [
      "Real-time Gmail API integration with Google OAuth2 refresh token flow",
      "Threat classification logic for phishing and suspicious email detection",
      "Dashboard auto-refreshes every 10 seconds with interactive email cards",
      "Mini SOC dashboard built end-to-end at HopesHackathon 3.0",
    ]
  },
];

const ProjectCard = ({ project, index }: { project: typeof dataAnalysisProjects[0]; index: number }) => (
  <MotionBox
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    h="100%"
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

        {/* Action Button */}
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
);

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
              Showcasing my best work in Data Analysis, Data Science & Machine Learning
            </Text>
          </VStack>
        </motion.div>

        {/* Column headers */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={6}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <HStack spacing={3} mb={4}>
              <Box
                w="4px"
                h="28px"
                bgGradient="linear(to-b, #ffffff, #a3a3a3)"
                borderRadius="full"
              />
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="700"
                color="gray.300"
                textTransform="uppercase"
                letterSpacing="0.15em"
              >
                Data Analysis
              </Text>
            </HStack>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <HStack spacing={3} mb={4}>
              <Box
                w="4px"
                h="28px"
                bgGradient="linear(to-b, #ffffff, #a3a3a3)"
                borderRadius="full"
              />
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="700"
                color="gray.300"
                textTransform="uppercase"
                letterSpacing="0.15em"
              >
                Data Science
              </Text>
            </HStack>
          </MotionBox>
        </SimpleGrid>

        {/* Projects grid — left: Data Analysis, right: Data Science */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {/* Left Column: Data Analysis */}
          <VStack spacing={8} align="stretch">
            {dataAnalysisProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </VStack>

          {/* Right Column: Data Science */}
          <VStack spacing={8} align="stretch">
            {dataScienceProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index + 3} />
            ))}
          </VStack>
        </SimpleGrid>

        {/* GitHub Link Section — updated text, no GitHub header logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box mt={16} textAlign="center">
            <VStack spacing={6}>
              <Text
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                maxW="2xl"
                mx="auto"
                lineHeight="1.8"
              >
                I've built numerous projects across Machine Learning, Data Science, NLP, and Generative AI — from recommendation systems and credit risk models to RAG pipelines and cybersecurity dashboards. Each repository represents a learning journey and a solution to real-world problems.
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
                  View All Projects on GitHub →
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
