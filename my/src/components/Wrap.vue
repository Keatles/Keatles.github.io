<template>
  <section>
    <div class="wrap">
      <h4>
        <strong>What are you working on?</strong>
        Dribbble is show and tell for designers.
        <span class="full-pitch-actions">
          <a text="Learn more" class="form-btn" href="/about">Learn more</a>
          <a class="form-sub" href="/signup">Sign up</a>
        </span>
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: 'wrap',
  data () {
    return {
      msg: 'dsaaaaaaa'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '../styles/util';
@import '../styles/common';
@import '../styles/base64';
section {
  @include flex-center;
  padding-top: 80px;
  padding-bottom: 30px;
  background-color:rgb(68,68,68);
  h4 {
    text-align: center;
    color:rgb(153,153,153);
    strong {
      color:#ffffff;
    }
    .form-btn {
      color:#fff;
      display:inline-block;
      height:38px;
      width:100px;
      line-height:38px;
      background:rgb(153,153,153);
      border-radius:5px;
      &:hover {
        background:rgb(136,136,136);
      }
    }
    .form-sub {
      color:#fff;
      display:inline-block;
      height:38px;
      width:70px;
      line-height:38px;
      background:rgb(238,108,159);
      border-radius:5px;

      &:hover {
        background: rgb(229,100,148);
      }
    }
  }
}
</style>
