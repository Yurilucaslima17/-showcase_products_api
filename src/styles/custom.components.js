import styled from 'styled-components';
import {Layout, Menu} from "antd";

const {Header} = Layout;

export const HeaderMenu = styled(Menu)`
    &.ant-menu.ant-menu-dark .ant-menu-item-selected, &.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected{
        background-color: #E37222;
    }
    &.ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover{
        background-color: #B95A17;
    }
`;

export const MenuItem = styled(Menu.Item)`
&.ant-menu-item{
    background-color: #9dd0d4;
    color: #000000;
    font-weight: 700;
    font-size: 16px;
}
`;

export const HeaderComponent = styled(Header)`
    &.ant-layout-header {
        display: flex;
        justify-content: space-between;
        background-color: #07889B;
    }
`;

export const Logo = styled.img`
    &{
        max-height: 64px;
        max-width: 64px;
        object-fit: contain;
    }
`;

export const Shelf = styled.div`
    &{
        background-color: #EEAA7B;
    }
`;