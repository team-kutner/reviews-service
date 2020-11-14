import React from 'react';
import styled from 'styled-components';

const ReviewsListItem = (props) => {
  // const {}
  return (
    <Container>
      <AvatarContainer>
        <AvatarImage src={'https://s3.amazonaws.com/uifaces/faces/twitter/maximsorokin/128.jpg'}/>
        <UsernameAndDateContainer>
          <Username>Bob</Username>
          <Date>October 2020</Date>
        </UsernameAndDateContainer>
      </AvatarContainer>

      <div>
        <TextContent>Great stay in Cottonwood. The kitchen has everything you need for an extended stay and the deck is great for grilling and enjoying views of the surrounding hills. Great neighbors i…</TextContent>
        <ReadMoreButton>read more</ReadMoreButton>
      </div>
    </Container>
  );
}

export default ReviewsListItem;

const ReadMoreButton = styled.button`
  font-size: inherit;
  font-style: inherit;
  font-variant: inherit;
  line-height: 24px;
  appearance: none;
  background: transparent;
  border: 0px;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  user-select: auto;
  color: ${props => props.theme.darkGray};
  text-decoration: underline;
  border-radius: 4px;
  font-weight: ${props => props.theme.mdWeight};
  outline: none;
  display: block;
`
const TextContent = styled.div`
  font-weight: ${props => props.theme.smWeight};
  font-size: ${props => props.theme.mdFont};
  line-height: 24px;
  word-break: break-word;
  color: ${props => props.theme.lightGray};
`


const Container = styled.div`
  width: 41.66%;
  margin-right: 8.33%;
  margin-bottom: 40px;
`;

const AvatarContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`
const AvatarImage = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
`
const UsernameAndDateContainer = styled.div`
  margin-left: 12px;
`
const Username = styled.div`
  color: ${props => props.theme.gray};
  /* font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif; */
  font-weight: ${props => props.theme.mdWeight};
  font-size: ${props => props.theme.mdFont};
  line-height: 20px;
`
const Date = styled.div`
  color: ${props => props.theme.lightGray};
  line-height: 20px;
  font-size: ${props => props.theme.smFont};
  font-weight: ${props => props.theme.smWeight};
`