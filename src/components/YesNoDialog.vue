<template>
  <v-dialog
    :value="value"
    max-width="290"
    @input="$emit('input', value)"
  >
    <v-card>
      <v-card-title
        v-if="title"
        class="headline"
      >
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="green darken-1"
          flat="flat"
          @click="dialogResponse(true)"
        >
          {{ continueButton }}
        </v-btn>

        <v-btn
          color="red darken-1"
          flat="flat"
          @click="dialogResponse(false)"
        >
          {{ cancelButton }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'YesNoDialog',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: true,
      default: 'Are you sure you want to do this?'
    },
    continueButton: {
      type: String,
      required: false,
      default: 'Yes'
    },
    cancelButton: {
      type: String,
      required: false,
      default: 'Cancel'
    }
  },
  methods: {
    dialogResponse (response) {
      this.$emit('dialogResponse', response)
    }
  }
}
</script>
