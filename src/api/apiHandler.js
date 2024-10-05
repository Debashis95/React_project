import { axiosInstance } from './axiosInstance'
import { endPoints } from './endPoints'

export const getAllProducts = async () => {
  try {
    const { data } = await axiosInstance.get(`${endPoints.allProduct}`)
    return data
  } catch (error) {
    console.error(error)
  }
}
