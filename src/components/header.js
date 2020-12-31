import styles from "../styles/Home.module.css";
import {useRouter} from "next/router";
import {HeaderMenu, HeaderComponent, MenuItem, Logo} from "../styles/custom.components";


import imgHeader from "../assets/opensource.png";

export default function CustomHeader(props) {

    const router = useRouter();

    return (
        <HeaderComponent>
      <Logo src={imgHeader} />
      <HeaderMenu theme="dark" mode="horizontal" defaultSelectedKeys={props.selected || ['1']}>
        <MenuItem key="1" onClick={() => router.push('/')}>Home</MenuItem>
        <MenuItem key="2" onClick={() => router.push('/login')}>Account</MenuItem>
        <MenuItem key="3" onClick={() => router.push('/favorites')}>Favorites</MenuItem>
      </HeaderMenu>
    </HeaderComponent>
    )
}