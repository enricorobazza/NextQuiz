import styled from 'styled-components';

export const DottedButton = styled.button`
  background-color: #fafafa;
  border: 2px dotted #ddd;
  transition: background linear 200ms;

  &:hover {
    background-color: #eaeaea;
  }
`;
