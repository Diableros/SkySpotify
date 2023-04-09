import * as React from 'react'
import { Skeleton as SkeletonAntd } from 'antd'

type PropsType = {
  qty: number
}

const Skeleton = ({ qty }: PropsType) => {
  const skeletonArr = new Array(qty).fill(1)

  return (
    <>
      {skeletonArr.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SkeletonAntd key={index} active />
      ))}
    </>
  )
}

export default Skeleton
