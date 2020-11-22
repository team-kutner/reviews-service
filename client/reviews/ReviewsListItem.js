// import React, { useState } from 'react';
const {React} = window
const {useState} = React
// import styled, { css } from 'styled-components';
const {styled} = window
const {css} = styled


const ReviewsListItem = (props) => {
  const {modal, isComment=false} = props
  let {author: {username, avatar}, content, createdAt, comments=[]} = props.review
  const date = new window.Date(createdAt)
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  const [readMoreAvail, setReadMoreAvail] = useState(content.length > 180);



  return (
    <Container modal={modal} isComment={isComment}>
      <AvatarContainer>
        <AvatarImage src={avatar}/>
        <UsernameAndDateContainer>
          <Username>{isComment && 'Response from'} {username}</Username>
          <Date>{month} {year}</Date>
        </UsernameAndDateContainer>
      </AvatarContainer>

      <AllContentContainer isComment={isComment}>
        <TextContent>{readMoreAvail ? content.substring(0, 180) + '...' : content}</TextContent>
        {readMoreAvail && <ReadMoreButton onClick={() => setReadMoreAvail(false)}>read more</ReadMoreButton>}
      </AllContentContainer>
      {modal && !isComment && !!comments.length && <ReviewsListItem review={comments[0]} modal={modal} key={comments[0].id} isComment={true}/>}
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
  color: ${props => props.theme.gray};
`

const AllContentContainer = styled.div`
  ${props => props.isComment && css`
    margin-left: 68px;
  `}

`


const Container = styled.div`
  ${props => !props.modal && css`
    width: 41.66%;
    margin-right: 8.33%;
  `}

  ${props => !props.isComment && css`
    margin-bottom: 40px;
  `}

  ${props => props.isComment && css`
    margin-top: 30px !important;
    margin-left: 32px !important;
  `}
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