import { useChartService } from '@/services'
import type { Chart, DynamicChart } from '@/typings/chart.types'
import { computed, ref, type Ref } from 'vue'

export const useHome = () => {
  const { getChartsData } = useChartService()

  const chartsData: Ref<Array<Chart>> = ref([])
  const chartTypes: Array<string> = ['LineChart', 'BarChart', 'CandleStickChart']
  const search: Ref<string> = ref('')

  const mapLineChartData = (chart: Chart) => {
    return Object.entries(chart?.['Time Series (Daily)']).map((entry: any) => {
      return {
        x: entry[0],
        y: entry[1]?.['4. close']
      }
    })
  }
  const mapCandleStickData = (chart: Chart) => {
    return Object.entries(chart?.['Time Series (Daily)']).map((entry: any) => {
      return {
        x: entry[0],
        y: Object.values(entry[1])
      }
    })
  }

  const mapBarChartData = (chart: Chart) => {
    return Object.entries(chart?.['Time Series (Daily)'])
      ?.filter((_, index) => {
        return index < 10
      })
      ?.map((entry: any) => {
        return {
          x: entry[0],
          y: entry[1]?.['4. close']
        }
      })
  }

  const chartMethods: any = {
    LineChart: mapLineChartData,
    BarChart: mapBarChartData,
    CandleStickChart: mapCandleStickData
  }

  const plotChart = computed<Array<DynamicChart>>(() => {
    return chartsData.value
      ?.filter((chart) => {
        if (search.value.length) {
          return chart?.['Meta Data']['2. Symbol']
            .toLowerCase()
            .includes(search.value.toLowerCase())
        }
        return chart
      })
      ?.map((chart): Array<DynamicChart> => {
        return chartTypes?.map((type: any) => {
          return {
            chartType: type,
            description: chart['Meta Data']['1. Information'],
            title: chart['Meta Data']['2. Symbol'],
            lastRefreshed: chart['Meta Data']['3. Last Refreshed'],
            series: [
              {
                name: chart?.['Meta Data']?.['2. Symbol'],
                data: chartMethods[type](chart)
              }
            ]
          }
        })
      })
      .flat()
  })

  const fetchChartsData = async () => {
    try {
      const symbols = ['MSFT', 'RELIANCE.BSE', 'IBM', '000002.SHZ', 'SHOP.TRT']
      const allRequests: Array<Promise<Chart>> = symbols.map((req): Promise<Chart> => {
        return getChartsData(`function=TIME_SERIES_DAILY&symbol=${req}&apikey=demo`)
      })

      const response: Array<PromiseSettledResult<Chart>> = await Promise.allSettled(allRequests)
      chartsData.value = response
        ?.filter((res: PromiseSettledResult<Chart>) => {
          return (
            res?.status === 'fulfilled' &&
            'Meta Data' in res.value &&
            'Time Series (Daily)' in res.value
          )
        })
        ?.map((res: PromiseSettledResult<Chart> | any) => res?.status && res.value)
    } catch (error) {
      console.error('Error', error)
    }
  }

  return {
    search,
    plotChart,
    fetchChartsData
  }
}
