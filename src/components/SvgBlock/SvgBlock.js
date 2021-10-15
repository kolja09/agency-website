// This is SvgBlock component, It will render svgs like in the services section.

import {RightBlock} from "./SvgBlockElements";

const SvgBlock = ({svg}) => {
  const SvgIcon = require(`../../assets/${svg}`).default;
  return <RightBlock>
    <img src={SvgIcon} alt='Services' />
  </RightBlock>;
};

export default SvgBlock;
