<template>
    <header class="header">
        <div class="header-inner">
            <div class="logo">LOGO</div>
            <nav class="header-nav">
                <a href="#">Blog</a>
                <a href="#">Notes</a>
                <a href="#">Bookmark</a>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="less">
.header {
    background-color: #fefefe;
    &-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1440px;
        margin: 0 auto;

        .header-nav {
            padding: 30px 0;
            a {
                color:var(--color-a-text);
                text-decoration: none;
                margin-left: 15px;
            }
        }
    }
}
</style>