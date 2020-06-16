import styled from 'styled-components';
import { withStyles, Card as MUICard, Typography } from '@material-ui/core';
import { blueGrey, indigo, blue } from '@material-ui/core/colors';

export const Card = withStyles({
  root: {
    padding: 60,
    width: '50%',
    display: 'inline-block',
  },
})(MUICard);

export const CardTitle = withStyles({
  root: {
    fontSize: '24px',
    fontWeight: 300,
  },
})(Typography);

export const Background = styled.div`
  background-color: ${(props) => props.color || blue[300]};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
