<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-xs-12 col-md-8">
        <h1 class="text-center text-h3">
          Me contacter <span class="text-green">.</span>
          {{ tab }}
        </h1>
      </div>
    </div>
    <div class="row">
      <div
        v-motion-pop
        class="col-xs-12 col-md-4 q-pa-sm"
        v-for="contact in contacts"
        :key="contact.name"
      >
        <q-card flat class="text-center">
          <!-- <q-img :src="contact.img" height="300px"> </q-img> -->
          <q-card-section>
            <q-avatar color="dark-3" size="300px">
              <q-icon :name="contact.icon" :color="contact.color"></q-icon>
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <q-btn
              no-caps
              outline
              :color="contact.color"
              :href="contact.url"
              class="text-h6 text-center full-width"
              v-if="contact.name != 'Gmail'"
              >{{ contact.value }}</q-btn
            >
            <q-btn
              v-else
              no-caps
              outline
              :color="contact.color"
              class="text-h6 text-center full-width"
            >
              <a
                :href="'mailto:' + contact.value"
                :class="'text-decoration-none text-' + contact.color"
              >
                {{ contact.value }}</a
              >
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const contacts = ref([
  {
    name: "Whatsapp",
    icon: "mdi-whatsapp",
    url: "https://wa.me/+2250787572030",
    value: "+225 0787572030",
    color: "teal-4",
    img: "https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_960_720.png",
  },
  {
    name: "Gmail",
    icon: "mdi-gmail",
    url: "angezanou00@gmail.com",
    value: "angezanou00@gmail.com",
    color: "grey-4",
    img: "https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_960_720.png",
    // img: "https://cdn.pixabay.com/photo/2019/10/19/17/24/gmail-4561841_960_720.png",
  },
  {
    name: "LinkedIn",
    icon: "mdi-linkedin",
    url: "angezanou00@gmail.com",
    value: "Ange Aymar Zanou",
    color: "blue",
    img: "https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_960_720.png",
    // img: "https://cdn.pixabay.com/photo/2019/10/19/17/24/gmail-4561841_960_720.png",
  },
]);
</script>
<style>
.text-decoration-none {
  text-decoration: none;
}
</style>
