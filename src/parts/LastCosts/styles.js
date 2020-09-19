import styled from 'styled-components';

import { orangeGradient, blueGradient } from '../../styles/reusable';

export const Container = styled.article`
  width: 41.5rem;
  height: 21rem;
  border: 1px #353b66 solid;
  border-radius: 8px;
  padding: 1.2rem 0;
  text-align: right;

  & * {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1.2rem;
    color: #5c659d;
  }
`;

export const Label = styled.p`
  display: inline-block;
  margin: 1rem 1.2rem 0.5rem;

  &:before {
    content: '';
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    margin-right: 2px;
    background: ${(props) => (props.income ? blueGradient : orangeGradient)};
    margin-right: 5px;
    line-height: 0.5rem;
  }
`;

export const ChartContent = styled.div`
  width: 38.5rem;
  height: 11.5rem;
  margin: 0 auto;
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  position: relative;
`;

export const Line = styled.div`
  position: relative;
  height: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DottedLine = styled.div`
  width: 90%;
  height: 0.1rem;
  background-image: linear-gradient(to right, transparent 60%, #5c659d 00%);
  background-size: 20px 100%;
  font-size: 1.2rem;
`;

export const Chart = styled.div`
  position: absolute;
  width: 85%;
  height: 100%;
  margin-right: 8px;
  border-bottom: 1px solid #5c659d;
  font-size: 1.2rem;
`;

export const MonthData = styled.div`
  position: absolute;
  bottom: -24px;
  left: calc(${(props) => props.index} * 50px);
`;

export const Bars = styled.div`
  width: 1.9rem;
  height: ${(props) => `${props.value}px`};
  background: ${(props) => (props.income ? blueGradient : orangeGradient)};

  display: inline-block;
`;

export const MonthLabel = styled.p`
  margin-top: 1rem;
  text-align: center;
`;
