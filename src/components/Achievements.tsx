import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaBrain, FaSearch, FaCode } from "react-icons/fa";

const MotionBox = motion(Box);

const Achievements = () => {
  const contributions = [
    {
      icon: FaBrain,
      title: "Resume Intelligence (RAG) Engine",
      description:
        "Engineered the complete pipeline for PDF extraction, semantic chunking, embedding generation, and ChromaDB-based retrieval.",
    },
    {
      icon: FaSearch,
      title: "Semantic Search Integration",
      description:
        "Implemented semantic search using static-retrieval-mrl-en-v1 to deliver accurate, context-aware resume retrieval for downstream AI modules.",
    },
    {
      icon: FaCode,
      title: "End-to-End Pipeline",
      description:
        "Developed the full data flow from raw PDF ingestion through embedding generation to ranked contextual retrieval results.",
    },
  ];

  return (
    <Box
      id="achievements"
      minH="100vh"
      py={20}
      bg="#000000"
      position="relative"
      overflow="hidden"
    >
      {/* Background patterns */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.03}
          backgroundImage="radial-gradient(circle at 2px 2px, rgba(255, 215, 0, 0.5) 1px, transparent 0)"
          backgroundSize="40px 40px"
        />
        <Box
          position="absolute"
          bottom="-20%"
          left="-10%"
          w="800px"
          h="800px"
          borderRadius="50%"
          bgGradient="radial(circle, rgba(255, 215, 0, 0.04), transparent)"
          filter="blur(100px)"
        />
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          w="600px"
          h="600px"
          borderRadius="50%"
          bgGradient="radial(circle, rgba(255, 165, 0, 0.03), transparent)"
          filter="blur(80px)"
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={16} align="stretch">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box textAlign="center">
              <HStack justify="center" spacing={4} mb={4}>
                <Icon as={FaTrophy} color="#FFD700" boxSize={8} />
                <Heading
                  as="h2"
                  size="2xl"
                  fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                  color="white"
                  fontWeight="700"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  fontFamily="'Space Grotesk', sans-serif"
                >
                  Achievements
                </Heading>
                <Icon as={FaTrophy} color="#FFD700" boxSize={8} />
              </HStack>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                color="gray.400"
                maxW="3xl"
                mx="auto"
                lineHeight="1.8"
                letterSpacing="0.05em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                Recognition for innovation and excellence in AI engineering
              </Text>
            </Box>
          </motion.div>

          {/* Main Achievement Card */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Box
              position="relative"
              p={{ base: 8, md: 12 }}
              bg="rgba(20, 20, 20, 0.9)"
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor="rgba(255, 215, 0, 0.3)"
              borderRadius="2xl"
              _hover={{
                borderColor: "rgba(255, 215, 0, 0.5)",
                boxShadow: "0 20px 60px rgba(255, 215, 0, 0.08)",
                transform: "translateY(-4px)",
              }}
              transition="all 0.4s ease"
              overflow="hidden"
            >
              {/* Top accent bar */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                h="3px"
                bgGradient="linear(to-r, transparent, #FFD700, #FFA500, transparent)"
              />

              {/* Corner decoration */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="120px"
                h="120px"
                borderTop="3px solid"
                borderLeft="3px solid"
                borderColor="rgba(255, 215, 0, 0.2)"
                borderRadius="2xl 0 0 0"
              />
              <Box
                position="absolute"
                bottom={0}
                right={0}
                w="120px"
                h="120px"
                borderBottom="3px solid"
                borderRight="3px solid"
                borderColor="rgba(255, 215, 0, 0.2)"
                borderRadius="0 0 2xl 0"
              />

              <VStack spacing={8} align="stretch" position="relative" zIndex={1}>
                {/* Header */}
                <HStack spacing={5} flexWrap="wrap">
                  <Box
                    p={4}
                    borderRadius="xl"
                    bg="rgba(255, 215, 0, 0.1)"
                    border="2px solid"
                    borderColor="rgba(255, 215, 0, 0.4)"
                    boxShadow="0 8px 25px rgba(255, 215, 0, 0.15)"
                    flexShrink={0}
                  >
                    <Icon as={FaMedal} w={10} h={10} color="#FFD700" />
                  </Box>
                  <VStack align="start" spacing={1} flex={1}>
                    <HStack spacing={3} flexWrap="wrap">
                      <Badge
                        bg="rgba(255, 215, 0, 0.15)"
                        color="#FFD700"
                        border="1px solid"
                        borderColor="rgba(255, 215, 0, 0.4)"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontWeight="700"
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                      >
                        🥉 2nd Runner-Up
                      </Badge>
                      <Badge
                        bg="rgba(255, 255, 255, 0.08)"
                        color="gray.300"
                        border="1px solid"
                        borderColor="rgba(255, 255, 255, 0.2)"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontWeight="600"
                        letterSpacing="0.08em"
                      >
                        2026
                      </Badge>
                    </HStack>
                    <Heading
                      as="h3"
                      size="lg"
                      color="white"
                      fontWeight="700"
                      fontFamily="'Space Grotesk', sans-serif"
                      letterSpacing="0.02em"
                    >
                      TCS Technology Day 2026 – AI Hackathon
                    </Heading>
                    <Text color="gray.400" fontSize="sm" letterSpacing="0.05em" textTransform="uppercase">
                      Tata Consultancy Services · National Level
                    </Text>
                  </VStack>
                </HStack>

                {/* Divider */}
                <Box h="1px" bg="rgba(255, 215, 0, 0.15)" />

                {/* Project Description */}
                <VStack align="start" spacing={4}>
                  <Heading
                    as="h4"
                    size="md"
                    color="#FFD700"
                    fontWeight="600"
                    letterSpacing="0.05em"
                    textTransform="uppercase"
                    fontFamily="'Space Grotesk', sans-serif"
                  >
                    AI Interview Trust Engine
                  </Heading>
                  <Text color="gray.300" lineHeight="1.9" fontSize={{ base: "sm", md: "md" }}>
                    Built an{" "}
                    <strong style={{ color: "#ffffff" }}>
                      explainable AI solution
                    </strong>{" "}
                    designed to assist interviewers in validating candidate claims by analyzing resume
                    information, interview responses, and behavioral signals. The system leverages{" "}
                    <strong style={{ color: "#FFD700" }}>
                      Retrieval-Augmented Generation (RAG)
                    </strong>
                    , semantic search, vector embeddings, and behavioral analysis to retrieve relevant
                    resume evidence, identify knowledge inconsistencies, and provide contextual insights
                    while keeping the final hiring decision with the interviewer.
                  </Text>
                </VStack>

                {/* Divider */}
                <Box h="1px" bg="rgba(255, 255, 255, 0.08)" />

                {/* My Contribution */}
                <VStack align="start" spacing={6}>
                  <Heading
                    as="h4"
                    size="sm"
                    color="white"
                    fontWeight="700"
                    letterSpacing="0.15em"
                    textTransform="uppercase"
                    fontFamily="'Space Grotesk', sans-serif"
                  >
                    My Contribution
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} w="100%">
                    {contributions.map((item, index) => (
                      <MotionBox
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          p={6}
                          bg="rgba(30, 30, 30, 0.8)"
                          border="1px solid"
                          borderColor="rgba(255, 255, 255, 0.08)"
                          borderRadius="xl"
                          h="100%"
                          _hover={{
                            borderColor: "rgba(255, 215, 0, 0.3)",
                            bg: "rgba(40, 40, 30, 0.9)",
                            transform: "translateY(-4px)",
                          }}
                          transition="all 0.3s ease"
                        >
                          <VStack align="start" spacing={3}>
                            <Box
                              p={2}
                              borderRadius="lg"
                              bg="rgba(255, 215, 0, 0.08)"
                              border="1px solid"
                              borderColor="rgba(255, 215, 0, 0.2)"
                            >
                              <Icon as={item.icon} boxSize={5} color="#FFD700" />
                            </Box>
                            <Text
                              color="white"
                              fontWeight="700"
                              fontSize="sm"
                              letterSpacing="0.03em"
                              lineHeight="1.4"
                            >
                              {item.title}
                            </Text>
                            <Text color="gray.400" fontSize="sm" lineHeight="1.7">
                              {item.description}
                            </Text>
                          </VStack>
                        </Box>
                      </MotionBox>
                    ))}
                  </SimpleGrid>
                </VStack>

                {/* Divider */}
                <Box h="1px" bg="rgba(255, 255, 255, 0.08)" />

                {/* Tech Stack */}
                <VStack align="start" spacing={4}>
                  <Text
                    color="gray.500"
                    fontSize="xs"
                    fontWeight="700"
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                    fontFamily="'Space Grotesk', sans-serif"
                  >
                    Tech Stack
                  </Text>
                  <HStack spacing={3} flexWrap="wrap">
                    {[
                      "Python",
                      "FastAPI",
                      "PyMuPDF",
                      "ChromaDB",
                      "Sentence Transformers",
                      "static-retrieval-mrl-en-v1",
                      "RAG",
                      "Semantic Search",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        bg="rgba(255, 255, 255, 0.06)"
                        color="gray.300"
                        border="1px solid"
                        borderColor="rgba(255, 255, 255, 0.12)"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontWeight="500"
                        letterSpacing="0.05em"
                        mb={1}
                        _hover={{
                          bg: "rgba(255, 215, 0, 0.08)",
                          borderColor: "rgba(255, 215, 0, 0.3)",
                          color: "#FFD700",
                        }}
                        transition="all 0.2s"
                        cursor="default"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default Achievements;
