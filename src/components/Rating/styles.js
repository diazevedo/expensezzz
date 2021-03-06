import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 1.2rem;
  margin: 3rem 0;

  & > svg {
    margin-right: 0.25rem;
  }
`;

export const Rating = styled.div`
  width: 5rem;
  margin-right: 1rem;
  height: 3rem;
  border: #e7e8f2 solid 1px;
  display: inline-block;

  border-radius: 8px;
  text-align: center;
  line-height: 2.8rem;

  & > p {
    color: #ededf1;
    font-weight: 600;
  }
`;

export const ReviewsAmount = styled.p`
  display: inline-block;
  color: #5c659d;
  font-weight: 300;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1.6rem;
  margin-left: 1.5rem;
`;
