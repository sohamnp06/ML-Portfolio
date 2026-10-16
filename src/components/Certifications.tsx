import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  Button,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaFilePdf,
} from "react-icons/fa";

const MotionBox = motion(Box);

const certificationsData = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    organization: "Deloitte Australia · Issued by Forage",
    date: "June 26th, 2026",
    period: "June 2026",
    certificateUrl: encodeURI("/journey/Deloitte Data Analytics Certificate.pdf"),
    tasks: [
      "Completed practical tasks in Data Analysis and Forensic Technology for Deloitte Australia.",
      "Analyzed complex manufacturing data to identify machine-downtime patterns and operational bottlenecks.",
      "Built an interactive Tableau KPI dashboard to visualize machine health, throughput, and maintenance schedules.",
      "Applied Excel validation rules and data integrity checks to accurately classify and audit workforce records.",
    ],
    skills: [
      "Data Analysis",
      "Forensic Technology",
      "Tableau",
      "Excel",
      "Exploratory Data Analysis (EDA)",
      "KPI Dashboards",
      "Pattern Recognition",
      "Data Validation",
    ],
  },
];

const Certifications = () => {
  return (
    <Box
      id="certifications"
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
          backgroundImage="radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.5) 1px, transparent 0)"
          backgroundSize="40px 40px"
        />
        <Box
          position="absolute"
          top="10%"
          right="-5%"
          w="600px"
          h="600px"
          borderRadius="50%"
          bgGradient="radial(circle, rgba(255, 255, 255, 0.04), transparent)"
          filter="blur(100px)"
        />
        <Box
          position="absolute"
          bottom="-10%"
          left="-5%"
          w="600px"
          h="600px"
          borderRadius="50%"
          bgGradient="radial(circle, rgba(255, 255, 255, 0.03), transparent)"
          filter="blur(100px)"
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
              <Heading
                as="h2"
                size="2xl"
                mb={4}
                fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
                color="white"
                fontWeight="700"
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontFamily="'Space Grotesk', sans-serif"
              >
                Certifications
              </Heading>
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
                Accredited industry simulations, technical certifications & verified credentials
              </Text>
            </Box>
          </motion.div>

          {/* Certification Cards */}
          {certificationsData.map((cert, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Box
                position="relative"
                p={{ base: 8, md: 12 }}
                bg="rgba(20, 20, 20, 0.85)"
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                borderRadius="2xl"
                _hover={{
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 20px 60px rgba(255, 255, 255, 0.08)",
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
                  bgGradient="linear(to-r, transparent, #ffffff, #d4d4d4, transparent)"
                  opacity={0.6}
                />

                {/* Corner accent */}
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

                <VStack spacing={8} align="stretch" position="relative" zIndex={1}>
                  {/* Top Bar with Role, Org and Action Button */}
                  <HStack
                    justify="space-between"
                    align={{ base: "start", md: "center" }}
                    flexDirection={{ base: "column", md: "row" }}
                    spacing={6}
                  >
                    <HStack spacing={5} align="center">
                      <Box
                        p={4}
                        borderRadius="xl"
                        bg="rgba(255, 255, 255, 0.1)"
                        border="2px solid"
                        borderColor="rgba(255, 255, 255, 0.3)"
                        boxShadow="0 8px 25px rgba(255, 255, 255, 0.1)"
                        flexShrink={0}
                      >
                        <Icon as={FaCertificate} w={10} h={10} color="white" />
                      </Box>
                      <VStack align="start" spacing={1}>
                        <HStack spacing={3} flexWrap="wrap">
                          <Badge
                            bg="rgba(255, 255, 255, 0.15)"
                            color="#ffffff"
                            border="1px solid"
                            borderColor="rgba(255, 255, 255, 0.4)"
                            fontSize="xs"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontWeight="700"
                            letterSpacing="0.08em"
                            textTransform="uppercase"
                          >
                            Verified Credential
                          </Badge>
                          <HStack spacing={1} color="gray.400" fontSize="xs">
                            <Icon as={FaCalendarAlt} boxSize={3} />
                            <Text>{cert.date}</Text>
                          </HStack>
                        </HStack>
                        <Heading
                          as="h3"
                          size="lg"
                          color="white"
                          fontWeight="700"
                          fontFamily="'Space Grotesk', sans-serif"
                          letterSpacing="0.02em"
                        >
                          {cert.title}
                        </Heading>
                        <Text
                          color="#d4d4d4"
                          fontSize="md"
                          fontWeight="600"
                          letterSpacing="0.05em"
                        >
                          {cert.organization}
                        </Text>
                      </VStack>
                    </HStack>

                    {/* View Certificate Button */}
                    <HStack spacing={3} w={{ base: "100%", md: "auto" }}>
                      <Link
                        href={cert.certificateUrl}
                        isExternal
                        w={{ base: "100%", md: "auto" }}
                        _hover={{ textDecoration: "none" }}
                      >
                        <Button
                          leftIcon={<FaFilePdf />}
                          rightIcon={<FaExternalLinkAlt />}
                          w={{ base: "100%", md: "auto" }}
                          h="48px"
                          px={6}
                          fontSize="sm"
                          fontWeight="600"
                          bg="rgba(255, 255, 255, 0.1)"
                          color="#ffffff"
                          border="1px solid"
                          borderColor="rgba(255, 255, 255, 0.3)"
                          borderRadius="xl"
                          _hover={{
                            bg: "rgba(255, 255, 255, 0.2)",
                            borderColor: "rgba(255, 255, 255, 0.6)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 25px rgba(255, 255, 255, 0.15)",
                          }}
                          transition="all 0.3s ease"
                        >
                          View Certificate
                        </Button>
                      </Link>
                    </HStack>
                  </HStack>

                  {/* Divider */}
                  <Box h="1px" bg="rgba(255, 255, 255, 0.1)" />

                  {/* Practical Tasks Completed */}
                  <VStack align="start" spacing={4}>
                    <Text
                      color="gray.400"
                      fontSize="xs"
                      fontWeight="700"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      fontFamily="'Space Grotesk', sans-serif"
                    >
                      Practical Tasks & Key Learnings
                    </Text>
                    <VStack align="start" spacing={3} w="100%">
                      {cert.tasks.map((task, i) => (
                        <HStack key={i} align="flex-start" spacing={3}>
                          <Icon
                            as={FaCheckCircle}
                            color="white"
                            boxSize={4}
                            mt={1}
                            flexShrink={0}
                          />
                          <Text color="gray.300" fontSize="md" lineHeight="1.8">
                            {task}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>

                  {/* Divider */}
                  <Box h="1px" bg="rgba(255, 255, 255, 0.1)" />

                  {/* Skills / Domain Competencies */}
                  <VStack align="start" spacing={3}>
                    <Text
                      color="gray.400"
                      fontSize="xs"
                      fontWeight="700"
                      letterSpacing="0.2em"
                      textTransform="uppercase"
                      fontFamily="'Space Grotesk', sans-serif"
                    >
                      Technologies & Practical Skills
                    </Text>
                    <HStack spacing={3} flexWrap="wrap">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          bg="rgba(255, 255, 255, 0.08)"
                          color="#ffffff"
                          border="1px solid"
                          borderColor="rgba(255, 255, 255, 0.2)"
                          fontSize="xs"
                          px={3}
                          py={1.5}
                          borderRadius="full"
                          fontWeight="600"
                          letterSpacing="0.05em"
                          mb={1}
                          _hover={{
                            bg: "rgba(255, 255, 255, 0.18)",
                            borderColor: "rgba(255, 255, 255, 0.4)",
                          }}
                          transition="all 0.2s"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Certifications;
