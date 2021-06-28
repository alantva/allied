<template>
  <div class="flex flex-center full-width q-gutter-md group-platform-plan">
    <CardPlatformPlan
      v-for="(item, i) in getAllActive"
      :key="`CardPlatformPlan_${i}`"
      :value="item"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardPlatformPlan from "components/CardPlatformPlan";

export default {
  name: "GroupPlatformPlan",
  components: { CardPlatformPlan },
  computed: mapGetters({
    getAllActive: "plan/getAllActive",
  }),
};
</script>

<style lang="scss" scoped>
.group-platform-plan {
  min-width: 650px;
}
</style>
