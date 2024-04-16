import styled from 'styled-components'

type Props = {
	src: string
	alt: string
}

export const Image = styled.img.attrs<Props>(
	({src, alt}) => ({
		src, alt
	})
)`
  width: 280px;
  height: 170px;
  margin: 10px;
  border-radius: 10px;
`