import {LocalTime, ConvertDate, DateTime} from "./index"

const CGAuthTimeFlag = (startTime, endTime) {
    const today = LocalTime() 
    const todayDate = ConvertDate(today)
    const start = DateTime(todayDate, startTime)
    const end = DateTime(todayDate, endTime)
}