import Image from "next/image"
import { useColorModeValue } from "@chakra-ui/react"

const WolfIcon = () => {
  return (
    <Image src={`/images/wolf${useColorModeValue('', '-dark')}.png`
    } width={20} height={20} alt="logo" />
  )
}

export default WolfIcon
