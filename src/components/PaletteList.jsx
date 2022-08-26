import React from 'react';
import { withStyles } from '@mui/styles';
import { v4 as uuid } from 'uuid';
import MiniPalette from "./MiniPalette";

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
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

const PaletteList = ({ palettes, classes }) => {
    const paletteMap = palettes.map(palette =>
        <MiniPalette {...palette} key={uuid()}/>
    )

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                </nav>
                <div className={classes.palettes}>
                    {paletteMap}
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(PaletteList);