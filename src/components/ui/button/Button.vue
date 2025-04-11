<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  fullWidth: false
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const buttonClasses = computed(() => {
  return cn(
    // Base styles
    'relative inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    
    // Size variants
    {
      'px-3 py-1.5 text-sm': props.size === 'sm',
      'px-4 py-2 text-base': props.size === 'md',
      'px-6 py-3 text-lg': props.size === 'lg',
    },
    
    // Width
    {
      'w-full': props.fullWidth
    },
    
    // Color variants
    {
      // Primary variant
      'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600': props.variant === 'primary',
      
      // Secondary variant
      'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600': props.variant === 'secondary',
      
      // Outline variant
      'border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 focus-visible:ring-gray-400': props.variant === 'outline',
      
      // Ghost variant
      'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-gray-400': props.variant === 'ghost',
      
      // Danger variant
      'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600': props.variant === 'danger',
    }
  )
})
</script>

<template>
  <button 
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
    v-bind="$attrs"
  >
    <span v-if="loading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg class="animate-spin -ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    <span :class="{ 'opacity-0': loading }" class="flex items-center gap-2 justify-center">
      <slot name="icon-left"></slot>
      <slot></slot>
      <slot name="icon-right"></slot>
    </span>
  </button>
</template>
