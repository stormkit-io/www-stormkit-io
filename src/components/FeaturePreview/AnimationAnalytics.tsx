import { useEffect, useState } from 'react'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from 'recharts'
import Browser from '~/components/Browser'
import Box from '@mui/material/Box'

const rawData = [
  { name: '2023-12-06 11:00', total: 5, unique: 4 },
  { name: '2023-12-06 12:00', total: 8, unique: 7 },
  { name: '2023-12-06 13:00', total: 7, unique: 6 },
  { name: '2023-12-06 14:00', total: 11, unique: 9 },
  { name: '2023-12-06 15:00', total: 5, unique: 4 },
  { name: '2023-12-06 16:00', total: 15, unique: 9 },
  { name: '2023-12-06 17:00', total: 6, unique: 5 },
  { name: '2023-12-06 18:00', total: 7, unique: 6 },
  { name: '2023-12-06 19:00', total: 15, unique: 14 },
  { name: '2023-12-06 20:00', total: 6, unique: 5 },
  { name: '2023-12-06 21:00', total: 5, unique: 4 },
  { name: '2023-12-06 22:00', total: 5, unique: 5 },
  { name: '2023-12-06 23:00', total: 8, unique: 5 },
  { name: '2023-12-07 00:00', total: 12, unique: 11 },
  { name: '2023-12-07 01:00', total: 7, unique: 6 },
  { name: '2023-12-07 02:00', total: 9, unique: 7 },
  { name: '2023-12-07 03:00', total: 9, unique: 7 },
  { name: '2023-12-07 04:00', total: 4, unique: 3 },
  { name: '2023-12-07 05:00', total: 6, unique: 5 },
  { name: '2023-12-07 06:00', total: 6, unique: 5 },
  { name: '2023-12-07 07:00', total: 13, unique: 7 },
  { name: '2023-12-07 08:00', total: 15, unique: 8 },
  { name: '2023-12-07 09:00', total: 15, unique: 6 },
  { name: '2023-12-07 10:00', total: 11, unique: 9 },
].map(({ name, total, unique }) => ({
  name,
  total: total * 100,
  unique: unique * 100,
}))

export default function AnimationAnalytics() {
  const [enabled, setEnabled] = useState(false)
  const [data, setData] = useState(rawData)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEnabled(!enabled)
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [enabled])

  useEffect(() => {
    const interval = setInterval(() => {
      setData(
        data.map((d) => {
          d.unique = Math.random() * 1000
          d.total = Math.random() * 1000
          return d
        })
      )
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Browser>
        <Box sx={{ height: 300, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 5,
                left: -18,
                bottom: 10,
              }}
            >
              <CartesianGrid horizontalPoints={[0]} stroke="#181329" />
              <YAxis
                tick={{
                  fill: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 12,
                }}
              />
              <Area
                type="linear"
                dataKey="total"
                stroke="#6048b0a9"
                fill="#1c499ca9"
                dot
              />
              <Area
                type="linear"
                dataKey="unique"
                stroke="#6048b0a9"
                fill="#a048b0a9"
                dot
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Browser>
    </Box>
  )
}
