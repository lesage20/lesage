<template>
  <q-card flat>
    <q-toolbar>
      <q-btn
        class="q-mx-sm"
        size="sm"
        no-caps
        @click="seeTab = !seeTab"
        color="orange"
        flat
        :label="seeTab ? 'invisible' : 'visible'"
      >
      </q-btn>

      <q-btn
        class="q-mx-sm"
        flat
        no-caps
        @click="sidebarLoading.removeElmBtn = !sidebarLoading.removeElmBtn"
        color="pink"
        size="sm"
        :label="sidebarLoading.removeElmBtn ? 'act. remove ' : 'deact. remove '"
      >
      </q-btn>

      <q-btn
        class="q-mx-sm"
        no-caps
        @click="
          sidebarLoading.locateInStockBtn = !sidebarLoading.locateInStockBtn
        "
        flat
        size="sm"
        color="primary"
        :label="sidebarLoading.locateInStockBtn ? 'act locate' : 'deact locate'"
      >
      </q-btn>
    </q-toolbar>

    <q-splitter
      v-if="seeTab"
      :horizontal="$q.platform.is.mobile"
      class="q-py-sm"
    >
      <template #before>
        <q-tabs
          class="q-ma-sm"
          :vertical="!$q.platform.is.mobile"
          active-bg-color="teal"
          indicator-color="transparent"
          v-model="leftTabs"
        >
          <q-tab
            v-for="tab in tabs"
            :key="tab.name"
            :class="tab.name == 'removeElmBtn' ? removeClass : locateClass"
            @click="clickMode = tab.clickMode"
            :name="tab.name"
          >
            <q-spinner-gears
              v-if="tab.loadingState()"
              color="white"
              size="md"
            />
            <q-icon v-else :name="tab.icon" size="md"></q-icon>
            <span class="text-subtitle1">{{ tab.label }}</span>
            <span class="text-subtitle1">{{ tab.class }}</span>
          </q-tab>
        </q-tabs>
      </template>
      <template #after>
        <q-tab-panels animated v-model="leftTabs">
          <q-tab-panel
            v-for="tab in tabs"
            :key="tab.name + tab.icon"
            :name="tab.name"
          >
            <q-card flat>
              <q-card-section class="q-mx-xs q-px-xs">
                <h2 class="text-h6">{{ tab.name }}</h2>
                <div class="text-body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  voluptatum corrupti maxime et assumenda nostrum sequi,
                  quisquam id, omnis praesentium debitis totam repudiandae
                  ducimus, amet ea nemo ratione dolor quae?
                </div>
              </q-card-section>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </q-card>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const seeTab = ref(true);
const activeTab = ref({
  stock: null,
});
const sidebarLoading = reactive({
  removeElmBtn: false,
  locateInStockBtn: true,
});

// you can do any conditions with  these computed properties and return whatever you want.
const removeClass = computed(() =>
  sidebarLoading.removeElmBtn ? "sidebarLoading" : "bg-transparent"
);

const locateClass = computed(
  () =>
    (activeTab.value.stock == null || activeTab.value.stock
      ? "bg-transparent"
      : "sidebarInactive") +
    (sidebarLoading.locateInStockBtn ? " sidebarLoading" : "")
);

const tabs = ref([
  {
    name: "removeElmBtn",
    label: "Remove element",
    clickMode: "RemoveElement",
    icon: "disabled_visible",
    loadingState: () => sidebarLoading.removeElmBtn,
  },
  {
    name: "locateInStockBtn",
    label: "Locate In Stock",
    clickMode: "LocateInStock",
    icon: "check_box",
    loadingState: () => sidebarLoading.locateInStockBtn,
  },
]);

const leftTabs = ref("removeElmBtn");
</script>
