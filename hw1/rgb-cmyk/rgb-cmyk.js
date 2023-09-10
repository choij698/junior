const convert = (r,g,b) => {
  let c = 0, m = 0, y = 0, k = 0;

  const white = Math.max(r / 255, g / 255, b / 255);

  if (white === 0) {
    k = 1;
  } else {
    c = (white - r / 255) / white;
    m = (white - g / 255) / white;
    y = (white - b / 255) / white;
    k = 1 - white;
  }
  
  return [c,m,y,k];
}

export { convert };