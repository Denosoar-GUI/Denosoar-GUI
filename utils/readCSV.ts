export default function readCSV(file: File){
  const data: [string, number[]][] = [];
  try{
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split('\n')
      const headers = lines[0].split(',');
      headers.forEach(e => data.push([e, []]));
      lines.forEach((e,i) => {
        if(i === 0) return;
        const line = e.split(',');
        line.forEach((e,i) => {
          data[i][1].push(Number(e));
        })
      })
    }
    return data;
  } catch (err) {
    return err.message;
  }
}
