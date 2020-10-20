import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: grid;
  margin-top: 5rem;

  grid-template-columns: [c-first] 74rem [c-second] 42rem [c-third] auto;
  grid-template-rows: 215px 240px 525px;
  grid-gap: 2.5rem;

  /** table*/
  & section:nth-child(2) {
    max-width: 74rem;
    grid-column-start: c-first;
    grid-row-start: 2;
    grid-row-end: 4;
  }

  & section:nth-child(4),
  & article {
    max-width: 42rem;
    grid-column-start: c-second;
  }

  & article {
    grid-row-start: 1;
  }

  & section:nth-child(4) {
    grid-row-start: 2;
    grid-row-end: 4;

    & > ul {
      margin-top: 0;
    }
  }

  & section:nth-child(5),
  section:nth-child(6) {
    grid-column-start: c-third;
  }

  & section:nth-child(5) {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  & section:nth-child(6) {
    margin-top: -5px;
  }
`;

export const Cards = styled.section`
  display: flex;

  & > div:first-child {
    margin-right: 2.8rem;
  }
`;
