import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import {makeStyles,createStyles} from "@material-ui/core/styles"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) =>
    createStyles({

      textField:{
        backgroundColor: "rgba(255,255,255,0.7)",
        marginTop: "5px",
      }
        // eslint-disable-next-line comma-dangle
    })
);

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
  const classes = useStyles()

  return(
    <Grid className={classes.grid} item xs={12} sm={half ? 6 : 12}>
      <TextField
        className={classes.textField}
        name={name}
        onChange={handleChange}
        variant="filled"
        color ="none"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        } : null}
      />
    </Grid>
  )
};

export default Input;