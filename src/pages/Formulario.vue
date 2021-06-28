<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-card flat square>
        <q-form @submit="handleSubmit()">
          <q-card-section>
            <div class="text-primary text-h5 text-center">Formulário</div>
          </q-card-section>
          <q-card-section>
            <!-- Nome -->
            <q-input v-model="formVal.nome" name="nome" label="Nome" required />
            <!-- Email -->
            <q-input
              v-model="formVal.email"
              name="email"
              label="E-mail"
              required
            />
            <!-- Data de Nascimento -->
            <q-input
              v-model="formVal.nasc"
              label="Data de Nascimento"
              mask="date"
              locale="pt-Br"
              name="nasc"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="formVal.nasc">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <!-- CPF -->
            <q-input
              v-model="formVal.cpf"
              label="CPF"
              mask="###.###.###-##"
              name="cpf"
              required
            />
            <!-- Telefone -->
            <q-input
              v-model="formVal.telefone"
              label="Telefone"
              mask="(##)#####-####"
              name="telefone"
              required
            />
          </q-card-section>

          <q-card-actions class="flex justify-between">
            <q-btn flat color="grey" :to="{ path: '/' }">Voltar</q-btn>
            <q-btn type="submit" flat color="primary">Enviar</q-btn>
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { reactive, defineComponent } from "vue";

export default defineComponent({
  name: "PageFormulario",
  setup() {
    const formVal = reactive({
      nome: "Usuário",
      email: "email_do_usuario@email.com.br",
      nasc: "1991-06-28",
      cpf: "12345678901",
      telefone: "11098765432",
    });
    return {
      formVal,
    };
  },
  methods: {
    handleSubmit() {
      console.log("========================");
      console.log("SUBMIT");
      console.log(this.formVal);
      console.log("========================");
    },
  },
});
</script>
