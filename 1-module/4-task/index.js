function checkSpam(str) {
  let status = false;
  if (str) {
    str = str.toLowerCase();
    if (str.includes('1xbet') || str.includes('xxx')) {
      status = true;
    }
  }
  return status;
}