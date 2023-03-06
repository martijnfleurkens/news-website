import Papa, { ParseResult } from 'papaparse'

const fetchNews = () => {
  return new Promise((resolve, reject) => {
    //Source
    const sourceFile = './newsSource.csv'

    //Expected data
    type Data = {
      id: string
      title: string
      popularity: string
      timestamp: string
    }

    //Retrieve CSV and turn into JSOn
    Papa.parse(sourceFile, {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ';',
      // encoding: 'iso-8859-1',
      complete: (results: ParseResult<Data>) => {
        //return results
        resolve(results.data)
      }
    })
  })
}

export default {
  fetchNews
}
