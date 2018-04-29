import { CHANGE_AUTH } from "./types"

export const authenticate = (isLoggedIn) => {
  console.log("AUTO AUTH")
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}