import styled from "@emotion/styled";

export const Ul = styled.ul`
    overflow: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* background-color: rgb(13, 99, 94);
    padding: 10px;
    border-radius: 15px; */
    &::-webkit-scrollbar {
  padding-left: 10px;
  background: rgb(20, 150, 144);
  opacity: 1;
}
`;