import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"

grandViewTheme.baseFontSize = "16px" // was 20px.

const typography = new Typography(grandViewTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
