import type { PageProps } from '@inertiajs/core'
import type { Config } from 'ziggy-js'

export interface Auth {
  user: User
}

export interface SharedData extends PageProps {
  name: string
  quote: { message: string; author: string }
  auth: Auth
  ziggy: Config & { location: string }
  sidebarOpen: boolean
}

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  email_verified_at: string | null
  created_at: string
  updated_at: string
}
