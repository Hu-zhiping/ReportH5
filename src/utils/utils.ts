export function getImg(imgUrl: string) {
  let url = `../assets/${imgUrl}.png`
  return new URL(url, import.meta.url).href
}
