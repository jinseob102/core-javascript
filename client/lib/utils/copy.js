





export function copy(text){
  return navigator.clipboard.writeText(text);
  //* navigator.clipboard.writeText(text); = promise이다!
}