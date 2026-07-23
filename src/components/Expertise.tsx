import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Icon,
  VStack,
  HStack,
  Circle,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaBrain,
  FaCode,
  FaChartBar,
  FaServer,
} from "react-icons/fa";
import {
  SiScikitlearn,
  SiTensorflow,
  SiFlask,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiFastapi,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";


const MotionBox = motion(Box);

const expertiseData = [
  {
    category: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: FaDatabase },
      { name: "Java", icon: FaCode },
      { name: "C++", icon: TbBrandCpp },
    ],
  },
  {
    category: "Data Analysis & Visualization",
    icon: FaChartBar,
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: FaChartBar },
      { name: "Seaborn", icon: FaChartBar },
      { name: "Power BI", icon: FaChartBar },
      { name: "Plotly", icon: FaChartBar },
      { name: "Jupyter", icon: SiJupyter },
    ],
  },
  {
    category: "Machine Learning & AI",
    icon: FaBrain,
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Hugging Face", icon: FaBrain },
      { name: "NLTK", icon: FaBrain },
      { name: "XGBoost", icon: FaBrain },
    ],
  },
  {
    category: "Backend & Database",
    icon: FaServer,
    skills: [
      { name: "Flask", icon: SiFlask },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "FAISS", icon: FaDatabase },
      { name: "Vector DB", icon: FaDatabase },
    ],
  },
];

const Expertise = () => {
  return (
    <Box
      id="expertise"
      minH="100vh"
      py={{ base: 16, md: 24 }}
      bg="#0a0a0a"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background patterns */}
      <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex={0}>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.02}
          backgroundImage="linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)"
          backgroundSize="40px 40px"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.03}
          backgroundImage="radial-gradient(circle at 40px 40px, rgba(255, 255, 255, 0.4) 1px, transparent 0)"
          backgroundSize="40px 40px"
        />
        <Box
          position="absolute"
          top="30%"
          right="20%"
          w="600px"
          h="600px"
          borderRadius="50%"
          bgGradient="radial(circle, rgba(255, 255, 255, 0.02), transparent)"
          filter="blur(120px)"
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
              Expertise
            </Heading>
            <Text
              color="gray.400"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              Skills and technologies I work with across data science, machine learning, and AI engineering.
            </Text>
          </VStack>
        </motion.div>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {expertiseData.map((category, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-4px)",
                }}
                transition="all 0.4s ease"
              >
                {/* Category Header */}
                <HStack spacing={4} mb={8}>
                  <Circle
                    size="60px"
                    bgGradient="linear(135deg, #ffffff, #e5e5e5)"
                    p={3}
                  >
                    <Icon as={category.icon} boxSize={8} color="black" />
                  </Circle>
                  <Heading size="lg" color="white" fontWeight="700">
                    {category.category}
                  </Heading>
                </HStack>

                {/* Skills as icon + name chips */}
                <Wrap spacing={3}>
                  {category.skills.map((skill, skillIndex) => (
                    <WrapItem key={skillIndex}>
                      <HStack
                        spacing={2}
                        px={4}
                        py={2}
                        bg="rgba(255, 255, 255, 0.06)"
                        border="1px solid"
                        borderColor="rgba(255, 255, 255, 0.15)"
                        borderRadius="lg"
                        _hover={{
                          bg: "rgba(255, 255, 255, 0.12)",
                          borderColor: "rgba(255, 255, 255, 0.35)",
                          transform: "translateY(-2px)",
                        }}
                        transition="all 0.25s ease"
                        cursor="default"
                      >
                        {skill.icon && (
                          <Icon as={skill.icon} boxSize={4} color="white" />
                        )}
                        <Text
                          color="white"
                          fontSize="sm"
                          fontWeight="600"
                          letterSpacing="0.03em"
                        >
                          {skill.name}
                        </Text>
                      </HStack>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Expertise;
