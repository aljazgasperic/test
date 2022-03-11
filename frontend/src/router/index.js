import { createRouter, createWebHistory } from "vue-router";
import ObrazecTeles from '@/views/ObrazecTeles.vue';
import PrikazTeles from '@/views/PrikazTeles.vue';
import PregledTelesa from '@/views/PregledTelesa.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ObrazecTeles
    },
    {
      path: "/prikaz",
      name: "prikaz",
      component: PrikazTeles
    },
    {
      path: "/pregled/:id",
      name: "pregled",
      component: PregledTelesa
    }
  ],
});

export default router;
