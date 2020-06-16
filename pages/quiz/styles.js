import {
  Button as MUIButton,
  withStyles,
  Card as MUICard,
  Typography,
  CardActions as MUICardActions,
} from '@material-ui/core';
import { blueGrey, indigo, blue } from '@material-ui/core/colors';
import styled from 'styled-components';

export const Button = withStyles({
  root: {
    backgroundColor: blueGrey[800],
    color: 'white',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: blueGrey[900],
    },
  },
})(MUIButton);

export const QuestionTitle = withStyles({
  root: {
    fontSize: '17px',
    color: blueGrey[900],
    marginBottom: 10,
  },
})(Typography);

export const CardActions = withStyles({
  root: {
    display: 'block',
  },
})(MUICardActions);

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
