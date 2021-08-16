import React from 'react';
import styled from '@emotion/styled';
import { uiColors } from '@leafygreen-ui/palette';
import Icon from '@leafygreen-ui/icon';
import IconButton from '@leafygreen-ui/icon-button';
import { css } from '@leafygreen-ui/emotion';
import { useFeedbackState } from '../context';

const closeButtonAlignment = css`
  display: block;
  float: right;
`;

const CloseButton = ({ onClick, size = 'default', ...props }) => {
  const { abandon } = useFeedbackState();
  return (
    <IconButton
      className={closeButtonAlignment}
      aria-label="Close Feedback Form"
      onClick={() => abandon()}
      size={size}
      {...props}
    >
      <Icon size={size} glyph="X" />
    </IconButton>
  );
};

const Dot = styled('span')`
  height: 5px;
  width: 5px;
  background-color: ${(props) => (true ? `${uiColors.green.base}` : `${uiColors.gray.light2}`)};
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;

const DotSpan = styled('span')`
  padding-left: 33px;
`;

const StyledBar = styled('div')`
  text-align: center;
  padding-top: 8px;
`;

const ProgressBar = ({ children }) => {
  return (
    <StyledBar>
      <DotSpan>
        <Dot />
        <Dot />
        <Dot />
      </DotSpan>
      <CloseButton />
    </StyledBar>
  );
};

export default ProgressBar;
