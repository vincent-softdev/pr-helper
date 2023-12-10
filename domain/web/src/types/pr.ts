export interface IPR {
    name: string
    type: string
    code: string
    waiting_time: number
    min_stay: number
    max_stay: number
    cost: number
    condition: string
    ability: string
    connect_with?: string[]
  }