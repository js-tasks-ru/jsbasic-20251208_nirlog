function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let newStr = str.slice(0, maxlength - 1);
    newStr = newStr + "…";
    str = newStr;
  }
  return str;
}
