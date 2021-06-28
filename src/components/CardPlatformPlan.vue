<template>
  <q-card flat square class="card-platform-plan text-center">
    <q-card-section>
      <div class="text-h6">Franquia</div>
      <div class="text-h2">{{ value.franquia }}</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="text-h6">Valor</div>
      <div class="text-h5">R$ {{ value.valor }}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions class="flex-center">
      <q-btn flat color="primary" :to="{ path: 'formulario' }">Adquirir</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "CardPlatformPlan",
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-platform-plan {
  flex: 0 0 250px;
}
</style>
