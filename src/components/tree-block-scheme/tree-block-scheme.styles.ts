import styled from "styled-components";

export const BlockScheme = styled.div`
  margin: 5rem auto;
  text-align: center;

  ul {
    position: relative;
  }

  li {
    position: relative;
    display: table-cell;
    padding: 7rem 0;
    vertical-align: top;
  }
  /* _________ */
  li:before {
    outline: solid 1px #666;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  li:first-child:before {
    left: 50%;
  }
  li:last-child:before {
    right: 50%;
  }

  code {
    border-radius: 0.5rem;
    display: flex;
    position: relative;
    background-color: #383838;
    color: #d3d3d3;
    width: 23rem;
    height: 13.4rem;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: bold;
  }
  span {
    border-radius: 0.5rem;
    display: flex;
    position: relative;
    background-color: #383838;
    color: #d3d3d3;
    width: 23rem;
    height: 13.4rem;
    justify-content: center;
    align-items: center;
    margin: 7rem auto;
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: bold;
  }

  /* | */
  ul:before,
  code:before {
    outline: solid 1px #666;
    content: "";
    height: 7rem;
    left: 50%;
    position: absolute;
  }
  ul:before {
    top: -7rem;
  }
  code:before {
    top: -7rem;
  }
`;
