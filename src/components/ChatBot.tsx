import { useState } from 'react';
import { Box, IconButton, Input, VStack, Text, Flex, useDisclosure } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatBot = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm Soham's AI assistant. Ask me about his education, tech stack, projects, or how to contact him!", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(input);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  const getBotResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('education') || lowerQuestion.includes('college') || lowerQuestion.includes('university')) {
      return "Soham is pursuing a B.Tech in Computer Engineering at Vidyalankar Institute of Technology. He maintains an impressive CGPA of 9.3 and focuses on building end-to-end intelligent systems.";
    }
    
    if (lowerQuestion.includes('skills') || lowerQuestion.includes('stack') || lowerQuestion.includes('technologies') || lowerQuestion.includes('expertise')) {
      return "Soham's core tech stack includes:\n• Languages: Python, SQL, Java, C++\n• ML/AI: Scikit-learn, PyTorch, TensorFlow, Hugging Face, NLTK\n• Engineering: Pandas, NumPy, Vector DB (Pinecone)\n• Backend: Flask, FastAPI, PostgreSQL\n• Visualization: Matplotlib, Seaborn, Power BI";
    }
    
    if (lowerQuestion.includes('projects') || lowerQuestion.includes('work')) {
      return "Soham has developed several high-impact projects:\n1. Academic-Agent - LLM-based research assistant\n2. Medical-Diagnosis-System - Predictive healthcare analysis\n3. Credit-Risk-Model - Explainable AI for banking\n4. Recommendation-System - Hybrid movie filtering\n5. Resume-Screener - NLP-powered ATS scanner\n6. Student-Indicator - Academic trajectory analytics";
    }
    
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('hire') || lowerQuestion.includes('email') || lowerQuestion.includes('linkedin') || lowerQuestion.includes('github') || lowerQuestion.includes('phone')) {
      return "You can reach Soham here:\n• Email: sohampashilkar84@gmail.com\n• LinkedIn: linkedin.com/in/soham-pashilkar\n• GitHub: github.com/sohamnp06\n• Phone: +91 8419943679\n• Location: Dombivli, Thane";
    }

    if (lowerQuestion.includes('who') || lowerQuestion.includes('about')) {
      return "Soham Pashilkar is a Machine Learning Engineer and AI enthusiast passionate about solving real-world problems combining data, algorithms, and scalable system design.";
    }

    return "I can tell you about Soham's education, tech stack, projects, or contact information. What would you like to know?";
  };

  return (
    <Box position="fixed" bottom={0} right={0} zIndex={9999}>
      <IconButton
        aria-label="Chat"
        icon={<FaRobot />}
        position="fixed"
        bottom="2rem"
        right="2rem"
        borderRadius="full"
        size="lg"
        bgGradient="linear(135deg, #ffffff, #e5e5e5)"
        color="#000000"
        _hover={{
          transform: 'scale(1.1)',
          bgGradient: "linear(135deg, #e5e5e5, #d4d4d4)",
          boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)",
        }}
        onClick={onToggle}
        zIndex={9999}
        border="2px solid"
        borderColor="rgba(0, 0, 0, 0.2)"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.3 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: '6rem',
              right: '2rem',
              zIndex: 9999,
            }}
          >
            <Box
              width="300px"
              height="400px"
              bg="rgba(0, 0, 0, 0.95)"
              borderRadius="xl"
              overflow="hidden"
              border="2px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(10px)"
              boxShadow="0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.1)"
            >
              <Flex 
                p={3} 
                bgGradient="linear(135deg, #ffffff, #e5e5e5)"
                color="#000000"
                justify="space-between" 
                align="center"
              >
                <Text fontWeight="bold">Soham's AI Assistant</Text>
                <IconButton
                  aria-label="Close"
                  icon={<FaTimes />}
                  size="sm"
                  variant="ghost"
                  color="#000000"
                  onClick={onToggle}
                />
              </Flex>

              <VStack 
                h="calc(100% - 110px)" 
                p={4} 
                spacing={4} 
                overflowY="auto"
                css={{
                  '&::-webkit-scrollbar': {
                    width: '4px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'rgba(0, 0, 0, 0.1)',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '2px',
                  },
                }}
              >
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  >
                    <Box
                      alignSelf={msg.isBot ? 'flex-start' : 'flex-end'}
                      bg={msg.isBot ? 'rgba(255, 255, 255, 0.1)' : 'rgba(229, 229, 229, 0.2)'}
                      color="white"
                      p={3}
                      borderRadius="lg"
                      maxW="80%"
                      marginLeft={msg.isBot ? 0 : 'auto'}
                      whiteSpace="pre-line"
                      border="1px solid"
                      borderColor={msg.isBot ? 'rgba(255, 255, 255, 0.1)' : 'rgba(229, 229, 229, 0.2)'}
                    >
                      {msg.text}
                    </Box>
                  </motion.div>
                ))}
              </VStack>

              <Flex p={3} borderTop="1px solid" borderColor="rgba(255, 255, 255, 0.1)" bg="rgba(0, 0, 0, 0.8)">
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  bg="rgba(255, 255, 255, 0.1)"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.2)"
                  color="white"
                  _placeholder={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  mr={2}
                />
                <IconButton
                  aria-label="Send"
                  icon={<FaPaperPlane />}
                  onClick={handleSend}
                  bgGradient="linear(135deg, #ffffff, #e5e5e5)"
                  color="#000000"
                  _hover={{
                    transform: 'scale(1.05)',
                    bgGradient: "linear(135deg, #e5e5e5, #d4d4d4)",
                  }}
                />
              </Flex>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ChatBot;
