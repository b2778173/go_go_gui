import request from "./request"

export function getAllWatchlist(): Promise<any> {
  const url = `/watchlist/getAllWatchlist`
  return request.get(url)
}

// Add watchlist
export function addWatchlist(req: {
  currency: string,
  description: string,
  displaySymbol: string,
  figi: string,
  mic: string,
  symbol: string,
  type: string }
): Promise<any> {
  const url = `/watchlist/addWatchlist`
  return request.post(url, req)
}

export function rmWatchlist(symbol: string): Promise<any> {
  const url = `/watchlist/rmWatchlist`
  return request.post(url, { symbol })
}

// Resource https://financialmodelingprep.com/developer/docs/stock-ticker-symbol-lookup-api/
export function getSymbolList(): Promise<any> {
  const url = `/watchlist/getSymbolList`
  return request.get(url)
}
