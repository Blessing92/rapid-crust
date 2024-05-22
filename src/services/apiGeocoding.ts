import { CoordinatePosition } from "../types"

export async function getAddress(position: CoordinatePosition) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.latitude}&longitude=${position.longitude}`,
  )
  if (!res.ok) throw Error("Failed getting address")

  const data = await res.json()
  return data
}
