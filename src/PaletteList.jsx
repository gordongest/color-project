import React from 'react';
import MiniPalette from "./MiniPalette";
import { withStyles } from '@mui/styles';
import { v4 as uuid } from 'uuid';

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "wrap"
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
}

const PaletteList = ({ palettes, classes }) =>
    <div className={classes.root}>
        <div className={classes.container}>
            <nav className={classes.nav}>
                <h1>React Colors</h1>
            </nav>
            <div className={classes.palettes}>
                {palettes.map(palette =>
                    <MiniPalette {...palette} key={uuid()}/>
                )}
            </div>
        </div>
    </div>

export default withStyles(styles)(PaletteList);