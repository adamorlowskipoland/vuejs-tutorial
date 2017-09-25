<template>
  <div>
    <component is="form-one"></component>
<!--  both components display the same now   -->
    <form-one></form-one>
  </div>
</template>

<script>
  import FormOne from './components/formHelper.vue'
  import FormTwo from './components/formHelper.vue'

  export default {
    components: {
      FormOne,
      FormTwo
    },
    data() {
    },
    methods: {}
  }
</script>
