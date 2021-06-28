<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <CarouselPlatform />
    </div>
  </q-page>
</template>

<script>
import { Loading } from "quasar";
import { defineComponent } from "vue";
import CarouselPlatform from "components/CarouselPlatform";

export default defineComponent({
  name: "PageIndex",
  components: {
    CarouselPlatform,
  },
  preFetch({ store }) {
    Loading.show();
    return store.dispatch("platform/fetchAll").finally(() => {
      Loading.hide();
    });
  },
});
</script>
