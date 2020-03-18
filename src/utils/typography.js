import Typography from "typography"
import elkGlenTheme from "typography-theme-elk-glen"

elkGlenTheme.baseFontSize = "18px" // was 20px.

const typography = new Typography(elkGlenTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
