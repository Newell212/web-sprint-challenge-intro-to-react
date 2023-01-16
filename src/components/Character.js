// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CharacterName = styled.h3`
    border: 2px solid;
    font-size: 1.9em;
    margin-left: -1.6em;
`;

const CharacterBirthYear = styled.h3`
    border: 1.7px solid;
    font-size: 1.5em;
    margin-left: -1.9em;
    margin-top: -3vh;
`;


const Character = (person) => {
    return (
            <CharacterWrapper>
                <CharacterName>{person.name}</CharacterName>
                <CharacterBirthYear>{person.birth_year}</CharacterBirthYear>
            </CharacterWrapper>
    )
};

export default Character;