import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a developer.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vadim Cherepanov
          </Heading>
          <p>I love what I do</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/vadim-min.png"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Paragraph{' '}
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
        </Paragraph>
        <Box alighn="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorSheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1988</BioYear>
          Born in Sosnovoborsk, Siberia.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          MyBiography
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
