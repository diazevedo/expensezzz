import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    115deg,
    rgba(254, 109, 173, 1) 0%,
    rgba(252, 159, 53, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 2rem;

  img {
    width: 20rem;
    height: 8rem;
    display: block;
    margin: 1em auto;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 50rem;
    margin: 0 auto;

    button,
    input {
      height: 4.5rem;
      display: block;
      border: none;
      border-radius: 10px;
      margin-bottom: 10px;
      font-family: 'Muli', sans-serif;
      font-size: 1.4rem;
    }

    input {
      text-align: center;
      background: #fff;
      color: #43424b;

      &:focus {
        border: 1px solid rgba(0, 114, 255, 1);
      }
    }

    button {
      background: linear-gradient(
        180deg,
        rgba(0, 198, 255, 1) 0%,
        rgba(0, 114, 255, 1) 100%
      );
      color: #fff;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
      }
    }

    a {
      color: #1d84f8;
      font-size: 1.2rem;
      transition: all 0.25s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
