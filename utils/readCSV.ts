/**
 * Accepts a csv file as input and parses that element into an array of tuples, where 
 * the first element of the tuple is the header and the second is the corresponding array 
 * of data at each timepoint for that header. Returns a promise. 
 */
export default async function readCSV(file: File): Promise<[string, number[]][]>{
  const data: [string, number[]][] = [];
  const res: [string,number[]][] = await new Promise((resolve) => {
    const reader = new FileReader();
    let lines: string[];
    reader.readAsText(file);
    /**
     * On file load - parse the headers out of the first line and the data out of the remaining lines.
     */
    reader.onload = (e) => {
      const text = e.target?.result;
      if(text && typeof text === 'string') lines = text?.split('\n'); // Split the file on each new line.
      const headers = lines[0].split(','); // Split the header line.
      headers.forEach((e: string) => data.push([e, []])); // Create the tuple for each dataset. 
      lines.forEach((e: string, i: number) => { // Go through each csv line (representing one data point).
        if(i === 0) return; // Ignore the first line.
        const line = e.split(','); // Split each line on commas.
        line.forEach((e,i) => { // For each separate data piece in one csv line.
          data[i][1].push(Number(e)); // Push that piece of data to it's array.
        })
      })
      resolve(data); // Resolve your promise by returning the data.
    }
  })
  return res; // Return the promise.
}
