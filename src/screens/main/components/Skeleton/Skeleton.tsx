import * as S from './Skeleton.style'

type PropsType = {
  quantity: number
}

const Skeleton = ({ quantity }: PropsType) => {
  const skeletonArr = new Array(quantity).fill(1)

  return (
    <>
      {skeletonArr.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.TrackListRow key={index}>
          <S.TrackListAvatarCell />
          <S.TrackListTextCell flex={3} />
          <S.TrackListTextCell flex={2} />
          <S.TrackListTextCell flex={1.7} />
          <S.TrackListTextCell flex={0.5} />
        </S.TrackListRow>
      ))}
    </>
  )
}

export default Skeleton
