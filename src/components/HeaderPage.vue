<template>
    <Header>
        <Logo>
            <img src="../assets/logo.png" alt="">
        </Logo>
        <HeaderText>
            <TextXX>Your Personal Task Manager..</TextXX>
            <TextS>🥳Turn Your Plans into Action!🫰😉</TextS>
        </HeaderText>
    </Header>
</template>

<script>
import { Header, HeaderText, Logo, TextS, TextXX } from '@/StyledComponents/StyledComponents';

export default {

    components : {
        TextS,
        TextXX,
        Header,
        Logo,
        HeaderText,
    }
    
}
</script>