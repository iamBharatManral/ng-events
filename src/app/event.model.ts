export interface EventModel {
  id: number,
  name: string,
  date: Date,
  time: string,
  price: number,
  imageUrl: string,
  location?:{
    address: string,
    city: string,
    country: string
  },
  onlineUrl?: string,
  sessions: SessionModel[]
}

export interface SessionModel{
  id: number,
  name: string,
  presenter: string,
  duration: number,
  level: string,
  abstract: string,
  voters: string[]
}
