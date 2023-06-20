import { describe, expect, it } from 'vitest'
import formatTrackTime from '@/helpers/formatTrackTime'

describe('formatTrackTime', () => {
  it('should format track time correctly', () => {
    expect(formatTrackTime(65)).toEqual('01:05')
    expect(formatTrackTime(3600)).toEqual('60:00')
    expect(formatTrackTime(120)).toEqual('02:00')
  })
})
