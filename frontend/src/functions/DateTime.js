// date: 날짜 정보 str (ex, 2022-11-20)
// time: 시간 정보 str (ex, 15:20:00)
// 출력 > 2022년 11월 20일 15시 20분 00초의 date type data
function DateTime(date, time) {
  const dateTime = `${date}T${time}`
  return new Date(dateTime)
}
export default DateTime
