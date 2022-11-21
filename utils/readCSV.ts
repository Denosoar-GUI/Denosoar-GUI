export default async function readCSV(file: File): Promise<[string, number[]][]>{
  const data: [string, number[]][] = [];
  const res: [string,number[]][] = await new Promise((resolve) => {
    const reader = new FileReader();
    let lines: string[];
    reader.readAsText(file);
    reader.onload = (e) => {
      const text = e.target?.result;
      if(text && typeof text === 'string') lines = text?.split('\n');
      const headers = lines[0].split(',');
      headers.forEach((e: string) => data.push([e, []]));
      lines.forEach((e: string, i: number) => {
        if(i === 0) return;
        const line = e.split(',');
        line.forEach((e,i) => {
          data[i][1].push(Number(e));
        })
      })
      resolve(data);
    }
  })
  return res;
}
