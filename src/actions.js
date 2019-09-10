
//Const name
export const CURR_SECTION = "CURR_SECTION";

//Action creators
export function currSection(section) {
  return {
    type: CURR_SECTION,
    sect: section,
  }
}
