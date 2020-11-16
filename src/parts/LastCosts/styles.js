import styled from 'styled-components';

import { orangeGradient, blueGradient } from '../../styles/reusable';

export const Container = styled.article`
  width: 100%;
  height: 100%;
  border: 1px #353b66 solid;
  border-radius: 8px;
  padding: 1.2rem 0;
  text-align: right;

  overflow: hidden;

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
  width: 100%;
  height: 11.5rem;

  margin: 0 auto;
  padding: 0 1.2rem;
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

export const ChartContainer = styled.div`
  width: 80%;
  height: 100%;

  position: absolute;
`;

export const Chart = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;

  &:after {
    content: '';
    width: 100%;

    border-bottom: 1px solid #5c659d;
    position: absolute;
    bottom: -1px;
    left: 0;
  }
`;

export const MonthData = styled.div`
  position: absolute;
  bottom: -24px;
  left: calc(${(props) => props.index} * 20%);
  width: 20%;

  text-align: center;
`;

export const Bars = styled.div`
  width: 25%;
  height: ${(props) => `${props.value}px`};
  background: ${(props) => (props.income ? blueGradient : orangeGradient)};

  display: inline-block;
`;

export const MonthLabel = styled.p`
  margin-top: 1rem;
`;
