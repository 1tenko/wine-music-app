import styled from "styled-components";

export const SongContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 20%;
    border-radius: 50%;
  }
  h2 {
    padding: 3rem 1rem 1rem 1rem;
  }
  h3 {
    font-size: 1rem;
    color: #d6d3d1;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 50%;
    }
  } ;
`;
