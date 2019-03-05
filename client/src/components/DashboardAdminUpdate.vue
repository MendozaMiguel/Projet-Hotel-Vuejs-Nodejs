<template>
  <div>hzzlo</div>
</template>

<script>

export default {
  name: "DashboardAdminUpdate",
  props: ["id"],
  mounted: function() {
    console.log("The props are also available in JS:", this.id);
  }
};
</script>

