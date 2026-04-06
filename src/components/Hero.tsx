import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const roles = [
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Science Enthusiast",
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Typing animation effect
  useEffect(() => {
    const fullText = roles[currentRole];
    let currentIndex = 0;
    setDisplayText("");

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRole]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Cursor blink animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      bg="#000000"
      pt={20}
    >
      {/* Subtle background patterns */}
      <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex={0}>
        {/* Grid pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.03}
          backgroundImage="linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)"
          backgroundSize="60px 60px"
        />
        {/* Diagonal lines */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity={0.02}
          backgroundImage="repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255, 255, 255, 0.05) 100px, rgba(255, 255, 255, 0.05) 200px)"
        />
        {/* Radial gradient overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="radial(circle at 30% 50%, rgba(255, 255, 255, 0.03), transparent)"
        />
      </Box>

      <Container
        maxW="container.xl"
        position="relative"
        zIndex={1}
        px={{ base: 6, md: 8 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={12}
          alignItems="center"
          minH="80vh"
        >
          {/* Left Section - Text Content */}
          <VStack align="flex-start" spacing={8} textAlign="left">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Text
                fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                fontWeight="700"
                color="white"
                lineHeight="1"
                letterSpacing="0.05em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                SOHAM PASHILKAR
              </Text>
            </MotionBox>

            {/* Animated Role with Typing Effect */}
            <MotionBox
              key={currentRole}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              h="50px"
            >
              <Text
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="500"
                color="gray.300"
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                {displayText}
                <Box
                  as="span"
                  display="inline-block"
                  w="3px"
                  h="1em"
                  bg="#ffffff"
                  ml={2}
                  opacity={showCursor ? 1 : 0}
                  transition="opacity 0.3s"
                  verticalAlign="baseline"
                />
              </Text>
            </MotionBox>

            {/* Description - Systematic Restructuring */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              maxW="700px"
            >
              <VStack align="flex-start" spacing={3}>
                <HStack spacing={3}>
                  <Box w="8px" h="8px" borderRadius="full" bg="#ffffff" />
                  <Text
                    fontSize={{ base: "xs", md: "sm", lg: "md" }}
                    color="#ffffff"
                    fontWeight="600"
                    letterSpacing="0.05em"
                    textTransform="uppercase"
                  >
                    B.Tech in Computer Engineering
                  </Text>
                </HStack>
                <HStack spacing={3} pl={5}>
                  <Text
                    fontSize={{ base: "xs", md: "sm", lg: "md" }}
                    color="gray.400"
                    fontWeight="500"
                    letterSpacing="0.05em"
                    textTransform="uppercase"
                  >
                    Vidyalankar Institute of Technology
                  </Text>
                </HStack>
                <HStack spacing={3}>
                  <Box w="8px" h="8px" borderRadius="full" bg="#ffffff" opacity={0.7} />
                  <Text
                    fontSize={{ base: "xs", md: "sm", lg: "md" }}
                    color="gray.300"
                    fontWeight="500"
                    letterSpacing="0.05em"
                    textTransform="uppercase"
                  >
                    Building end-to-end ML applications with Python, PyTorch & Transformers
                  </Text>
                </HStack>
                <HStack spacing={3}>
                  <Box w="8px" h="8px" borderRadius="full" bg="#ffffff" opacity={0.4} />
                  <Text
                    fontSize={{ base: "xs", md: "sm", lg: "md" }}
                    color="gray.400"
                    fontWeight="500"
                    letterSpacing="0.05em"
                    textTransform="uppercase"
                  >
                    Passionate about Data Science & AI
                  </Text>
                </HStack>
              </VStack>
            </MotionBox>

            {/* Call-to-Action Button - Only Let's Talk */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  variant="outline"
                  borderColor="#ffffff"
                  color="#ffffff"
                  bg="transparent"
                  size="lg"
                  px={8}
                  py={6}
                  borderRadius="md"
                  fontSize="md"
                  fontWeight="600"
                  onClick={scrollToContact}
                  cursor="pointer"
                  _hover={{
                    bg: "#ffffff",
                    color: "#000000",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
                  }}
                  transition="all 0.3s ease"
                >
                  Let's Talk
                </Button>
              </HStack>
            </MotionBox>

            {/* Social Media Icons */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <HStack spacing={4}>
                <Box
                  as="a"
                  href="https://github.com/sohamnp06"
                  target="_blank"
                  rel="noopener noreferrer"
                  w="45px"
                  h="45px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor="#ffffff"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#ffffff"
                  _hover={{
                    bg: "#ffffff",
                    color: "#000000",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={FaGithub} boxSize={5} />
                </Box>
                <Box
                  as="a"
                  href="https://www.linkedin.com/in/soham-pashilkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  w="45px"
                  h="45px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor="#ffffff"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#ffffff"
                  _hover={{
                    bg: "#ffffff",
                    color: "#000000",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={FaLinkedin} boxSize={5} />
                </Box>
                <Box
                  as="a"
                  href="mailto:sohampashilkar84@gmail.com"
                  w="45px"
                  h="45px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor="#ffffff"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#ffffff"
                  _hover={{
                    bg: "#ffffff",
                    color: "#000000",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={FaEnvelope} boxSize={5} />
                </Box>
                <Box
                  as="a"
                  href="tel:+918419943679"
                  w="45px"
                  h="45px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor="#ffffff"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="#ffffff"
                  _hover={{
                    bg: "#ffffff",
                    color: "#000000",
                    transform: "translateY(-3px)",
                    boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={FaPhone} boxSize={5} transform="scaleX(-1)" />
                </Box>
              </HStack>
            </MotionBox>
          </VStack>

          {/* Right Section - Portrait with Glowing Lines */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            position="relative"
            display={{ base: "none", lg: "block" }}
          >
            <Box
              position="relative"
              w="100%"
              maxW="600px"
              mx="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* Circular Portrait Image - Bright and Colorful */}
              <Box
                position="relative"
                w={{ base: "350px", md: "450px", lg: "550px" }}
                h={{ base: "350px", md: "450px", lg: "550px" }}
                borderRadius="50%"
                overflow="hidden"
                boxShadow="0 0 0 4px rgba(255, 255, 255, 0.1), 0 20px 60px rgba(0, 0, 0, 0.5)"
                border="2px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
              >
                <Box
                  as="img"
                  src="/images/resume_pic.jpg"
                  alt="Soham Nitin Pashilkar"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  style={{
                    filter: "brightness(1.05) contrast(1.05)",
                    display: "block",
                  }}
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.currentTarget;
                    if (target.src !== 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%231a1a1a"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="80" fill="white"%3ESP%3C/text%3E%3C/svg%3E') {
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect width="100%25" height="100%25" fill="%231a1a1a"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="80" fill="white"%3ESP%3C/text%3E%3C/svg%3E';
                    }
                  }}
                />
              </Box>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
