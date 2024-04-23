import { useAxios } from '@/composables'
import type { Chart } from '@/typings/chart.types'

export const useChartService = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL

  const { get } = useAxios(apiUrl)

  const getChartsData = async (query: string): Promise<Chart> => {
    return get(`query?${query}`)
  }

  return {
    getChartsData
  }
}
