import styled from 'styled-components';

export const SectionWrap = styled.div`
  max-width: ${({ theme }) => theme.layout.container};
  margin: 0 auto;
  padding-left: clamp(1.5rem, 4vw, 3rem);
  padding-right: clamp(1.5rem, 4vw, 3rem);
`;