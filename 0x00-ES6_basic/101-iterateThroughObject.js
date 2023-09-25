export default function iterateThroughObject(reportWithIterator) {
   let elemstr = '', i = 0;
   for (const elem of reportWithIterator) {
        if (reportWithIterator.length - 1 == i) {
            elemstr += elem
        }
        else {
            elemstr += elem + ' | ';
        }
        i++;
   }
   return elemstr;
}
