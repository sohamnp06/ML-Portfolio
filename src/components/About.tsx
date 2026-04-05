import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  SimpleGrid,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBrain,
  FaDatabase,
  FaRobot,
  FaChartBar,
  FaServer,
  FaJava,
} from "react-icons/fa";
import {
  SiPython,
  SiPostgresql,
  SiFlask,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiKaggle,
  SiCplusplus,
  SiPlotly,
} from "react-icons/si";

const MotionBox = motion(Box);

const About = () => {
  const skills = [
    {
      title: "Machine Learning & AI",
      icon: FaBrain,
      description:
        "Scikit-learn, XGBoost, PyTorch, TensorFlow, Hugging Face Transformers, SHAP, Recommendation Systems, Explainable AI",
    },
    {
      title: "NLP & Generative AI",
      icon: FaRobot,
      description:
        "NLTK, spaCy, SentenceTransformers, RAG Pipelines, LLMs, Text Classification, Named Entity Recognition",
    },
    {
      title: "Data Engineering & Databases",
      icon: FaDatabase,
      description: "PostgreSQL, SQL, FAISS, ChromaDB, Pinecone, Vector DB, Pandas, NumPy",
    },
    {
      title: "Visualization & Analytics",
      icon: FaChartBar,
      description:
        "Matplotlib, Seaborn, Power BI, Kaggle, Data Analysis, Feature Engineering, EDA",
    },
    {
      title: "Backend & APIs",
      icon: FaServer,
      description: "Python, Flask, FastAPI, Java, C++, RESTful APIs, Full-Stack ML Deployment",
    },
  ];

  const techStackRow1 = [
    { name: "Python", icon: SiPython },
    { name: "SQL", icon: FaDatabase },
    { name: "Java", icon: FaJava },
    { name: "C++", icon: SiCplusplus },
    { name: "Flask", icon: SiFlask },
    { name: "FastAPI", icon: SiFastapi },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
  ];

  const techStackRow2 = [
    { name: "PyTorch", icon: SiPytorch },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "NLTK", icon: FaBrain },
    { name: "Hugging Face", icon: SiHuggingface },
    { name: "Kaggle", icon: SiKaggle },
    { name: "Vector DB", icon: FaDatabase },
    { name: "Pinecone", icon: FaDatabase },
    { name: "Matplotlib", icon: SiPlotly },
    { name: "Seaborn", icon: FaChartBar },
    { name: "Power BI", icon: FaChartBar },
  ];

  const MarqueeRow = ({ items, direction = 1 }: { items: any[], direction?: number }) => {
    return (
      <Box overflow="hidden" py={4} width="100%" position="relative">
        <MotionBox
          display="flex"
          animate={{
            x: direction > 0 ? [-1000, 0] : [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {[...items, ...items, ...items, ...items].map((tech, index) => (
            <HStack
              key={index}
              mx={4}
              px={6}
              py={3}
              bg="rgba(30, 30, 30, 0.6)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.1)"
              borderRadius="full"
              transition="all 0.3s"
              _hover={{
                bg: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-2px)",
              }}
            >
              <Icon as={tech.icon} color="white" boxSize={5} />
              <Text color="white" fontWeight="600" letterSpacing="0.05em" whiteSpace="nowrap">
                {tech.name}
              </Text>
            </HStack>
          ))}
        </MotionBox>
      </Box>
    );
  };


  return (
    <Box
      id="about"
      minH="100vh"
      py={20}
      bg="#000000"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle geometric patterns */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.03}
          backgroundImage="radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.5) 1px, transparent 0)"
          backgroundSize="40px 40px"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.02}
          backgroundImage="repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 21px)"
        />
        <Box
          position="absolute"
          top="-20%"
          right="-10%"
          w="800px"
          h="800px"
          borderRadius="50%"
          bgGradient="radial(circle, rgba(255, 255, 255, 0.03), transparent)"
          filter="blur(100px)"
        />
      </Box>

      <Container maxW="container.xl" position="relative">
        <VStack spacing={16} align="stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box textAlign="center">
              <Heading
                as="h2"
                size="2xl"
                mb={4}
                fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                color="white"
                fontWeight="700"
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                About
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                color="gray.400"
                maxW="4xl"
                mx="auto"
                lineHeight="1.8"
                letterSpacing="0.05em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                I am a Data Science and Machine Learning enthusiast with a strong
                foundation in building end-to-end intelligent systems. I have
                developed full-stack ML applications, including recommendation
                systems, credit risk models with explainable AI, and generative AI
                solutions using RAG and transformers. I focus on solving real-world
                problems by combining data, algorithms, and scalable system design.
              </Text>
            </Box>
          </motion.div>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {skills.map((skill, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  position="relative"
                  p={8}
                  bg="rgba(20, 20, 20, 0.8)"
                  backdropFilter="blur(20px)"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  borderRadius="2xl"
                  _hover={{
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
                  }}
                  transition="all 0.4s ease"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="3px"
                    bgGradient="linear(to-r, transparent, #ffffff, transparent)"
                    opacity={0.5}
                  />
                  <VStack
                    spacing={4}
                    align="start"
                    position="relative"
                    zIndex={1}
                  >
                    <HStack spacing={4}>
                      <Box
                        p={3}
                        borderRadius="xl"
                        bg="rgba(255, 255, 255, 0.1)"
                        border="2px solid"
                        borderColor="rgba(255, 255, 255, 0.3)"
                        boxShadow="0 8px 25px rgba(255, 255, 255, 0.1)"
                      >
                        <Icon as={skill.icon} w={8} h={8} color="white" />
                      </Box>
                      <Heading as="h3" size="md" color="white" fontWeight="700">
                        {skill.title}
                      </Heading>
                    </HStack>
                    <Text color="gray.300" lineHeight="1.7" fontSize="md">
                      {skill.description}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Tech Stack Marquee Section */}
          <VStack spacing={8} mt={16} width="100%">
            <VStack spacing={2} mb={4} textAlign="center">
              <Heading size="md" color="white" letterSpacing="0.2em" textTransform="uppercase">
                Core Tech Stack
              </Heading>
              <Box h="2px" w="50px" bg="white" />
            </VStack>
            
            <Box width="100%" position="relative">
              {/* Fade masks */}
              <Box
                position="absolute"
                left={0}
                top={0}
                bottom={0}
                w="150px"
                zIndex={2}
                bgGradient="linear(to-r, #000000, transparent)"
                pointerEvents="none"
              />
              <Box
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                w="150px"
                zIndex={2}
                bgGradient="linear(to-l, #000000, transparent)"
                pointerEvents="none"
              />

              <VStack spacing={4}>
                <MarqueeRow items={techStackRow1} direction={1} />
                <MarqueeRow items={techStackRow2} direction={-1} />
              </VStack>
            </Box>
          </VStack>


          {/* Education */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              p={10}
              bg="rgba(20, 20, 20, 0.8)"
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
              borderRadius="2xl"
              position="relative"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100px"
                h="100px"
                borderTop="3px solid"
                borderLeft="3px solid"
                borderColor="rgba(255, 255, 255, 0.3)"
                borderRadius="2xl 0 0 0"
              />
              <VStack spacing={6} align="start" position="relative" zIndex={1}>
                <HStack spacing={4}>
                  <Box
                    p={4}
                    borderRadius="xl"
                    bg="rgba(255, 255, 255, 0.1)"
                    border="2px solid"
                    borderColor="rgba(255, 255, 255, 0.3)"
                    boxShadow="0 8px 25px rgba(255, 255, 255, 0.1)"
                  >
                    <Icon as={FaGraduationCap} w={10} h={10} color="white" />
                  </Box>
                  <Heading as="h3" size="lg" color="white" fontWeight="700">
                    Education
                  </Heading>
                </HStack>
                <VStack align="start" spacing={4} color="gray.300">
                  <Text lineHeight="1.8" fontSize="md">
                    Pursuing{" "}
                    <strong style={{ color: "#ffffff", fontWeight: 700 }}>
                      B.Tech in Computer Engineering
                    </strong>{" "}
                    at{" "}
                    <strong style={{ color: "#e5e5e5", fontWeight: 700 }}>
                      Vidyalankar Institute of Technology
                    </strong>
                    . Maintaining a CGPA of{" "}
                    <strong style={{ color: "#ffffff", fontWeight: 700 }}>
                      9.3
                    </strong>{" "}
                    while actively working on ML/AI projects, building
                    end-to-end intelligent systems, and exploring cutting-edge
                    research in data science and machine learning.
                  </Text>
                  <HStack spacing={3} flexWrap="wrap" pt={2}>
                    <Badge
                      bg="rgba(255, 255, 255, 0.1)"
                      color="#ffffff"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.3)"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      Machine Learning
                    </Badge>
                    <Badge
                      bg="rgba(229, 229, 229, 0.1)"
                      color="#e5e5e5"
                      border="1px solid"
                      borderColor="rgba(229, 229, 229, 0.3)"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      Artificial Intelligence
                    </Badge>
                    <Badge
                      bg="rgba(212, 212, 212, 0.1)"
                      color="#d4d4d4"
                      border="1px solid"
                      borderColor="rgba(212, 212, 212, 0.3)"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      Data Science
                    </Badge>
                    <Badge
                      bg="rgba(163, 163, 163, 0.1)"
                      color="#a3a3a3"
                      border="1px solid"
                      borderColor="rgba(163, 163, 163, 0.3)"
                      fontSize="sm"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      Generative AI
                    </Badge>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
