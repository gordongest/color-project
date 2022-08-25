import React from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@mui/styles';

const styles = {
    root: {
        height: "180px",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "80%",
        width: "100%",
        borderRadius:"5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        position: "relative",
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    }
}

const MiniPalette = ({ colors, id, paletteName, emoji, classes }) => {
    const history = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        history(`/palette/${id}`);
    }

    const colorMap = colors.map(color =>
        <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={uuid()}
        />
    );

    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {colorMap}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);