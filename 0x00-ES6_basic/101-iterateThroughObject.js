export default function iterateThroughObject(reportWithIterator) {
  let elemstr = ''; let
    i = 0;
  for (const elem of reportWithIterator) {
    // eslint-disable-next-line eqeqeq
    if (reportWithIterator.length - 1 == i) {
      elemstr += elem;
    } else {
      elemstr += `${elem} | `;
    }
    // eslint-disable-next-line no-plusplus
    i++;
  }
  return elemstr;
}
