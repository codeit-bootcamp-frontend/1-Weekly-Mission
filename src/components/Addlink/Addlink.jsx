import Button from "../Button/Button"
import IMAGES from "../../assets/images"

import {
  AddLinkBox,
  AddLinkContentBox,
  AddLinkImage,
  AddLinkInnerBox,
  AddLinkInputBox,
} from "./styles"

const Addlink = () => {
  return (
    <AddLinkBox>
      <AddLinkInputBox>
        <AddLinkInnerBox>
          <AddLinkImage src={IMAGES.link} alt="Link" />
          <AddLinkContentBox></AddLinkContentBox>
          <Button />
        </AddLinkInnerBox>
      </AddLinkInputBox>
    </AddLinkBox>
  )
}

export default Addlink
