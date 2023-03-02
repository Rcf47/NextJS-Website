import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item.js'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
    <Section>
      <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
    A markdown note taking app
    </WorkGridItem>
    </Section>
    <Section>
    <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote} >
    Music recomendation app for IOS
    </WorkGridItem>
    </Section>
    </SimpleGrid>
    </Container>
  )
}

export default Works
