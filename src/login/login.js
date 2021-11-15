import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import googleLogin from "./apiLogin";


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginLeft: "50%",
      marginTop:"10%",
      marginInline:"auto",
    }, 
    h2:{
        marginLeft:"100px",
        marginBottom:"30px",
    },
    h3:{
        marginLeft:"20%",
        marginBlockStart: "auto",
    },
    accountCircle:{
        marginLeft:"162.5px",
        marginTop:"3%",
    },
    googleLogin:{
        marginLeft:"80px"
    }
});

const Login = props => {
    const { handleLogin } = props
    const classes = useStyles();
    
    const actionLoginGoogle = async () => {
        const resp = await googleLogin()
        if (resp){
            handleLogin(true)
        }else{
            alert("Usuario não autenticado, Por favor entre com sua conta google.")
        }
    }

    return (
        <>
             <Card className={classes.root}>
                <div>
                    <h2 className={classes.h2}> Projeto Gpask </h2>
                    <AccountCircleIcon className={classes.accountCircle}/>
                    <h3 className={classes.h3}>Faça login com sua conta </h3>
                </div>
                <CardActions>
                    <Button 
                        size="small" 
                        color="primary" 
                        className={classes.googleLogin}
                        onClick={actionLoginGoogle}
                    >
                        Login com o Google
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}


export default Login