import styled from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Container = styled.div`
  height: 100%;

  & section:not(:first-child),
  article {
    margin-top: 2rem;
  }

  @media ${device.mobileMedium} {
    /* max-width: 800px; */
  }

  @media ${device.laptop} {
    max-width: 98%;
    margin: 0 auto;

    display: grid;
    grid-gap: 2rem;
    grid-template-columns: [c-first] 34% [c-second] 34% [c-third] auto;

    grid-template-rows: 215px auto auto;

    & section:not(:first-child),
    article {
      margin-top: 0;
    }

    & section:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    & section:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 2;
    }

    & article {
      grid-column-start: 3;
      grid-row-start: 1;
    }
  }

  @media ${device.desktop} {
    /* max-width: 800px; */

    margin-top: 5rem;

    grid-template-columns: [c-first] 74rem [c-second] 42rem;
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
  }
`;

export const Cards = styled.section`
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;

  & > div:first-child {
    margin-right: 2rem;
  }

  @media ${device.laptop} {
    margin-bottom: 0;
  }
`;
