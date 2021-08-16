import React from 'react';
import styled from '@emotion/styled';
import LeafygreenCard from '@leafygreen-ui/card';
import { uiColors } from '@leafygreen-ui/palette';
import { useFeedbackState } from './context';
import { displayNone } from '../../../utils/display-none';

export default function FeedbackTab(props) {
  const { feedback, initializeFeedback } = useFeedbackState();
  return (
    !feedback && (
      <Container css={displayNone.onMobileAndTablet} onClick={() => initializeFeedback()}>
        Share Feedback
      </Container>
    )
  );
}

const Container = styled(LeafygreenCard)`
  bottom: -6px;
  cursor: pointer;
  padding: 12px;
  position: fixed;
  right: 42px;
  user-select: none;
  z-index: 9;
  font-weight: 600;
  color: ${uiColors.green.dark1};
`;
