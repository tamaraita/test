import styled from 'styled-components';

export const ToolbarItem = styled.div`
    width: 28px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    box-shadow: 0px 1px 11px 1px rgba(15, 15, 15, 0.2);
    background-color: #34495e;
    color: #fff;
    font-size: 16px;
    font-family: Oxygen, sans-serif;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    ${props =>
    props.isActive &&
    `    transform: translateY(1px);
    color: #34495e;
    background-color: transparent;
    box-shadow: none;
    border: 1px solid #34495e;`}

    &:hover {
    transform: translateY(1px);
    color: #34495e;
    background-color: transparent;
    box-shadow: none;
    border: 1px solid #34495e;
    }
`;

export const Container = styled.div`
    display: flex;
    margin-right: 7px;
`;

export const PopUpBox = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 1px 11px 1px rgba(15, 15, 15, 0.2);
    cursor: pointer;
`;

export const BoxItem = styled.div`
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: Oxygen, sans-serif;
    transition: all 250ms ease-in-out;

    ${props =>
        props.isActive &&
        `    transform: translateY(1px);
        color: #34495e;
        background-color: transparent;
        box-shadow: none;
        border: 1px solid #34495e;`}
    
        &:hover {
        transform: translateY(1px);
        color: #34495e;
        background-color: transparent;
        box-shadow: none;
        border: 1px solid #34495e;
        }
`;