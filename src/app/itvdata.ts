export interface ITVData {
  name: string,
  status: string,
  premiered: string,
  network: [{
    name: string,
  }],
  image: [{
    medium: string
  }],
  rating: [{
    average: number
  }],
  runtime: number,
  schedule: [{
    time: string,
    days: string
  }]
}
