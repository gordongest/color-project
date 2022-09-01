import sizeHelpers from "./sizeHelpers";

export default {
    createStyle(className, size, cssProp, cssTerm) {
        return {
            [`${className}`]: {
                [`${sizeHelpers.down(size)}`]: {
                    [`${cssProp}`]: [`${cssTerm}`]
                }
            }
        }
    }
}