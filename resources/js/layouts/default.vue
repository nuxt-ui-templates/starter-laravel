<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <Link href="/">
          <AppLogo class="h-6 w-auto shrink-0" />
        </Link>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/nuxt-ui-templates/starter-laravel"
          target="_blank"
          icon="simple-icons:github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <USeparator icon="simple-icons:laravel" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">Built with Nuxt UI • © {{ new Date().getFullYear() }}</p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/nuxt-ui-templates/starter-laravel"
          target="_blank"
          icon="simple-icons:github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
