export interface Series {
  name: string
  data: Array<{
    x: string
    y: string
  }>
}

export interface DynamicChart {
  chartType: string
  description: string
  series: Array<Series>
}

export interface Chart {
  'Meta Data': MetaDataType
  'Time Series (Daily)': string
}

export interface MetaDataType {
  '1. Information': string
  '2. Symbol': string
  '3. Last Refreshed': string
  '4. Output Size': string
  '5. Time Zone': string
}
