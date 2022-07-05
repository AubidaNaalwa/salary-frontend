const HOUR_IN_MS = 3600000;

export const setWithExpiry = (key:string, value:any, ttl:number) => {
	const now = new Date()
    const ttlInMS = ttl * HOUR_IN_MS;
	const item = {
		value: value,
		expiry: now.getTime() + ttlInMS,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

export const getWithExpiry = (key: string) =>  {
	const itemStr = localStorage.getItem(key)
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key)
		return null
	}
	return item.value
}