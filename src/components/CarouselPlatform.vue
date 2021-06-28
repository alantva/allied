<template>
  <q-carousel
    v-model="slide"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    fullscreen
    control-color="white"
    navigation
    padding
    arrows
    height="300px"
    class="bg-primary shadow-1"
  >
    <q-carousel-slide
      v-for="(item, i) in getAll"
      :key="`CarouselSlide_${i}`"
      :name="item.sku"
      class="column no-wrap flex-center"
    >
      <q-icon
        v-if="item.sku === 'TBT01'"
        name="tablet"
        color="white"
        size="128px"
      />
      <q-icon
        v-if="item.sku === 'CPT02'"
        name="computer"
        color="white"
        size="128px"
      />
      <q-icon
        v-if="item.sku === 'WF03'"
        name="wifi"
        color="white"
        size="128px"
      />
      <GroupPlatformPlan class="q-mt-lg" :value="item" />
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from "vue";
import { Loading } from "quasar";
import { mapActions, mapGetters, useStore } from "vuex";
import GroupPlatformPlan from "components/GroupPlatformPlan";

export default {
  name: "CarouselPlatform",
  components: { GroupPlatformPlan },
  computed: mapGetters({
    getAll: "platform/getAll",
  }),
  watch: {
    slide: {
      immediate: true,
      handler(val) {
        if (val) {
          Loading.show();
          return this.fetchAllByPlatformId(val).finally(() => {
            Loading.hide();
          });
        }
      },
    },
  },
  methods: {
    ...mapActions({
      fetchAllByPlatformId: "plan/fetchAllByPlatformId",
    }),
  },
  setup() {
    const $store = useStore();
    const firstSku = $store.getters["platform/getAll"][0]?.sku;
    const slide = ref(firstSku);
    return {
      slide,
    };
  },
};
</script>
