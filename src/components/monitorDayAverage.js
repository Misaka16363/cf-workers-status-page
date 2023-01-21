import { locations } from '../functions/locations'

export default function MonitorDayAverage({ location, avg }) {
  return (
    <>
      <br />
      <small>
        {locations[location] || location}: {avg}毫秒
      </small>
    </>
  )
}
