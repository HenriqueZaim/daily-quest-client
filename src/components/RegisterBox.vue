<template>
        <v-row>
        <v-col cols="12">
          <v-text-field
            class="mt-5"
            label="E-mail"
            type="email"
            hide-details="auto"
            prepend-inner-icon="mdi-mail"
            clearable
            filled
            rounded
            required
          ></v-text-field>
        </v-col>
      </v-row>
</template>

<script>
export default {
  name: 'RegisterBox',
};
</script>
