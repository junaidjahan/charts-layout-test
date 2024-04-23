export const serializeQuery = (
  params: Record<string, string | number | boolean | undefined>,
  prefix = ''
) => {
  const query: Array<string | undefined> = Object.keys(params).map((key) => {
    const value = params[key]

    if (params.constructor === Array) key = `${prefix}[]`
    else if (params.constructor === Object) key = prefix ? `${prefix}[${key}]` : key

    if (typeof value === 'object') return serializeQuery(value, key)
    else if (value) return `${key}=${encodeURIComponent(value)}`
  })

  return ([] as Array<string>).concat.apply([], query.filter((q) => q) as any).join('&')
}
