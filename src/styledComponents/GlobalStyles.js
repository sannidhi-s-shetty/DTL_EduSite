import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}

header {
  color: ${({ theme }) => theme.colors.headerText};
}

.home {
  color: ${({ theme }) => theme.colors.headerText};
  display: flex;
  padding: 10px;
  justify-content: center;
}

.keypad {
  background-color:  ${({ theme }) => theme.colors.keypad};
}
.key, .operator {
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.key};
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.colors.keyShadow};
  color: ${({ theme }) => theme.colors.keyText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.numberKeyHover};
  }
}


.screen {
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.screen};
  color: ${({ theme }) => theme.colors.screenText};
}
.del, .reset, .solve,.func{
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.actionKey};
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.colors.actionKeyShadow};
  color: ${({ theme }) => theme.colors.actionKeyText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.actionKeyHover};
  }
}
.equals-key,.func {
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.equalsKey};
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.colors.equalsKeyShadow};
  color: ${({ theme }) => theme.colors.equalsKeyText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.equalKeyHover};
  }
}
.theme-value {
  background-color:  ${({ theme }) => theme.colors.keypad};
}

.theme-btn.active 
{
  background-color: ${({ theme }) => theme.colors.equalsKey};
  &:hover {
    background-color: ${({ theme }) => theme.colors.equalKeyHover};
  }
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px;
  background-color: #003049;
  overflow: hidden;
}
.navbar > div {
  display: flex;
  justify-content: space-between;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  border-radius: 10px;
  min-width: 160px;
  box-shadow: 0px 4px 10px 3px #fff;
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  border-radius: 10px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
  background-color: #a2d2ff;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.mainBtns {
  border-radius: 5px;
  padding: 10px 3px;
  margin: 3px;
  min-width: 100px;
  min-height: 40px;
  background-color: ${({ theme }) => theme.colors.key};
  ${'' /* box-shadow: 0 4px 0 0 ${({ theme }) => theme.colors.keyShadow}; */}
  color: ${({ theme }) => theme.colors.keyText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.numberKeyHover};
    box-shadow: 0px 4px 10px 3px #edede9;
    border: none;
  }
}

.video-container{
  min-width: 370px;
  padding: 2em;
}

.video-layout {
  margin: 20px;
  min-width: 30em;
  min-height: 15em;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 3px #edede9;
}

/* Card */
.cards-container{
    display: flex;
    overflow: auto;
}
.cards-container::-webkit-scrollbar {
    height: 0.1em;
}
.cards-container::-webkit-scrollbar-thumb{
    background-color: #aca590;
    border-radius: 2em;
}
.cards-container::-webkit-scrollbar-track{
    margin: 0 2em;
}
.card {
    background-color: #d9d9d9;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    max-width: 30rem;
    min-width: 20rem;
    max-height: 15rem;
    padding: 1em;
    margin: 3em;
    border-radius: 1.5em;
    overflow: auto;
    box-shadow: 5px 5px 20px;
}
.card:hover {
  background-color: #f7ede2;
  box-shadow: 5px 5px 20px 3px #fff;
}
.card::-webkit-scrollbar {
    width: .2em;
}
.card::-webkit-scrollbar-thumb{
    background-color: #aca590;
    border-radius: 4em;
}
.card::-webkit-scrollbar-track{
    margin: 15px 0;
}
.card-title {
    color: #312244;
    background-color: #90e0ef;
    margin: 1px 1px 20px;
    border-radius: 1em;
    padding: 0.5em;
}
.card-ul {
  padding: 1em;
  text-align: left;
  font-size: 150%;
}
.card-ul > li > a {
  text-decoration: none;
}

`;
